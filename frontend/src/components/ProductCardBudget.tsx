import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  padding: "20px 20px 0 20px",
});

const Media = styled(CardMedia)({
  height: "240px",
});

const StrikeThrough = styled(Typography)({
  textDecoration: "line-through",
  fontSize: "24px",
});

const DiscountedPrice = styled(Typography)({
  color: "red",
  fontSize: "24px",
});

const Price = styled(Typography)({
  fontSize: "24px",
});

// An interface that defines the structure of the Product object
interface Product {
  id: number;
  title: string;
  rating: number;
  imgSrc: string;
  strikeThrough: string | null;
  price: string;
}

// An interface that defines the structure of the productProps given from the ProductBudget page. The structure is based on the interface above
interface ProductCardProps {
  productProps: Product;
}

// Prop (productProps) is given from the ProductBudget page. The information is then rendered out on the ProductCardBudget.
const ProductCardBudget: React.FC<ProductCardProps> = ({ productProps }) => {
  return (
    <StyledCard>
      <Media image={productProps.imgSrc} title="Product Image" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {productProps.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          ⭐⭐⭐⭐⭐ {productProps.rating}
        </Typography>
        <Box display="flex" gap={"20px"}>
          {productProps.strikeThrough ? (
            <>
              <StrikeThrough>{productProps.strikeThrough}</StrikeThrough>
              <DiscountedPrice>{productProps.price}</DiscountedPrice>
            </>
          ) : (
            <Price>{productProps.price}</Price>
          )}
        </Box>
        <Button variant="contained" size="small" sx={{ mt: 1, width: "100%" }}>
          Lägg i kundvagn
        </Button>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCardBudget;
