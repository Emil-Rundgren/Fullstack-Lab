import React from "react";
import ProductCard from "./ProductCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// The PopularOffers component is made up of a responsive grid-layout based on the PopularCard component
const PopularOffers: React.FC = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f7f7f7" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: 600, mb: 6 }}
      >
        Våra populäraste erbjudanden
      </Typography>
      <Grid container spacing={2}>
        {/* Generate an array of 8 product cards */}
        {Array.from(Array(8).keys()).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularOffers;
