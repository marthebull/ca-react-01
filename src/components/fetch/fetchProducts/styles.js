import styled from "styled-components";
import { Container } from "../../../GlobalStyles";

export const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
};

export const MessageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  row-gap: 50px;
`;

export const ProductGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: stretch;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
  padding-top: 50px;
  padding-bottom: 50px;
  min-height: 50vh;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  ${Container}
`;

export const ProductCard = styled.div`
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 20px;
  gap: 10px;
  position: relative;
  height: 100%;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05);
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 20vw;
  object-fit: cover;
  border-radius: 5px 5px 0 0;

  @media screen and (max-width: 576px) {
    height: 50vw;
  }
`;

export const OldPrice = styled.p`
  color: #b9c8e1;
  text-decoration: line-through;
  display: inline-block;
  padding-right: 10px;
  margin-bottom: 0;
`;

export const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 10px;
  text-decoration: none;
  font-size: 1rem;
`;

export const ProductTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
`;

export const SearchCont = styled(Container)`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-top: 30px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  max-width: 700px;
  min-width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 576px) {
    min-width: 300px;
  }
`;
