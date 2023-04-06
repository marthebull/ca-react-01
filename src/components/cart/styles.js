import { Link } from "react-router-dom";
import styled from "styled-components";
import { Title, Button } from "../../GlobalStyles";

export const CartTitle = styled(Title)`
  margin-bottom: 0;
`;

export const CartTotal = styled(Title)`
  margin-bottom: 0;
  text-align: center;
  margin-bottom: 20px;
`;

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  padding: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const CartItemImage = styled.img`
  width: 50px;
  height: 70px;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 20px;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
`;

export const CartItemTitle = styled(Title)`
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

export const CartItemPrice = styled.p`
  margin-bottom: 0;
`;

export const CartItemAmount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
`;

export const CartItemAmountPick = styled(Title)`
  font-size: 2rem;
  margin-bottom: 0;
  margin-right: 10px;
  margin-left: auto;
`;

export const CartItemIcons = styled.span`
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    color: blue;
  }
`;

export const Amount = styled.span`
  padding: 0 10px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CheckoutBtn = styled(Button)`
  margin: 0 auto 20px;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: white;
  }
`;
