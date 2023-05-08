import React from "react";
import Counter from "./Counter";
import useCounter from "../../utils/hooks/useCounter";

const CounterContainer = ({ stock, onAdd }) => {
  console.log(stock);
  return <Counter stock={stock} onAdd={onAdd} />;
};

export default CounterContainer;
