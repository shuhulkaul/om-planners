import { Box, Typography } from "@mui/material";
import "./about.css";
import ab from "../../resources/img/about.jpg";
function About() {
  return (
    <Box className="screen about" id="about">
      <Typography className="s-title" sx={{ pt: "120px" }}>
        About Us
      </Typography>
      <Box className="ab-main">
        <Box className="ab-img-container">
          <Box component="img" draggable={false} src={ab} className="ab-img" />
        </Box>
        <Box className="ab-textbox">
          <Typography className="ab-h-text">
            Your one-stop Premium destination for all your event needs.
          </Typography>
          <Typography className="ab-s-text">
            Creating Magical Moments. Your dream wedding awaits with our expert
            event planners. From exquisite decor to seamless coordination, we
            make your special day unforgettable.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              mt: "20px",
              gap: "50px",
            }}
          >
            <Box>
              <Typography className="ab-h2-text">5+</Typography>
              <Typography className="ab-s2-text">years of expertise</Typography>
            </Box>
            <Box>
              <Typography className="ab-h2-text">100+</Typography>
              <Typography className="ab-s2-text">venues</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
