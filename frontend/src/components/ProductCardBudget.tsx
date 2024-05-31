import React, { useEffect, useState } from "react";
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

interface Product {
  id: number;
  title: string;
  rating: number;
  imgSrc: string;
  strikeThrough: string | null;
  price: string;
}

const ProductCardBudget: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <StyledCard key={product.id}>
          <Media image={product.imgSrc} title="Product Image" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ⭐⭐⭐⭐⭐ {product.rating}
            </Typography>
            <Box display="flex" gap={"20px"}>
              {product.strikeThrough ? (
                <>
                  <Price>{product.strikeThrough}</Price>
                  <DiscountedPrice>{product.price}</DiscountedPrice>
                </>
              ) : (
                <DiscountedPrice>{product.price}</DiscountedPrice>
              )}
            </Box>
            <Button
              variant="contained"
              size="small"
              sx={{ mt: 1, width: "100%" }}
            >
              Lägg i kundvagn
            </Button>
          </CardContent>
        </StyledCard>
      ))}
    </div>
  );
};

export default ProductCardBudget;
