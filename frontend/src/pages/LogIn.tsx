import React, { useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import LoginPopUp from "../components/LoginPopUp"; // Import the LoginPopUp component

// StyledCard applies custom styles to the Card component
const StyledCard = styled(Card)({
  maxWidth: 400,
  margin: "auto",
  padding: "20px",
  marginTop: "10vh",
  marginBottom: "20vh",
  textAlign: "center",
});

// Setting up a validation Schema with Yup
const validationSchema = object({
  email: string()
    .email("Ange en giltig e-postadress")
    .required("E-post är obligatoriskt"),
  password: string().required("Lösenord är obligatoriskt"),
});

const LogIn: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // State to track login status

  const formik = useFormik({
    // Set initial form values for email and password fields
    initialValues: {
      email: "",
      password: "",
    },
    // Define validation schema using Yup to validate form fields
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setErrorMessage(null); // Reset error message
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error);
        }

        const data = await response.json();
        console.log("Login successful", data.message);
        setIsLoggedIn(true); // Set login status to true on successful login
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error during login:", error);
          setErrorMessage(error.message);
        }
      }
    },
  });

  if (isLoggedIn) {
    return <LoginPopUp />; // Show the success popup if logged in
  }

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Logga In
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-post"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Lösenord"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {errorMessage && (
            <Typography color="error" variant="body2">
              {errorMessage}
            </Typography>
          )}
          <Link href="#" variant="body2">
            Glömt lösenord?
          </Link>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Logga In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="createAccount" variant="body2">
                Ny användare? Skapa konto här
              </Link>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default LogIn;
