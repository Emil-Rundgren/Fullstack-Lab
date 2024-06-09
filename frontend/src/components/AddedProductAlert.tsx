import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const CenteredBox = styled(Box)({
  position: "fixed",
  top: "90%",
  left: "50%",
  width: "90%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#1976d2",
  color: "white",
  padding: "10px",
  borderRadius: "8px",
  zIndex: 1000,
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
});

const AddedProductAlert: React.FC = () => {
  return (
    <CenteredBox>
      <Typography variant="h6" textAlign="center">
        Produkten har blivit tillagd i kundvagnen!
      </Typography>
    </CenteredBox>
  );
};

export default AddedProductAlert;
