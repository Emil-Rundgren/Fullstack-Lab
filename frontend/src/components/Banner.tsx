import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Banner: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "#f7f7f7",
        height: `${isSmallScreen ? "300px" : "500px"}`,
        textAlign: "center",
        position: "relative",
        backgroundImage: `url(${
          isSmallScreen
            ? "/images/bannerImgMobile.jpg"
            : "/images/bannerImg.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", // Ensure text is readable over the image
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
      />
      <Typography
        variant="h4"
        component="div"
        sx={{ mb: isSmallScreen ? 24 : 2, fontWeight: 700 }}
      >
        Sommarens deals! Upp till 30% rabatt
      </Typography>
    </Box>
  );
};

export default Banner;
