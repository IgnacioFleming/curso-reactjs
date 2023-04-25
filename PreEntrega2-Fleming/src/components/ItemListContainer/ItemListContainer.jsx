import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock.js";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(items);
  console.log(categoryName);

  useEffect(() => {
    const productsFiltered = products.filter(
      (item) => item.category === categoryName
    );

    const getProducts = new Promise((resolve, reject) => {
      resolve(categoryName ? productsFiltered : products);
    });
    getProducts.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
