import { useState } from "react";
import { Link } from "react-router-dom"; // React Router DOM for linking
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { logowhiteImg } from "../utils";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* AppBar for the Navbar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", color: "white" }}
      >
        <Toolbar className="container">
          <Box display="flex" alignItems="center" className="grow gap-4">
            <img src={logowhiteImg} alt="logo" />
            <Typography
              variant="h4"
              display="flex"
              alignItems="center"
              component="div"
              className="grow"
            >
              <Link
                to="/"
                className="font-bold text-lg sm:text-xl"
                style={{ textDecoration: "none", color: "#CBCED2" }}
              >
                Explore Ethiopia
              </Link>
            </Typography>
          </Box>

          {/* Hamburger Menu Icon for mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Links for larger screens */}
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Link
              to="/"
              className="py-0 px-4 hover:underline hover:underline-offset-4 font-semibold"
              style={{ color: "#C7C7C6" }}
            >
              Home
            </Link>
            <Link
              to="/"
              className="py-0 px-4 hover:underline hover:underline-offset-4 font-semibold"
              style={{ color: "#C7C7C6" }}
            >
              Discover
            </Link>
            <Link
              to="/"
              className="py-0 px-4 hover:underline hover:underline-offset-4 font-semibold"
              style={{ color: "#C7C7C6" }}
            >
              Experience
            </Link>
            <Link
              to="/"
              className="py-0 px-4 hover:underline hover:underline-offset-4 font-semibold"
              style={{ color: "#C7C7C6" }}
            >
              Journey
            </Link>
            <Link
              to="/"
              className="py-0 px-4 hover:underline hover:underline-offset-4 font-semibold"
              style={{ color: "#C7C7C6" }}
            >
              Connect
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MUI Drawer for mobile navigation */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation">
          <IconButton onClick={toggleDrawer} className="m-2">
            <CloseIcon />
          </IconButton>

          <List>
            <ListItem button onClick={toggleDrawer}>
              <Link
                to="/"
                className="w-full hover:underline hover:underline-offset-2"
                style={{ color: "black" }}
              >
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <Link
                to="/"
                className="w-full hover:underline hover:underline-offset-2"
                style={{ color: "black" }}
              >
                <ListItemText primary="Discover" />
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <Link
                to="/"
                className="w-full hover:underline hover:underline-offset-2"
                style={{ color: "black" }}
              >
                <ListItemText primary="Experience" />
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <Link
                to="/"
                className="w-full hover:underline hover:underline-offset-2"
                style={{ color: "black" }}
              >
                <ListItemText primary="Journey" />
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <Link
                to="/"
                className="w-full hover:underline hover:underline-offset-2"
                style={{ color: "black" }}
              >
                <ListItemText primary="Connect" />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
