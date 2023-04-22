import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";
import { products } from "../../products.js";
import { useParams } from "react-router-dom";

const ItemListConteiner = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(items);
  console.log(categoryName);

  useEffect(() => {
    const productsCategory = products.filter(
      (item) => item.category == categoryName
    );
    console.log(categoryName);
    console.log(productsCategory);
    const getProducts = new Promise((resolve, reject) => {
      resolve(categoryName ? productsCategory : products);
    });
    getProducts.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListConteiner;
