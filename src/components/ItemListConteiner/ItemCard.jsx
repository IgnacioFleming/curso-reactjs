import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ItemCard = () => {
  return (
    <Card sx={{ maxWidth: 345, padding: "10px" }}>
      <CardMedia
        component="img"
        alt="item"
        height="100%"
        image="https://res.cloudinary.com/dah7yxmc5/image/upload/v1682119671/D_NQ_NP_977568-MLA45597561768_042021-O_e0atif.webp"
        sx={{ objectFit: "contain", width: "100%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export default ItemCard;
