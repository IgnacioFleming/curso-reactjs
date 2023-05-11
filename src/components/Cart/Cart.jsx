import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { Link } from "react-router-dom";
import useCounter from "../../utils/hooks/useCounter";
import styled from "@emotion/styled";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Cart = ({ cart, deleteFromCart, totalAmount }) => {
  //   const { counter, agregar, quitar, reset } = useCounter(0);

  return (
    <div style={{ display: "flex", justifyItems: "center" }}>
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

        <Box sx={{ width: "80%", borderTop: "2px solid #B4B0B0" }}>
          <Typography variant="h4" color="initial">
            Total : {totalAmount}
          </Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default Cart;

//     <div style={{ display: "flex", justifyContent: "center" }} key={item.id}>
//       <Card
//         sx={{
//           width: "50%",
//           height: 500,
//           padding: "100px",
//           margin: "50px",
//         }}
//       >
//         <Grid container sx={{ justifyContent: "center", height: "100%" }}>
//           <Grid item md={6} sx={{ height: "100%" }}>
//             <CardMedia
//               component="img"
//               alt="item"
//               image={item.img}
//               sx={{
//                 width: "80%",
//                 height: "80%",
//                 objectFit: "contain",
//               }}
//             />
//           </Grid>

//           <Grid item md={6}>
//             <CardContent
//               sx={{
//                 height: 100,
//                 marginBottom: 30,
//               }}
//             >
//               <Typography
//                 gutterBottom
//                 variant="h3"
//                 component="div"
//                 sx={{ width: "100%", marginBottom: 10 }}
//               >
//                 {item.title}
//               </Typography>

//               <Typography
//                 variant="body1"
//                 color="text.secondary"
//                 sx={{ marginBottom: 10 }}
//               >
//                 {item.description}
//               </Typography>

//               <Typography
//                 gutterBottom
//                 variant="h6"
//                 component="div"
//                 sx={{
//                   width: "100%",
//                   textAlign: "center",
//                   height: "10%",
//                   marginTop: 1,
//                 }}
//               >
//                 Precio: ${item.price}
//               </Typography>
//             </CardContent>

//             <CardActions sx={cardActionsStyle}>
//               <Button onClick={quitar}>
//                 <AiOutlineMinusSquare size={20} />
//               </Button>
//               <Box sx={{ marginLeft: 1 }}>{counter}</Box>
//               <Button onClick={agregar}>
//                 <AiOutlinePlusSquare size={20} />
//               </Button>
//               <Button onClick={reset}>
//                 <RxCounterClockwiseClock size={20} />
//               </Button>
//             </CardActions>
//             <CardActions sx={cardActionsStyle}>
//               <Button sx={{ marginRight: 1 }} size="small" variant="contained">
//                 Agregar al Carrito
//               </Button>

//               <Link to={`/`}>
//                 <Button size="small" variant="contained">
//                   Volver
//                 </Button>
//               </Link>
//             </CardActions>
//           </Grid>
//         </Grid>
//       </Card>
//     </div>
