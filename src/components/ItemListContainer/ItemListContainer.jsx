import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../products.js";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  const { itemId } = useParams();
  console.log(items);
  console.log(itemId);
  console.log(categoryName);

  useEffect(() => {
    const productsFiltered = products.filter(
      (item) => item.category === categoryName
    );
    const itemFiletered = products.filter((item) => item.id == itemId);
    console.log(categoryName);
    console.log(productsFiltered);
    const getProducts = new Promise((resolve, reject) => {
      if (categoryName) {
        resolve(productsFiltered);
      } else if (itemId) {
        resolve(itemFiletered);
      } else {
        resolve(products);
      }
    });
    getProducts.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [categoryName, itemId]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
