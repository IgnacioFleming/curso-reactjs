import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import useCounter from "../../utils/hooks/useCounter";

const ItemCard = ({ item }) => {
  const { itemId } = useParams();
  const { counter, agregar, quitar, reset } = useCounter(0);
  console.log(itemId);
  return (
    <Card sx={{ maxWidth: 300, padding: "10px" }}>
      <CardMedia
        component="img"
        alt="item"
        image={item.img}
        sx={{
          width: "100%",
          height: "50%",
          objectFit: "contain",
          maxHeight: 250,
        }}
      />
      <CardContent
        sx={{
          height: 100,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ height: "25%", marginBottom: 4 }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: "30%" }}
        >
          {item.description}
        </Typography>
        {itemId && (
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
            Precio: ${item.price}
          </Typography>
        )}
      </CardContent>
      {itemId && (
        <CardActions
          sx={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <Button>
            <AiOutlineMinusSquare size={20} onClick={quitar} />
          </Button>
          <Box sx={{ marginLeft: 1 }}>{counter}</Box>
          <Button>
            <AiOutlinePlusSquare size={20} onClick={agregar} />
          </Button>
          <Button>
            <RxCounterClockwiseClock size={20} onClick={reset} />
          </Button>
        </CardActions>
      )}
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        {!itemId && (
          <Link sx={{ justifySelf: "start" }} to={`/item/${item.id}`}>
            <Button
              size="small"
              variant="contained"
              sx={{ justifySelf: "start" }}
            >
              Detalle
            </Button>
          </Link>
        )}
        {itemId && (
          <>
            <Button sx={{ marginRight: 1 }} size="small" variant="contained">
              Agregar al Carrito
            </Button>

            <Link to={`/`}>
              <Button size="small" variant="contained">
                Volver
              </Button>
            </Link>
          </>
        )}
      </CardActions>
    </Card>
  );
};
export default ItemCard;
