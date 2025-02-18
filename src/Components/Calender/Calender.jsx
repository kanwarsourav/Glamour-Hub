import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  FormControlLabel,
  Radio,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid2"; // Using Grid2 from MUI v2
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useNavigate } from "react-router-dom";
import Bgimage from "../../assets/Herobg/herobackground.jfif";

const Calender = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        padding: "20px",
      }}
    >
      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Title and Next Button (Above Calendar) */}
          <Grid container size={12} spacing={2} justifyContent="center">
            <Grid size={{ xs: 12, sm: 6 }} textAlign="center">
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, fontSize: "1.5rem", color: "white" }}
              >
                SELECT DATE & TIME
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} textAlign="center">
              <Button
                variant="contained"
                sx={{
                  background: "rgba(255,255,255,0.4)",
                  color: "white",
                  borderRadius: 2,
                  padding: "12px 25px",
                  "&:hover": {
                    background: "rgba(255,255,255,0.6)",
                  },
                }}
                onClick={() => navigate("/form")}
              >
                Next
              </Button>
            </Grid>
          </Grid>

          {/* Calendar Section (Centered) */}
          <Grid size={{ xs: 12, md: 8, lg: 6 }} display="flex" justifyContent="center">
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                padding: "20px",
                width: "100%",
                maxWidth: "400px", // Prevents it from being too large
                display: "flex",
                justifyContent: "center",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  sx={{
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 2,
                    width: "100%",
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Grid>

          {/* Time Slots (Below Calendar, Responsive) */}
          <Grid container size={10} spacing={4} justifyContent="center">
            {/* Time Slot 1 */}
            <Grid size={{ xs: 6, sm: 6 }}>
              <FormControlLabel
                value="09:00 AM TO 10:30 AM"
                control={<Radio sx={{ color: "white" }} />}
                label="09:00 AM TO 10:30 AM"
                sx={{
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: 2,
                  padding: "10px",
                  width: "100%",
                  color: "white",
                }}
              />
            </Grid>

            {/* Time Slot 2 */}
            <Grid size={{ xs: 6, sm: 6 }}>
              <FormControlLabel
                value="11:00 AM TO 12:30 PM"
                control={<Radio sx={{ color: "white" }} />}
                label="11:00 AM TO 12:30 PM"
                sx={{
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: 2,
                  padding: "10px",
                  width: "100%",
                  color: "white",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Calender;
