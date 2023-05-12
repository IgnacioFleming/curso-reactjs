import React, { useContext } from "react";
import Checkout from "./Checkout";
import { CartContext } from "../../context/CartContext";

const CheckoutContainer = () => {
  const { cart } = useContext(CartContext);
  return <Checkout cart={cart} />;
};

export default CheckoutContainer;
