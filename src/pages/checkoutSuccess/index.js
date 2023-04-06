import React from "react";
import { ButtonLink, CheckoutBtn } from "../../components/cart/styles";
import { Wrapper } from "./styles";

const CheckoutSucces = () => {
  return (
    <>
      <Wrapper>
        <h1>Thank you for your purchase!</h1>
        <p>
          You will probably never recieve these items but you could try again :){" "}
        </p>
        <CheckoutBtn>
          <ButtonLink to="/">Go back</ButtonLink>
        </CheckoutBtn>
      </Wrapper>
    </>
  );
};

export default CheckoutSucces;
