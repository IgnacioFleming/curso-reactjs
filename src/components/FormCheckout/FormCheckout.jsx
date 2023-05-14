import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FormCheckout = ({ handleSubmit }) => {
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
        <TextField fullWidth id="name" label="Nombre" variant="outlined" />
        <TextField
          fullWidth
          name="last-name"
          label="Apellido"
          variant="outlined"
        />
        <TextField
          fullWidth
          name="phone-number"
          label="Teléfono"
          variant="outlined"
        />
        <TextField fullWidth name="email" label="Email" variant="outlined" />
        <TextField
          fullWidth
          name="repeat-email"
          label="Confirmar Email"
          variant="outlined"
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
