import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
// import { products } from "../../productsMock.js";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const q = query(itemCollection, where("category", "==", categoryName));
      consulta = q;
    } else {
      consulta = itemCollection;
    }
    console.log(consulta);
    getDocs(consulta)
      .then((response) => {
        const products = response.docs.map((e) => {
          return { ...e.data(), id: e.id };
        });
        console.log(products);
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
