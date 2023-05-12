import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const itemFiltered = products.find((item) => item.id === Number(itemId));
    setItem(itemFiltered);
  }, [itemId]);

  const onAdd = (cantidad) => {
    let data = { ...item, quantity: cantidad };
    cantidad > 0 && addToCart(data);
  };

  return (
    <>
      <ItemDetail item={item} onAdd={onAdd} />
    </>
  );
};

export default ItemDetailContainer;
