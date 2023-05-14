import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FormCheckoutContainer from "../FormCheckout/FormCheckoutContainer";

const Checkout = ({ cart, cartAmount }) => {
  const total = cartAmount();
  return (
    <div>
      <Grid container>
        <Grid item md={6} sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Typography variant="h4" mt={10} color="initial">
              Detalle de tu compra
            </Typography>
            <List
              sx={{
                width: "auto",
                marginTop: 5,
              }}
            >
              {cart.map((e) => {
                console.log(e);
                return (
                  <>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt={e.title} src={e.img} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={e.title}
                        secondary={
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Cantidad: {e.quantity}
                            </Typography>

                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Monto: $ {e.quantity * e.price}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                );
              })}
            </List>
            <Typography variant="h5" color="initial" mt={5} mb={5}>
              Total de la Compra: $ {total}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "2px",
                height: "90%",
                minHeight: "500px",
                backgroundColor: "#ccc",
              }}
            ></div>
          </Box>
        </Grid>
        <Grid item md={6}>
          <FormCheckoutContainer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;
