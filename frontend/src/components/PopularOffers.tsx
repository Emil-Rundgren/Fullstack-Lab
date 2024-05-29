import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

// Define custom styles using the styled API
const Root = styled(Box)({
  padding: "20px",
  backgroundColor: "#f7f7f7",
});

const StyledCard = styled(Card)({
  // textAlign: "center",
  padding: "20px 20px 0 20px",
});

const Media = styled(CardMedia)({
  height: 140,
});

const Price = styled(Typography)({
  textDecoration: "line-through",
  fontSize: "24px",
});

const DiscountedPrice = styled(Typography)({
  color: "red",
  fontSize: "24px",
});

// Define the ProductCard component
const ProductCard: React.FC = () => {
  return (
    <StyledCard>
      <Media image="/images/productSectionImg1.jpg" title="Product Image" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Länk med text för Laptop-title
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          ⭐⭐⭐⭐⭐ (239)
        </Typography>
        <Box display="flex" gap={"20px"}>
          <Price>4 990:-</Price>
          <DiscountedPrice>3 990:-</DiscountedPrice>
        </Box>
        <Button variant="contained" size="small" sx={{ mt: 1, width: "100%" }}>
          Lägg i kundvagn
        </Button>
      </CardContent>
    </StyledCard>
  );
};

// Define the PopularOffers component
// The PopularOffers component is made up of a responsive grid-layout based on the PopularCard component above
const PopularOffers: React.FC = () => {
  return (
    <Root>
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
    </Root>
  );
};

export default PopularOffers;
