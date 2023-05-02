import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cart, deleteFromCart } = useContext(CartContext);

  return <Cart cart={cart} deleteFromCart={deleteFromCart} />;
};

export default CartContainer;
