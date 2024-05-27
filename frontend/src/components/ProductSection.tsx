// ProductSection.tsx
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ProductSection: React.FC = () => {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f7f7f7" }}>
      <Typography
        variant="h5"
        component="div"
        sx={{ mb: 4, mt: 2, textAlign: "center" }}
      >
        Vi har något för alla
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "1rem",
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/images/productSectionImg1.jpg"
              alt="Category 1"
              style={{ maxWidth: "100%" }}
            />
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              Datorer till det lägsta priset
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Läs mer
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "1rem",
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/images/productSectionImg1.jpg"
              alt="Category 2"
              style={{ maxWidth: "100%" }}
            />
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              För dig som tycker att lagom räcker
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Läs mer
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "1rem",
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/images/productSectionImg1.jpg"
              alt="Category 3"
              style={{ maxWidth: "100%" }}
            />
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              Våra vassaste datorer
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Läs mer
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductSection;
