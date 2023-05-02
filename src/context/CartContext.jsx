import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (producto) => {
    setCart([...cart, producto]);
  };
  const deleteFromCart = (id) => {
    let newCart = [];
    cart.map((e) => {
      if (e.id != id) {
        return (newCart = [...newCart, e]);
      }
    });
    setCart(newCart);
  };
  let data = { addToCart, deleteFromCart, cart };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
