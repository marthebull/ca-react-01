import React from "react";
import {
  Amount,
  CartItemAmount,
  CartItemAmountPick,
  CartItemContainer,
  CartItemIcons,
  CartItemImage,
  CartItemInfo,
  CartItemPrice,
  CartItemTitle,
} from "./styles";
import { removeItem, increase, decrease } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <>
      <CartItemContainer key={id}>
        <CartItemImage src={img} alt={title} />
        <CartItemInfo>
          <CartItemTitle>{title}</CartItemTitle>
          <CartItemPrice>{price}</CartItemPrice>
        </CartItemInfo>
        <CartItemAmount>
          <CartItemAmountPick>
            <CartItemIcons
              onClick={() => {
                if (amount === 1) {
                  dispatch(removeItem(id));
                  return;
                }
                dispatch(decrease({ id }));
              }}
            >
              -{" "}
            </CartItemIcons>
            <Amount>{amount}</Amount>
            <CartItemIcons
              onClick={() => {
                dispatch(increase({ id }));
              }}
            >
              +
            </CartItemIcons>
          </CartItemAmountPick>
        </CartItemAmount>
      </CartItemContainer>
    </>
  );
};

export default CartItem;
