import React, { useEffect, useState } from "react";
import AddedProductAlert from "../components/AddedProductAlert";
import ProductCardBudget from "../components/ProductCardBudget";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

// An interface that defines the structure of the Product object
interface Product {
  id: number;
  title: string;
  rating: number;
  imgSrc: string;
  strikeThrough: number | null;
  price: number;
}

const PopularOffers: React.FC = () => {
  // products is set as an array with elements that follow the Product object above.
  // The state is set to an empty [] initially
  const [products, setProducts] = useState<Product[]>([]);

  // When the page is loaded the useEffect function fetches the data from the backend server.
  // When that is done it updates the state of the products variable with the fetched data
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Set the alertBox state to false so it stays hidden
  const [showAlert, setShowAlert] = useState(false);

  // When button is clicked show the alertbox (AddProductAlert.tsx)
  // By passing the handleButtonClick function as a prop to the ProductCardBudget component, the function can be triggered for any product
  const handleButtonClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
  };

  // Filter and slice the products array to get only the first 4 products with a non-null strikeThrough value
  const filteredProducts = products
    .filter((product) => product.strikeThrough !== null)
    .slice(0, 4);

  return (
    <Box sx={{ backgroundColor: "#f7f7f7", padding: "20px" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: 600, mb: 6 }}
      >
        Våra populäraste erbjudanden
      </Typography>
      <Grid container spacing={2}>
        {/* It iterates through the filtered products array. In every iteration it sends a prop (productProps & handleButtonClick) with the current product-/element-information and the function handleButtonClick to the ProductCardBudget component. */}
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={product.id}>
            <ProductCardBudget
              productProps={product}
              onButtonClick={handleButtonClick}
            />
          </Grid>
        ))}

        {/* Show alertbox when button is clicked on */}
        {showAlert && <AddedProductAlert />}
      </Grid>
    </Box>
  );
};

export default PopularOffers;
