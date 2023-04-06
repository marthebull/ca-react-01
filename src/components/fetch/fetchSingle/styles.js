import styled from "styled-components";
import { Container } from "../../../GlobalStyles";

export const MessageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  row-gap: 50px;
`;

export const ProductContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  padding-top: 60px;
  padding-bottom: 60px;
  gap: 40px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ProductImgCont = styled.div`
  height: 70vh;
  width: 50%;
  position: relative;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  width: 50%;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const ProductDesc = styled.p`
  max-width: 500px;
`;

export const SmallLink = styled.small`
  text-decoration: underline;
`;

export const ReviewsCont = styled(Container)`
  margin-bottom: 40px;
`;

export const ReviewTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
  margin-bottom: 40px;
`;

export const ReviewCont = styled.div`
  margin-bottom: 20px;
`;

export const ReviewName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
`;
