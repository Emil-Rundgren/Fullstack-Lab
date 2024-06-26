// ProductSection.tsx
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CategorySection: React.FC = () => {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f7f7f7" }}>
      {/* Section: Category Title */}
      <Typography
        variant="h4"
        component="div"
        sx={{ mb: 4, mt: 2, textAlign: "center", fontWeight: 600 }}
      >
        Vi har något för alla
      </Typography>

      {/* Section: Category Grid */}
      <Grid container spacing={4} justifyContent="center">
        {/* Category 1 */}
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
              Laptops till det lägsta priset
            </Typography>
            <Button variant="contained" href="/productBudget" sx={{ mt: 2 }}>
              Läs mer
            </Button>
          </Box>
        </Grid>

        {/* Category 2 */}
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
              src="/images/productSectionImg2.jpg"
              alt="Category 2"
              style={{ maxWidth: "100%" }}
            />
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              För dig som tycker att lagom räcker
            </Typography>
            <Button variant="contained" href="/productMidRange" sx={{ mt: 2 }}>
              Läs mer
            </Button>
          </Box>
        </Grid>

        {/* Category 3 */}
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
              src="/images/productSectionImg3.jpg"
              alt="Category 3"
              style={{ maxWidth: "100%" }}
            />
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              Våra vassaste Laptops
            </Typography>
            <Button variant="contained" href="/productHighEnd" sx={{ mt: 2 }}>
              Läs mer
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategorySection;
