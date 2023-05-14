import React, { useContext } from "react";
import Checkout from "./Checkout";
import { CartContext } from "../../context/CartContext";

const CheckoutContainer = () => {
  const { cart, cartAmount } = useContext(CartContext);
  return <Checkout cart={cart} cartAmount={cartAmount} />;
};

export default CheckoutContainer;
