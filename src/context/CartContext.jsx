import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (producto) => {
    let existe = isInCart(producto.id);
    if (existe) {
      let newCart = cart.map((e) => {
        if (e.id === producto.id) {
          return { ...e, quantity: producto.quantity + e.quantity };
        } else {
          return e;
        }
        setCart(newCart);
      });
    }
    setCart([...cart, producto]);
  };

  const isInCart = (id) => {
    let existe = cart.some((e) => e.id === id);
    return existe;
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
