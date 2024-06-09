import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const StyledCard = styled(Card)({
  padding: "20px 20px 0 20px",
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
  strikeThrough: number | null;
  price: number;
}

// An interface that defines the structure of the productProps given from the ProductBudget page. The structure is based on the interface above
interface ProductCardProps {
  productProps: Product;

  onButtonClick: () => void;
}

// Prop (productProps) is given from the ProductBudget page. The information is then rendered out on the ProductCardBudget.
// Prop onButtonClick is sent so that the function can be triggered for any product. Thus showing the AddedProductAlert for every ProductCard when the button is clicked on.
const ProductCardBudget: React.FC<ProductCardProps> = ({
  productProps,
  onButtonClick,
}) => {
  // Add media query
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Create a navigate function using the useNavigate hook:
  const navigate = useNavigate();

  // When function is called the user will be navigated to the new route
  const handleCardClick = () => {
    navigate(`/productBudget/${productProps.id}`);
  };

  return (
    <StyledCard>
      <CardMedia
        image={productProps.imgSrc}
        title="Product Image"
        onClick={handleCardClick}
        sx={{
          height: `${isMediumScreen ? "150px" : "200px"}`,
          width: `${isMediumScreen ? "200px" : "250px"}`,
          objectFit: "cover",
          cursor: "pointer",
          margin: "0 auto",
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          onClick={handleCardClick}
          sx={{ cursor: "pointer" }}
        >
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
        <Button
          onClick={onButtonClick}
          variant="contained"
          size="small"
          sx={{ mt: 1, width: "100%" }}
        >
          Lägg i kundvagn
        </Button>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCardBudget;
