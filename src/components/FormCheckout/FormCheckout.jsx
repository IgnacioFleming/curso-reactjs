import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FormCheckout = ({ handleSubmit, handleChange, values, errors }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" mt={11} color="initial">
        Por favor completá tus datos para continuar
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          width: "60%",
          paddingTop: 30,
          marginBottom: 20,
        }}
      >
        <TextField
          fullWidth
          name="nombre"
          label="Nombre"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          name="apellido"
          label="Apellido"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          name="telefono"
          label="Teléfono"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          name="email"
          label="Email"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          name="confirmarEmail"
          label="Confirmar Email"
          variant="outlined"
          onChange={handleChange}
        />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
          <Button type="submit" variant="contained">
            Finalizar Compra
          </Button>

          <Link to="/cart">
            <Button type="button" variant="contained">
              Volver
            </Button>
          </Link>
        </Box>
      </form>
    </Box>
  );
};

export default FormCheckout;
