import React from "react";
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
  const formik = useFormik({
    // Set initial form values for email and password fields
    initialValues: {
      email: "",
      password: "",
    },
    // Define validation schema using Yup to validate form fields
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Log form values when submitted
      console.log("Form submitted", values);
    },
  });

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
              <Link href="#" variant="body2">
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
