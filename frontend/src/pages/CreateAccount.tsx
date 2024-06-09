import React, { useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
    .email("Ange en giltig e-postadress") // Error message for invalid email
    .required("E-post är obligatoriskt"), // Error message for required email
  password: string().required("Lösenord är obligatoriskt"), // Error message for required password
});

const CreateAccount: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message
  const [accountCreated, setAccountCreated] = useState<boolean>(false); // State to track account creation status

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
        const response = await fetch("http://localhost:3000/create-account", {
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
        console.log("Account created", data.message);
        setAccountCreated(true); // Set account created status to true on successful account creation
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error during account creation:", error);
          setErrorMessage(error.message); // Set error message if an error occurs
        }
      }
    },
  });

  if (accountCreated) {
    return <LoginPopUp />; // Show the success popup if account is created
  }

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Skapa Konto
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit} // Attach formik submit handler to form
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
            error={formik.touched.email && Boolean(formik.errors.email)} // Show error state if email validation fails
            helperText={formik.touched.email && formik.errors.email} // Show email error message
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
            error={formik.touched.password && Boolean(formik.errors.password)} // Show error state if password validation fails
            helperText={formik.touched.password && formik.errors.password} // Show password error message
          />
          {errorMessage && (
            <Typography color="error" variant="body2">
              {errorMessage} // Display error message if it exists
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Skapa Konto
          </Button>
          <Grid container justifyContent="center"></Grid>{" "}
          {/* Empty grid container for future use */}
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default CreateAccount;
