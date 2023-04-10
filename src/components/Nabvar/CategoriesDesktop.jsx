import { Box, Grid, Typography } from "@mui/material";

import React from "react";

export const CategoriesDesktop = () => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item xs={2}>
        <Typography>Todos</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>Computación</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>Muebles</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>Sistemas de Monitoreo</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>Equipamiento</Typography>
      </Grid>
    </Grid>
  );
};
