import React from "react";
import { Box } from "@mui/material";
import { RiShoppingCartLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const boxStyle = {
  display: "flex",
  justifyContent: "space-betwen",
  height: "100%",
  alignItems: "center",
  cursor: "pointer",
};
const counterStyle = {
  height: "100%",
  border: "solid 1px white",
  borderRadius: "50%",
  position: "relative",
  top: "-17px",
  right: 10,
  height: "auto",
  width: "17px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1",
};

const CartWidget = () => {
  const navigate = useNavigate();
  return (
    <Box sx={boxStyle} onClick={() => navigate("/cart")}>
      <RiShoppingCartLine size={25} />

      <span style={counterStyle}>0</span>
    </Box>
  );
};

export default CartWidget;
