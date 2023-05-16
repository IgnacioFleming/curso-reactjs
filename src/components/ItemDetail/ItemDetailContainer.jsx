import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);
  const { addToCart, getCartQuantity } = useContext(CartContext);

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const itemFiltered = doc(itemCollection, itemId);
    getDoc(itemFiltered)
      .then((res) => {
        const product = {
          ...res.data(),
          id: res.id,
        };
        setItem(product);
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  const onAdd = (cantidad) => {
    let data = { ...item, quantity: cantidad };
    cantidad > 0 && addToCart(data);
  };

  let cantidad = getCartQuantity(item.id);

  return (
    <>
      <ItemDetail item={item} onAdd={onAdd} cantidad={cantidad} />
    </>
  );
};

export default ItemDetailContainer;
