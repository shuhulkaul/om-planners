import React from "react";
import "./hero.css";
import { Box, Typography } from "@mui/material";
import logoTag from "../../resources/img/logo-with-heading.png";
import logo from "../../resources/img/logo.png";
function Hero() {
  return (
    <Box className="screen hero" id="home">
      <Box className="header">
        <Box
          component="img"
          src={logoTag}
          draggable={false}
          className="logo-tag"
          onClick={() => window.location.replace("/#home")}
        />
        <Box
          component="img"
          src={logo}
          draggable={false}
          className="logo-divider-blur-r"
        />
        <Box className="h-items">
          <Typography
            className="h-item"
            onClick={() => window.location.replace("/#about")}
          >
            About
          </Typography>
          <Typography
            className="h-item"
            onClick={() => window.location.replace("/#services")}
          >
            Services
          </Typography>
          <Typography
            className="h-item"
            onClick={() => window.location.replace("/#events")}
          >
            Events
          </Typography>
          <Typography
            className="h-item"
            onClick={() => window.location.replace("/#gallery")}
          >
            Gallery
          </Typography>
          <Typography
            className="h-item"
            onClick={() => window.location.replace("/#contact")}
          >
            Contact
          </Typography>
        </Box>
      </Box>
      <Box
        component="img"
        src={logo}
        draggable={false}
        className="logo-divider"
      />
      <Box
        component="img"
        src={logo}
        draggable={false}
        className="logo-divider-blur"
      />
    </Box>
  );
}

export default Hero;
