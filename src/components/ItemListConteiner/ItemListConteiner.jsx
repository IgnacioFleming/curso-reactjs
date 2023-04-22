import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";
import { products } from "../../products.js";

const ItemListConteiner = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      resolve(products);
    });
    getProducts.then((res) => setItems(res)).catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListConteiner;
