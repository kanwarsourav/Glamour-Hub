import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from "@mui/material";
import Grid from "@mui/material/Grid2"; // Using Grid2
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const navLinks = ["HOME", "SERVICES", "OUR TEAM", "PORTFOLIO", "CONTACT"];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "black", padding: "10px 0" }}>
        <Container>
         
            <Grid container alignItems="center" justifyContent="space-between">
              {/* Left: Brand Name */}
              <Grid xs="auto">
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                  GLAMOUR HUB
                </Typography>
              </Grid>

              {/* Right: Navigation Links (Desktop) or Menu Icon (Mobile) */}
              <Grid xs="auto">
                {isMobile ? (
                  // Hamburger Menu for Mobile
                  <IconButton edge="end" color="inherit" onClick={() => setOpen(true)}>
                    <MenuIcon />
                  </IconButton>
                ) : (
                  // Navigation Links for Desktop
                  <Grid container spacing={3}>
                    {navLinks.map((item) => (
                      <Grid key={item} xs="auto">
                        <Typography variant="body1" sx={{ cursor: "pointer", color: "white" }}>
                          {item}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Grid>
         
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          {navLinks.map((item) => (
            <ListItem button key={item} onClick={() => setOpen(false)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
