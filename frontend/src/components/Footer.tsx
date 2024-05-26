// Footer.tsx
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "white",
        color: "color",
        mt: "auto",
        borderTop: "3px solid black",
        width: "100%",
        "& svg": {
          color: "black", // Set all icons to black
        },
      }}
    >
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        E-LAPTOP
      </Typography>
      <Typography variant="body2" component="div">
        Kontakta oss:{" "}
        <Link href="mailto:support@elaptop.com" color="inherit">
          support@elaptop.com
        </Link>
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <IconButton
          href="https://www.facebook.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://www.youtube.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <YouTubeIcon />
        </IconButton>
        <IconButton
          href="https://www.instagram.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Link href="/" color="inherit" sx={{ mx: 1 }}>
          Hem
        </Link>
        <Link href="/about" color="inherit" sx={{ mx: 1 }}>
          Om oss
        </Link>
        <Link href="/contact" color="inherit" sx={{ mx: 1 }}>
          Kontakta oss
        </Link>
        <Link href="/terms" color="inherit" sx={{ mx: 1 }}>
          Användarvillkor
        </Link>
      </Box>
      <Typography variant="body2" component="div" sx={{ mt: 2 }}>
        &copy; {new Date().getFullYear()} E-LAPTOP
      </Typography>
    </Box>
  );
};

export default Footer;
