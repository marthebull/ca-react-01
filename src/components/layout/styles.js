import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../GlobalStyles";

export const Nav = styled.nav`
  background-color: #ebf1fb;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #001662;

  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 50px;

  @media screen and (max-width: 960px) {
    left: 30px;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 30px;

    font-size: 1.4rem;
    color: #001662;
    cursor: pointer;
  }
`;

export const CartBtn = styled.div`
  font-size: 1.7rem;
  color: #001662;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 15px;
  top: -2px;

  &:hover {
    color: blue;
  }

  @media screen and (max-width: 960px) {
    position: relative;
    top: -3px;
    right: 50px;
  }
`;

export const AmountBadge = styled.span`
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: relative;
  top: -7px;
  right: 10px;
`;

export const AmountBadgeNumber = styled.p`
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
  padding-top: 1px;
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  list-style: none;
  text-align: center;
  background-color: #ebf1fb;
  margin-bottom: 0;
  justify-content: flex-end;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 40px;
    padding-left: 0;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;

  &:hover {
    border-bottom: 2px solid blue;
    opacity: 1;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #001662;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-weight: 600;
  font-size: 1rem;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: blue;
      opacity: 1;
      transition: all 0.3s ease;
    }
  }
`;

export const FooterCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ebf1fb;
  padding-top: 40px;
`;

export const Copyright = styled.p`
  font-size: 0.6rem;
  padding-top: 20px;
  text-align: center;
  color: #001662;
`;

export const CartContainer = styled.div`
  width: 320px;
  min-width: 320px;
  height: 100vh;
  position: fixed;
  top: 0px;
  overflow: auto !important;
  right: ${({ click }) => (click ? 0 : "-320px")};
  z-index: 9000;
  transition: 0.2s ease;

  @media screen and (max-width: 576px) {
    width: 100vw;
    right: -100vw;
  }
`;
