import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (producto) => {
    let existe = isInCart(producto.id);
    if (existe) {
      let newCart = cart.map((e) => {
        if (e.id === producto.id) {
          return { ...e, quantity: producto.quantity };
        } else {
          return e;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
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
  const cartAmount = () => {
    let totalAmount = cart.reduce((acc, e) => {
      return acc + e.quantity * e.price;
    }, 0);
    return totalAmount;
  };

  const cartQuantity = () => {
    let itemsQuantity = cart.reduce((acc, e) => {
      return acc + e.quantity;
    }, 0);
    return itemsQuantity;
  };

  const getCartQuantity = (id) => {
    let product = cart.find((e) => e.id === id);
    return product?.quantity;
  };

  let data = {
    addToCart,
    deleteFromCart,
    cart,
    cartAmount,
    cartQuantity,
    getCartQuantity,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
