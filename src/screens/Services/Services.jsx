import { Box, Typography } from "@mui/material";
import "./services.css";
import tent from "../../resources/img/services/tent.png";
import catering from "../../resources/img/services/catering.png";
import flower from "../../resources/img/services/flower.png";
import lightDeco from "../../resources/img/services/light-deco.png";
import logo from "../../resources/img/logo.png";
function Services() {
  return (
    <Box className="screen services" id="services">
      <Typography className="s-title" sx={{ pt: "120px" }}>
        Services
      </Typography>
      <Box className="ser-main">
        <Box
          component="img"
          src={logo}
          draggable={false}
          className="logo-divider-blur-r"
        />
        <Box className="ser-items">
          <Box
            component="img"
            draggable={false}
            src={tent}
            className="ser-item"
          />
          <Box
            component="img"
            draggable={false}
            src={catering}
            className="ser-item"
          />
          <Box
            component="img"
            draggable={false}
            src={flower}
            className="ser-item"
          />
          <Box
            component="img"
            draggable={false}
            src={lightDeco}
            className="ser-item"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Services;
