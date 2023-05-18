import React, { useContext, useState } from "react";
import Checkout from "./Checkout";
import { CartContext } from "../../context/CartContext";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

const CheckoutContainer = () => {
  const { cart, cartAmount, setCartEmpty } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const completePurchase = (data) => {
    let total = cartAmount();

    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((res) => setOrderId(res.id))
      .catch((err) => console.log(err));

    cart.map((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });

    setCartEmpty();
  };

  return (
    <Checkout
      cart={cart}
      cartAmount={cartAmount}
      completePurchase={completePurchase}
      orderId={orderId}
    />
  );
};

export default CheckoutContainer;
