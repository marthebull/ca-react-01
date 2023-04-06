import { Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { CartTitle } from "./styles";

const SideCart = () => {
  const { cartItems, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <>
        <Offcanvas.Header closeButton>
          <CartTitle>Your shopping cart</CartTitle>
        </Offcanvas.Header>
        <Offcanvas.Body>is empty :(</Offcanvas.Body>
      </>
    );
  }
  return (
    <>
      <Offcanvas.Header closeButton>
        <CartTitle>Shopping Cart</CartTitle>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </Offcanvas.Body>
    </>
  );
};

export default SideCart;
