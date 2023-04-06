import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../../../utils/constants";
import {
  MessageContainer,
  ProductContainer,
  ProductDesc,
  ProductImg,
  ProductImgCont,
  ProductInfo,
  ReviewCont,
  ReviewName,
  ReviewsCont,
  ReviewTitle,
} from "./styles";
import {
  OldPrice,
  NewPrice,
  DiscountBadge,
  Button,
  Col,
  Title,
} from "../../../GlobalStyles";
import { Rate } from "antd";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";

const FetchSingle = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAdd = () => {
    dispatch(
      addToCart({
        title: product.title,
        img: product.imageUrl,
        price: product.discountedPrice,
        id: product.id,
      })
    );
    //console.log(product.title, product.discountedPrice);
  };

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setProduct(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`${URL}${id}`);
  }, [id]);

  if (isLoading || !product) {
    return <MessageContainer>Loading...</MessageContainer>;
  }

  if (isError) {
    return <MessageContainer>Error loading data</MessageContainer>;
  }

  //console.log(product);

  return (
    <>
      <ProductContainer>
        <ProductImgCont>
          {product.price === product.discountedPrice ? (
            ""
          ) : (
            <DiscountBadge>
              {((1 - product.discountedPrice / product.price) * 100).toFixed(0)}
              %
            </DiscountBadge>
          )}
          <ProductImg src={product.imageUrl}></ProductImg>
        </ProductImgCont>
        <ProductInfo>
          <div>
            <Title>{product.title}</Title>
            <span>
              {product.price === product.discountedPrice ? (
                ""
              ) : (
                <OldPrice>{product.price} kr</OldPrice>
              )}
              <NewPrice>{product.discountedPrice} kr</NewPrice>
            </span>
          </div>
          <ProductDesc>{product.description}</ProductDesc>
          <Col>
            <Rate disabled allowHalf defaultValue={product.rating} />
            <HashLink smooth to="#reviews">
              <small>Reviews: {product.reviews.length}</small>
            </HashLink>
          </Col>
          <Button onClick={handleAdd}>Add to cart</Button>
        </ProductInfo>
      </ProductContainer>

      <ReviewsCont id="reviews">
        <ReviewTitle>Reviews: {product.reviews.length}</ReviewTitle>
        {product.reviews.map((review) => (
          <ReviewCont key={review.id}>
            <ReviewName>{review.username}</ReviewName>
            <Rate disabled allowHalf defaultValue={product.rating} />
            <p>{review.description}</p>
          </ReviewCont>
        ))}
      </ReviewsCont>
    </>
  );
};

export default FetchSingle;
