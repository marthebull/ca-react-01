import React from "react";
import { URL } from "../../../utils/constants";
import { useState, useEffect } from "react";
import {
  ProductGrid,
  ProductCard,
  ProductText,
  ProductImg,
  linkStyle,
  ProductTitle,
  MessageContainer,
  SearchCont,
  SearchInput,
} from "./styles";
import { DiscountBadge, OldPrice, NewPrice } from "../../../GlobalStyles";
import { Link } from "react-router-dom";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState("");

  useEffect(() => {
    // Function that gets our posts
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(URL);
        const json = await response.json();
        // Setting our `posts` state to the API data we received
        setProducts(json);

        setIsLoading(false);
      } catch (error) {
        // Clear the loading state if we get an error and then
        // set our error state to true
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <MessageContainer>Loading...</MessageContainer>;
  }

  if (isError) {
    return <MessageContainer>Error loading data</MessageContainer>;
  }

  return (
    <>
      <SearchCont>
        <h2>Search for products</h2>
        <SearchInput
          placeholder="Search..."
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </SearchCont>
      <ProductGrid>
        {products
          .filter((products) => {
            if (query === "") {
              return products;
            } else if (
              products.title.toLowerCase().includes(query.toLowerCase())
            ) {
              return products;
            }
          })
          .map((products) => (
            <Link to={products.id} style={linkStyle} key={products.id}>
              <ProductCard>
                {products.price === products.discountedPrice ? (
                  ""
                ) : (
                  <DiscountBadge>
                    {(
                      (1 - products.discountedPrice / products.price) *
                      100
                    ).toFixed(0)}
                    %
                  </DiscountBadge>
                )}

                <ProductImg src={products.imageUrl} alt="Product" />
                <ProductText>
                  <ProductTitle>{products.title}</ProductTitle>
                  <span>
                    {products.price === products.discountedPrice ? (
                      ""
                    ) : (
                      <OldPrice>{products.price} kr</OldPrice>
                    )}
                    <NewPrice>{products.discountedPrice} kr</NewPrice>
                  </span>
                </ProductText>
              </ProductCard>
            </Link>
          ))}
      </ProductGrid>
    </>
  );
};

export default FetchProducts;
