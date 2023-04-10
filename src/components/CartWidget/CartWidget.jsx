import React from "react";
import { Box } from "@mui/material";
import { RiShoppingCartLine } from "react-icons/ri";

const CartWidget = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-betwen",
          height: "100%",
          alignItems: "center",
        }}
      >
        <RiShoppingCartLine size={25} />
        <div
          sx={{
            position: "absolute",
            top: "0",
            right: "50px",
            width: "10px",
          }}
        >
          <span>0</span>
        </div>
      </Box>
    </>
  );
};

export default CartWidget;
