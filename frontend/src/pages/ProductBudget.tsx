import React from "react";
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

const ProductBudget: React.FC = () => {
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
            {Array.from(Array(24).keys()).map((_, index) => (
              <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
                <ProductCardBudget />
              </Grid>
            ))}
          </ProductGrid>
        </MainContent>
      </Grid>
    </Grid>
  );
};

export default ProductBudget;
