import React, { useState } from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";
const FormCheckoutContainer = () => {
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      confirmarEmail: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .max(20, "El nombre debe tener como máximo 20 caracteres"),
      apellido: Yup.string()
        .required("Este campo es obligatorio")
        .max(20, "El nombre debe tener como máximo 20 caracteres"),
      telefono: Yup.number("Este campo debe ser numérico").max(
        15,
        "El telefono debe tener 15 caracteres como máximo"
      ),
      email: Yup.string()
        .required("Este campo es obligatorio")
        .email("Este campo debe ser un email"),
      confirmarEmail: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf(Yup.ref("email"), "Los correos no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <FormCheckout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      values={values}
    />
  );
};

export default FormCheckoutContainer;
