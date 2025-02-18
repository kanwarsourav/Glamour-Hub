import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ArrowForward } from "@mui/icons-material";
import Bgimage from "../../assets/Herobg/herobackground.jfif";

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <Box
      sx={{
        height: "94vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(135deg, #654ea3, #eaafc8)",
          color: "white",
          borderRadius: "20px",
          padding: "12px 24px",
          fontSize: "18px",
          fontWeight: "bold",
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px", // Spacing between text and icon
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            background: "linear-gradient(135deg, #543b98, #d89aba)",
          },
        }}
        onClick={() => navigate("/products")} // Navigate to Products.jsx
      >
        Book a Free Demo
        <ArrowForward />
      </Button>
    </Box>
  );
};

export default Hero;
