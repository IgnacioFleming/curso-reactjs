import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RxCounterClockwiseClock } from "react-icons/rx";
import useCounter from "../../utils/hooks/useCounter.js";
import { Link } from "react-router-dom";
const cardActionsStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  marginBottom: 6,
};

const ItemDetail = ({ item }) => {
  const { counter, agregar, quitar, reset } = useCounter(0);
  return (
    <div>
      {item.map((itemF) => {
        return (
          <div
            style={{ display: "flex", justifyContent: "center" }}
            key={itemF.id}
          >
            <Card
              sx={{
                width: "50%",
                height: 500,
                padding: "100px",
                margin: "50px",
              }}
            >
              <Grid container sx={{ justifyContent: "center", height: "100%" }}>
                <Grid item md={6} sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    alt="item"
                    image={itemF.img}
                    sx={{
                      width: "80%",
                      height: "80%",
                      objectFit: "contain",
                    }}
                  />
                </Grid>

                <Grid item md={6}>
                  <CardContent
                    sx={{
                      height: 100,
                      marginBottom: 30,
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h3"
                      component="div"
                      sx={{ width: "100%", marginBottom: 10 }}
                    >
                      {itemF.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ marginBottom: 10 }}
                    >
                      {itemF.description}
                    </Typography>

                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        width: "100%",
                        textAlign: "center",
                        height: "10%",
                        marginTop: 1,
                      }}
                    >
                      Precio: ${itemF.price}
                    </Typography>
                  </CardContent>

                  <CardActions sx={cardActionsStyle}>
                    <Button onClick={quitar}>
                      <AiOutlineMinusSquare size={20} />
                    </Button>
                    <Box sx={{ marginLeft: 1 }}>{counter}</Box>
                    <Button onClick={agregar}>
                      <AiOutlinePlusSquare size={20} />
                    </Button>
                    <Button onClick={reset}>
                      <RxCounterClockwiseClock size={20} />
                    </Button>
                  </CardActions>
                  <CardActions sx={cardActionsStyle}>
                    <Button
                      sx={{ marginRight: 1 }}
                      size="small"
                      variant="contained"
                    >
                      Agregar al Carrito
                    </Button>

                    <Link to={`/`}>
                      <Button size="small" variant="contained">
                        Volver
                      </Button>
                    </Link>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default ItemDetail;
