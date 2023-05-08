import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
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

const Cart = ({ cart, deleteFromCart }) => {
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
            <Item sx={{ width: "80%", height: 150 }} elevation={5}>
              <Grid container>
                <Grid
                  item
                  md={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    style={{
                      height: "80%",
                      width: "80%",
                      objectFit: "contain",
                    }}
                    src={e.img}
                  />
                </Grid>
                <Grid
                  item
                  md={5}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Typography gutterBottom mt={5} variant="h5" color="initial">
                    {e.title}
                  </Typography>
                  <Typography
                    paragraph
                    variant="subtitle2"
                    color="initial"
                    sx={{ width: "90%" }}
                  >
                    {e.description}
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
                    alignItems: "flex-start",
                    paddingLeft: 6,
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
                    alignItems: "flex-start",
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
