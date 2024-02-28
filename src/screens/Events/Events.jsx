import { Box, Typography } from "@mui/material";
import "./events.css";
import wedding from "../../resources/img/events/wedding.png";
import bday from "../../resources/img/events/birthday.png";
import corporate from "../../resources/img/events/corporate.png";
import school from "../../resources/img/events/school.png";
import logo from "../../resources/img/logo.png";
function Events() {
  return (
    <Box className="screen events" id="events">
      <Box
        component="img"
        src={logo}
        draggable={false}
        className="logo-divider-blur-l"
      />
      <Typography className="s-title" sx={{ pt: "120px" }}>
        Events
      </Typography>
      <Box className="ev-main">
        <Box className="ev-items">
          <Box
            component="img"
            draggable={false}
            src={wedding}
            className="ev-item"
          />
          <Box
            component="img"
            draggable={false}
            src={bday}
            className="ev-item"
          />
          <Box
            component="img"
            draggable={false}
            src={corporate}
            className="ev-item"
          />
          <Box
            component="img"
            draggable={false}
            src={school}
            className="ev-item"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Events;
