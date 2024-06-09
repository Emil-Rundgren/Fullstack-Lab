import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)({
  maxWidth: "80vw",
  margin: "auto",
  padding: "80px 20px",
  marginTop: "10vh",
  marginBottom: "20vh",
  textAlign: "center",
  position: "relative",
  backgroundColor: "#1976d2",
  color: "white",
});

const ProgressBar = styled("div")({
  height: "5px",
  backgroundColor: "white",
  position: "absolute",
  bottom: 0,
  left: 0,
  transition: "width 1s linear",
});

const SuccessPopup: React.FC = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      navigate("/"); // Redirect to homepage
    }

    return () => clearInterval(interval);
  }, [countdown, navigate]);

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Du är nu inloggad!
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          Du kommer att skickas till hemsidan om {countdown} sec.
        </Typography>
        <ProgressBar style={{ width: `${(countdown / 5) * 100}%` }} />
      </CardContent>
    </StyledCard>
  );
};

export default SuccessPopup;
