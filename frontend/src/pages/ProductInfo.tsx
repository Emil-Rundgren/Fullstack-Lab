import React, { useEffect, useState } from "react";
import AddedProductAlert from "../components/AddedProductAlert";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

interface Product {
  id: number;
  title: string;
  subTitle: string;
  rating: number;
  imgSrc: string;
  listProcessor: string;
  listMemory: string;
  listStrength: string;
  strikeThrough: number | null;
  price: number;
}

const ProductInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  // For responsive design
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Set the alertBox state to false so it stay hidden
  const [showAlert, setShowAlert] = useState(false);

  // When button is clicked show the alertbox (AddProductAlert.tsx)
  const handleButtonClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
  };

  // Fetch the product data to use downbellow
  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  // Desktop Layout
  if (!isMobile) {
    return (
      <Box sx={{ padding: "20px", backgroundColor: "#f7f7f7", flexGrow: 1 }}>
        {/* BreadCrumbs */}
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingBottom: 2,
          }}
        >
          <Link color="inherit" href="/">
            Hem
          </Link>
          <Link color="inherit" href="/productBudget">
            Budget laptops
          </Link>
          <Typography color="textPrimary">{product?.subTitle}</Typography>
        </Breadcrumbs>
        {/* Product content */}
        {product && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            maxWidth="1200px"
            margin="0 auto"
            padding="20px"
            paddingLeft="40px"
            borderRadius="8px"
            bgcolor="white"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 2, width: "100%" }}
            >
              {product.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ width: "100%" }}>
              {product.subTitle}
            </Typography>
            {/* Box containing everything except titles */}
            <Box
              display="flex"
              flexDirection="row"
              width="100%"
              marginTop="20px"
            >
              {/* Box with the productInfo + button */}
              <Box flex="1" display="flex" flexDirection="column">
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  mb={2}
                >
                  ⭐⭐⭐⭐⭐ {product.rating}
                </Typography>
                <ul>
                  <li>{product.listProcessor}</li>
                  <li>{product.listMemory}</li>
                  <li>{product.listStrength}</li>
                </ul>

                <Typography variant="h5" gutterBottom mt={2}>
                  {product.strikeThrough ? (
                    <>
                      <span style={{ textDecoration: "line-through" }}>
                        {product.strikeThrough}
                      </span>
                      <span style={{ color: "red", marginLeft: "10px" }}>
                        {product.price}
                      </span>
                    </>
                  ) : (
                    product.price
                  )}
                </Typography>
                <Button
                  variant="contained"
                  size="medium"
                  onClick={handleButtonClick}
                  sx={{ mt: 4, width: "100%" }}
                >
                  Lägg i kundvagn
                </Button>
              </Box>
              {/* Box for image */}
              <Box flex="2" display="flex" justifyContent="center">
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    marginBottom: "20px",
                  }}
                />
              </Box>
            </Box>
            <Divider sx={{ width: "100%", marginY: "20px" }} />
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Priset gäller t.o.m. 2024-06-30 eller så länge lagret räcker.
              Överstruket pris avser lägsta pris senaste 30 dagarna.
            </Typography>
          </Box>
        )}
        {/* Show alertbox when button is clicked on */}
        {showAlert && <AddedProductAlert />}
      </Box>
    );
  }

  // Mobile Layout
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f7f7f7", flexGrow: 1 }}>
      {/* BreadCrumbs */}
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ paddingBottom: 2, fontSize: "14px" }}
      >
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/productBudget">
          Budget laptops
        </Link>
        <Typography sx={{ fontSize: "14px" }} color="textPrimary">
          {product?.subTitle}
        </Typography>
      </Breadcrumbs>

      {/* Product content */}
      {product && (
        <Box
          display="flex"
          flexDirection="column"
          bgcolor="white"
          padding="20px"
          borderRadius="8px"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 600, mt: 2, width: "100%" }}
          >
            {product.title}
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ width: "100%" }}>
            {product.subTitle}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            alignItems="center"
            marginTop="20px"
          >
            <img
              src={product.imgSrc}
              alt={product.title}
              style={{
                width: "70%",
                maxWidth: "400px",
                marginBottom: "20px",
              }}
            />
            <Typography variant="body2" color="textSecondary" component="p">
              ⭐⭐⭐⭐⭐ {product.rating}
            </Typography>
            <ul>
              <li>{product.listProcessor}</li>
              <li>{product.listMemory}</li>
              <li>{product.listStrength}</li>
            </ul>
            <Box width="100%" textAlign="center">
              <Typography variant="h5" gutterBottom>
                {product.strikeThrough ? (
                  <>
                    <span style={{ textDecoration: "line-through" }}>
                      {product.strikeThrough}
                    </span>
                    <span style={{ color: "red", marginLeft: "10px" }}>
                      {product.price}
                    </span>
                  </>
                ) : (
                  product.price
                )}
              </Typography>
              <Button
                variant="contained"
                size="medium"
                sx={{ mt: 1, width: "100%" }}
              >
                Lägg i kundvagn
              </Button>
            </Box>
          </Box>
          <Divider sx={{ width: "100%", marginY: "20px" }} />
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Priset gäller t.o.m. 2024-06-30 eller så länge lagret räcker.
            Överstruket pris avser lägsta pris senaste 30 dagarna.
          </Typography>
        </Box>
      )}
    </Box>
  );
};
export default ProductInfo;
