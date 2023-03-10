import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Images from "./Images";

const drawerWidth = 240;
// const navItems = [
//   {
//   navName:'Home',
//   navLink:'/'
// },
//   {
//   navName:'About',
//   navLink:'/about'
// },
//   {
//   navName:'Contact',
//   navLink:'/contact'
// },
//   ];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", height: "max", background: "#0d373a" }}
    >
      <Typography variant="h6" sx={{ my: 2, background: "" }}>
        <img
          src={Images.logo}
          style={{ height: "35px", width: "auto" }}
          alt=""
        />
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <a href="/#HomePage" style={{ textAlign: "center" }}>
              {" "}
              <ListItemText
                sx={{ textAlign: "center", color: "#fff" }}
                primary="HOME"
              />
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <a href="/#AboutPage">
              {" "}
              <ListItemText
                sx={{ textAlign: "center", color: "#fff" }}
                primary="ABOUT"
              />
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <a href="/#ContactPage">
              {" "}
              <ListItemText
                sx={{ textAlign: "center", color: "#fff" }}
                primary="CONTACT"
              />
            </a>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        component="nav"
        sx={{
          position: "fixed",
          background: "#04040429",
          backdropFilter: "blur(32px)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", textAlign: "left" },
            }}
          >
            {" "}
            <NavLink style={{ textDecoration: "none" }} to="/">
              <img
                src={Images.logo}
                style={{ height: "35px", width: "auto" }}
                alt=""
              />
            </NavLink>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <a href="#HomePage" sx={{ color: "#fff", textDecoration: "none" }}>
              <Button sx={{ color: "white" }}>Home</Button>
            </a>

            <a href="#AboutPage" sx={{ color: "#fff", textDecoration: "none" }}>
              <Button sx={{ color: "white" }}>About</Button>
            </a>
            <a
              href="#ContactPage"
              sx={{ color: "#fff", textDecoration: "none" }}
            >
              <Button sx={{ color: "white" }}>Contact</Button>
            </a>

            <NavLink style={{ textDecoration: "none" }} to="/login">
              {" "}
              <Button
                sx={{ background: "#eee", color: "black", margin: "0px 2px" }}
              >
                LogIn{" "}
              </Button>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/signup">
              {" "}
              <Button
                sx={{ background: "black", color: "#eee", margin: "0px 2px" }}
              >
                SignUp
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
