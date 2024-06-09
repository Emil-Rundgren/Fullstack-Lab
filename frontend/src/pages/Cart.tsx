import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Cart: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#1976d2", color: "white", padding: "10px" }}>
      <Typography variant="h6" textAlign="center">
        Oj, vi glömde göra det möjligt för våra kunder att handla produkterna 😅
      </Typography>
    </Box>
  );
};

export default Cart;
