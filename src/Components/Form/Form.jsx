import React from "react";
import { TextField, Button, Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Bgimage from "../../assets/Herobg/herobackground.jfif";
const Form = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${Bgimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          p: 4,
          borderRadius: 3,
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          maxWidth: 500,
          width: "100%",
        }}
      >
        <h2 style={{ color: "#fff", textAlign: "center" }}>Fill Your Details</h2>
        <Grid container spacing={2}>
          <Grid size={{xs:12, sm:6}}>
            <TextField fullWidth label="First Name" variant="outlined"  />
          </Grid>
          <Grid size={{xs:12, sm:6}}>
            <TextField fullWidth label="Last Name" variant="outlined"  />
          </Grid>
          <Grid size={12}>
            <TextField fullWidth label="Phone Number" variant="outlined"  />
          </Grid>
          <Grid size={12}>
            <TextField fullWidth label="Email Address" variant="outlined" />
          </Grid>
          <Grid size={12}>
            <TextField fullWidth label="Additional Details" multiline rows={4} variant="outlined" InputProps={{ style: { color: "white" } }} />
          </Grid>
          <Grid size={12}>
            <Button fullWidth variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Form;
