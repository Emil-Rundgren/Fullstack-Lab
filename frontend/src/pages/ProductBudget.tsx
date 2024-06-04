import React, { useEffect, useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import ProductCardBudget from "../components/ProductCardBudget";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

// Define the main layout styles
const MainContent = styled(Box)({
  padding: "20px",
  backgroundColor: "#f7f7f7",
  flexGrow: 1,
});

const ProductGrid = styled(Grid)({
  marginTop: "20px",
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

const ProductBudget: React.FC = () => {
  // products is set as an array with elements that folows the Product object above.
  // The state is set to an empty [] initially
  const [products, setProducts] = useState<Product[]>([]);

  // When The page is loaded the useEffect function fetches the data from the Backend server. When that is done it updates the state of the products varible with the fetched data
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Grid container>
      <Grid item xs={3}>
        <FilterSidebar />
      </Grid>
      <Grid item xs={9}>
        <MainContent>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Hem
            </Link>
            <Typography color="textPrimary">Budget Laptops</Typography>
          </Breadcrumbs>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
            Budget Laptops
          </Typography>
          <ProductGrid container spacing={2}>
            {/* It iterates through every product/element in the product array. In every iteration it sends a prop (productProps) with the current product-/element-information to the ProductCardBudget component */}
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={product.id}>
                <ProductCardBudget productProps={product} />
              </Grid>
            ))}
          </ProductGrid>
        </MainContent>
      </Grid>
    </Grid>
  );
};

export default ProductBudget;
