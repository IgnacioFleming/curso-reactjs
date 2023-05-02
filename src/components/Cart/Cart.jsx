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
import { Link } from "react-router-dom";
import useCounter from "../../utils/hooks/useCounter";

const Cart = ({ cart, deleteFromCart }) => {
  //   const { counter, agregar, quitar, reset } = useCounter(0);
  return (
    <div>
      {cart.map((e) => {
        console.log(cart);
        return (
          <div key={e.id} style={{ border: "solid 1px black" }}>
            <h1>{e.title}</h1>
            <h2>{e.quantity}</h2>
            <Button variant="contained" onClick={() => deleteFromCart(e.id)}>
              Eliminar
            </Button>
          </div>
        );
      })}
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