import { LibraryAdd } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const alignment = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export const CategoriesDesktop = () => {
  const navigate = useNavigate();
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item xs={2} sx={alignment}>
        <Typography
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer" }}
          align="center"
        >
          Todos
        </Typography>
      </Grid>
      <Grid item xs={2} sx={alignment}>
        <Typography
          align="center"
          onClick={() => navigate("/category/computacion")}
          sx={{ cursor: "pointer" }}
        >
          Computación
        </Typography>
      </Grid>
      <Grid item xs={2} sx={alignment}>
        <Typography
          onClick={() => navigate("/category/muebles")}
          sx={{ cursor: "pointer" }}
          align="center"
        >
          Muebles
        </Typography>
      </Grid>
      <Grid item xs={2} sx={alignment}>
        <Typography
          onClick={() => navigate("/category/sistemas-de-monitoreo")}
          sx={{ cursor: "pointer" }}
          align="center"
        >
          Sistemas de Monitoreo
        </Typography>
      </Grid>
      <Grid item xs={2} sx={alignment}>
        <Typography
          onClick={() => navigate("/category/equipamiento")}
          sx={{ cursor: "pointer" }}
          align="center"
        >
          Equipamiento
        </Typography>
      </Grid>
    </Grid>
  );
};
