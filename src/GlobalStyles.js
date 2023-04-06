import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    margin-bottom: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    
}

p, h1, h2, h3 {
  color: #001662;
}

`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 60px;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  padding: 10px 60px;
  background-color: #001662;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  margin-right: auto;

  &:hover {
    background-color: blue;
  }

  @media screen and (max-width: 576px) {
    margin: 0 auto;
  }
`;

export const DiscountBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #001662;
  color: white;
  font-weight: 600;
  letter-spacing: 0.03rem;
  position: absolute;
  top: -10px;
  right: -10px;
`;

export const OldPrice = styled.p`
  color: #b9c8e1;
  font-weight: 600;
  text-decoration: line-through;
  display: inline-block;
  padding-right: 10px;
  margin-bottom: 0;
`;

export const NewPrice = styled.p`
  font-weight: 600;
  display: inline-block;
  padding-right: 10px;
  margin-bottom: 0;
`;

export default GlobalStyle;
