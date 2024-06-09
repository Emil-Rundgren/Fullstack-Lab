import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar: React.FC = () => {
  // Responsive Design
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (!isMobile) {
    // Desktop Layout
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="default"
          sx={{
            borderBottom: "3px solid #1976d2",
            width: "100%",
            paddingTop: 1,
          }}
        >
          <Toolbar>
            <Grid container alignItems="center" spacing={2}>
              {/* Logo */}
              <Grid item xs={2}>
                <Link href="/" color="inherit" underline="none">
                  <Typography variant="h6" component="div">
                    E-LAPTOP
                  </Typography>
                </Link>
              </Grid>
              {/* Space */}
              <Grid item xs={1} />
              {/* Search field */}
              <Grid item xs={6}>
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: 1,
                    border: "1px solid #ccc",
                    flexGrow: 1,
                    width: "100%",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                  />
                  <IconButton
                    type="submit"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
              </Grid>
              {/* Space */}
              <Grid item xs={1} />
              {/* Login icon */}
              <Grid item xs={1}>
                <Link
                  href="/LogIn"
                  color="inherit"
                  underline="none"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconButton color="inherit">
                    <LoginIcon />
                  </IconButton>
                  <Typography variant="body2">Logga in</Typography>
                </Link>
              </Grid>
              {/* ShopCart icon */}
              <Grid item xs={1}>
                <Link
                  href="/Cart"
                  color="inherit"
                  underline="none"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconButton color="inherit">
                    <ShoppingCartIcon />
                  </IconButton>
                  <Typography variant="body2">Kundvagn</Typography>
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else {
    // Mobile Layout
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="default"
          sx={{ borderBottom: "3px solid lightblue", width: "100%" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Logo */}
              <Link href="/" color="inherit" underline="none">
                <Typography variant="h6" component="div">
                  E-LAPTOP
                </Typography>
              </Link>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {/* Log In icon */}
                <Link
                  href="/LogIn"
                  color="inherit"
                  underline="none"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: 2,
                  }}
                >
                  <IconButton color="inherit">
                    <LoginIcon />
                  </IconButton>
                  <Typography variant="body2">Logga in</Typography>
                </Link>
                {/* ShopCart icon */}
                <Link
                  href="/Cart"
                  color="inherit"
                  underline="none"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconButton color="inherit">
                    <ShoppingCartIcon />
                  </IconButton>
                  <Typography variant="body2">Kundvagn</Typography>
                </Link>
              </Box>
            </Box>
            {/* Search Field */}
            <Box
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 1,
                border: "1px solid #ccc",
                width: "100%",
                marginTop: 1,
                marginBottom: 1,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
};

export default Navbar;
