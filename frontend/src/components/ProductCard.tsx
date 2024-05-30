import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

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

export default ProductCard;
