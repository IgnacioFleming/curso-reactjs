import React from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd }) => {
  console.log(stock);
  return <Counter stock={stock} onAdd={onAdd} />;
};

export default CounterContainer;
