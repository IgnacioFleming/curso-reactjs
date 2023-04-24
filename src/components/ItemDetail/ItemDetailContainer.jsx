import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);

  console.log(itemId);
  console.log(item);
  useEffect(() => {
    const itemFiltered = products.filter((item) => item.id === Number(itemId));
    console.log("hola");
    console.log(itemFiltered);
    const getItem = new Promise((resolve, reject) => {
      resolve(itemFiltered);
    });
    getItem
      .then((res) => {
        setItem(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
