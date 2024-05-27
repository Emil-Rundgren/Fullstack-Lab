import React from "react";
import Typography from "@mui/material/Typography";

const Slider: React.FC = () => {
  return (
    <Typography
      variant="h4"
      component="div"
      sx={{ mb: 2, mt: 2, textAlign: "center", fontWeight: 600 }}
    >
      Våra populäraste erbjudanden
    </Typography>
  );
};

export default Slider;
