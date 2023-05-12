import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const boxStyle = {
  paddingTop: 5,
  paddingBottom: 5,
  display: "flex",
  justifyContent: "flex-end",
  width: "90%",
};

const Cart = ({ cart, deleteFromCart, totalAmount }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack
        direction="column"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
        spacing={5}
      >
        {cart.map((e) => {
          console.log(cart);
          return (
            <Item
              sx={{
                width: "80%",
                height: 150,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              elevation={5}
            >
              <Grid container>
                <Grid item md={1}>
                  <img
                    style={{
                      height: "80%",
                      width: "80%",
                      objectFit: "contain",
                      paddingLeft: 100,
                    }}
                    src={e.img}
                  />
                </Grid>
                <Grid
                  item
                  md={5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom variant="h5" color="initial">
                    {e.title}
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <Typography
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                    variant="subtitle1"
                    color="initial"
                  >
                    Cantidad
                  </Typography>
                  <Typography gutterBottom variant="h5" color="initial">
                    {e.quantity}
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",

                    gap: 1,
                  }}
                >
                  <Typography
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                    variant="subtitle1"
                    color="initial"
                  >
                    Importe
                  </Typography>
                  <Typography gutterBottom variant="h5" color="initial">
                    {e.quantity * e.price}
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={2}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Button
                    variant="contained"
                    onClick={() => deleteFromCart(e.id)}
                  >
                    Eliminar
                  </Button>
                </Grid>
              </Grid>
            </Item>
          );
        })}
      </Stack>
      <List sx={{ width: "80%" }}>
        <Divider variant="fullWidth"></Divider>
        <Box sx={boxStyle}>
          <Typography variant="h4" color="initial">
            Total : {totalAmount}
          </Typography>
        </Box>
        <Divider variant="fullWidth"></Divider>
        <Box sx={{ ...boxStyle, gap: 2 }}>
          <Link to="/">
            <Button variant="contained">Volver</Button>
          </Link>
          <Link to="/checkout">
            <Button variant="contained" to="/checkout">
              Terminar Compra
            </Button>
          </Link>
        </Box>
      </List>
    </div>
  );
};

export default Cart;
