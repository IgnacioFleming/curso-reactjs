import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ItemCard = ({ item }) => {
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
          height: 150,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ height: "25%" }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 5 }}
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Detalle
        </Button>
      </CardActions>
    </Card>
  );
};
export default ItemCard;
