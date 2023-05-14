import React from "react";
import FormCheckout from "./FormCheckout";

const FormCheckoutContainer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return <FormCheckout handleSubmit={handleSubmit} />;
};

export default FormCheckoutContainer;
