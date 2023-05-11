import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cart, deleteFromCart, cartAmount } = useContext(CartContext);
  let totalAmount = cartAmount();

  return (
    <Cart
      cart={cart}
      deleteFromCart={deleteFromCart}
      totalAmount={totalAmount}
    />
  );
};

export default CartContainer;
