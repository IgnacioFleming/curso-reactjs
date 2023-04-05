import React from "react";

const ItemList = ({ greeting }) => {
  return (
    <div>
      <h4 style={{ textAlign: "center", marginTop: "50px" }}>{greeting}</h4>
    </div>
  );
};

export default ItemList;
