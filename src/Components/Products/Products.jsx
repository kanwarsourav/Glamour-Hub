import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Import Grid2
import { Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import pic1 from "../../assets/Products/img1.png";
import pic2 from "../../assets/Products/img2.png";
import pic3 from "../../assets/Products/img3.png";
import pic4 from "../../assets/Products/img4.png";

const services = [
  {
    id: 1,
    title: "Classic Manicure",
    description: "Classic Manicure for your best nails.",
    price: "$25.00",
    duration: "30 mins",
    image: pic1, // Replace with real image
  },
  {
    id: 2,
    title: "Gel Manicure",
    description: "Beautiful long-lasting manicure.",
    price: "$40.00",
    duration: "60 mins",
    image: pic2,
  },
  {
    id: 3,
    title: "Classic Pedicure",
    description: "Classic Pedicure for your best nails.",
    price: "$30.00",
    duration: "45 mins",
    image: pic3,
  },
  {
    id: 4,
    title: "Gel Pedicure",
    description: "Beautiful long-lasting pedicure.",
    price: "$50.00",
    duration: "45 mins",
    image: pic4,
  },
];

const Products = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleNextClick = () => {
    navigate("/calendar"); // Navigate to the Calendar page
  };

  return (
    <Box
      sx={{
        padding: 3,
        background: "#000",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Container>
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">SELECT A SERVICE</Typography>
          <Button variant="contained" color="primary" onClick={handleNextClick}>
            Next
          </Button>
        </Box>

        {/* Grid Layout */}
        <Grid container spacing={7} paddingBottom={5}>
          {services.map((service) => (
            <Grid xs={12} sm={6} md={3} key={service.id}>
              <Card
                sx={{
                  background: "#1a1a1a",
                  color: "white",
                  borderRadius: "12px",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2">{service.description}</Typography>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={1}
                  >
                    <Typography variant="body1" fontWeight="bold">
                      {service.price} | {service.duration}
                    </Typography>
                    <IconButton sx={{ color: "white" }}>
                      <CalendarMonth />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={7} paddingBottom={5}>
          {services.map((service) => (
            <Grid xs={12} sm={6} md={3} key={service.id}>
              <Card
                sx={{
                  background: "#1a1a1a",
                  color: "white",
                  borderRadius: "12px",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2">{service.description}</Typography>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={1}
                  >
                    <Typography variant="body1" fontWeight="bold">
                      {service.price} | {service.duration}
                    </Typography>
                    <IconButton sx={{ color: "white" }}>
                      <CalendarMonth />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
