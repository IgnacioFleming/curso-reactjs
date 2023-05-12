import React from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd, initial }) => {
  return <Counter stock={stock} onAdd={onAdd} initial={initial} />;
};

export default CounterContainer;
