import React from "react";
import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {items.map((item) => {
        return <ItemCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;
