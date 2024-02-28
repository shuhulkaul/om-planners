import { Box, Typography } from "@mui/material";
import "./footer.css";
import logoTagDark from "../../resources/img/logo-with-heading-dark.png";
import yt from "../../resources/img/yt.png";
import fb from "../../resources/img/fb.png";
import ig from "../../resources/img/ig.png";
import logo from "../../resources/img/logo.png";
function getYear() {
  return new Date().getFullYear();
}
function Contact() {
  return (
    <Box className="screen footer">
      <Box
        component="img"
        src={logo}
        draggable={false}
        className="logo-divider-blur-l"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: 25,
          pb: { md: 10, xs: 4 },
        }}
      >
        <Box
          component="img"
          src={logoTagDark}
          draggable={false}
          className="footer-logo"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: { md: 10, xs: 4 },
          gap: "20px",
        }}
      >
        <Box component="img" src={yt} draggable={false} className="social" />
        <Box component="img" src={fb} draggable={false} className="social" />
        <Box component="img" src={ig} draggable={false} className="social" />
      </Box>
      <Box
        sx={{
          display: { md: "flex", xs: "block" },
          justifyContent: "space-between",
          maxWidth: { md: "50vw", xs: "90vw" },
          m: "auto",
        }}
      >
        <Box sx={{ textAlign: { md: "start", xs: "center" } }}>
          <Typography className="ab-h-text">Address</Typography>
          <Typography className="ab-s-text">
            Om Planners, Near Capri Gold Finance,
            <br /> Bareilly Road, Kichha,
            <br /> Uttarakhand, India - 263148
          </Typography>
        </Box>
        <Box sx={{ textAlign: { md: "start", xs: "center" }, pt: { xs: 4 } }}>
          <Typography className="ab-h-text">Contact</Typography>
          <Typography className="ab-s-text">+91-6397803329</Typography>
          <Typography className="ab-s-text">
            ishikaevents01@gmail.com
          </Typography>
          <Typography className="ab-s-text">contact@omplanners.com</Typography>
        </Box>
      </Box>
      <Box sx={{ m: "auto", p: 5 }}>
        <span>All Rights Reserved © OM PLANNERS {getYear()} </span>
        <br />
        <span>Developed by KAULiNFINITY</span>
      </Box>
    </Box>
  );
}

export default Contact;
