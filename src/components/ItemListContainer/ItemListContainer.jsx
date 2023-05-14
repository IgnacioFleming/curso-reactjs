import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
// import { products } from "../../productsMock.js";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    // const productsFiltered = products.filter(
    //   (item) => item.category === categoryName
    // );

    // const getProducts = new Promise((resolve, reject) => {
    //   resolve(categoryName ? productsFiltered : products);
    // });
    // getProducts.then((res) => setItems(res)).catch((err) => console.log(err));

    const itemCollection = collection(db, "products");
    getDocs(itemCollection).then((response) => {
      const products = response.docs.map((e) => {
        return e.data;
      });
      console.log(products);
    });
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
