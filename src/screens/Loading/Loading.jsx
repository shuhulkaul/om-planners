import React from "react";
import "./loading.css";
import { Box } from "@mui/material";
import logo from "../../resources/img/logo.png";
function Hero() {
  return (
    <Box className="screen" id="loading">
      <Box
        className="loading-img"
        component="img"
        src={logo}
        draggable={false}
        sx={{ m: "auto", width: "100px" }}
      />
    </Box>
  );
}

export default Hero;
