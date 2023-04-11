import { Grid, Typography } from "@mui/material";
import React from "react";
const alignment = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export const CategoriesDesktop = () => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item xs={2} sx={alignment}>
        <Typography align="center">Todos</Typography>
      </Grid>
      <Grid item xs={2} sx={alignment}>
        <Typography align="center">Computación</Typography>
      </Grid>
      <Grid item xs={2} sx={alignment}>
        <Typography align="center">Muebles</Typography>
      </Grid>
      <Grid item xs={2} sx={alignment}>
        <Typography align="center">Sistemas de Monitoreo</Typography>
      </Grid>
      <Grid item xs={2} sx={alignment}>
        <Typography align="center">Equipamiento</Typography>
      </Grid>
    </Grid>
  );
};
