import { Box, Grid, AppBar, Toolbar } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import React from "react";

const Navbar = () => {
  return (
    <Box className="container-navbar">
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Box sx={{ justifyItems: { xs: "center", md: "flex-start" } }}>
              <img
                src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1680611686/logo_ecommerce_ci16kw.png"
                alt="Logo de la Empresa"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                gap: "0px",
                height: "100%",
                width: "100%",
                margin: "0",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <li>Todos</li>
              <li>Computación</li>
              <li>Muebles</li>
              <li>Sistemas de Monitoreo</li>
              <li>Equipamiento</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={1}>
            <CartWidget />
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Navbar;
