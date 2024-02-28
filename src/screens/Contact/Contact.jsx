import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./contact.css";
import logo from "../../resources/img/logo.png";
function Contact() {
  return (
    <Box className="screen services" id="contact">
      <Typography className="s-title" sx={{ pt: "120px" }}>
        Contact Us
      </Typography>
      <Box
        component="img"
        src={logo}
        draggable={false}
        className="logo-divider-blur-r"
      />
      <Box
        sx={{
          p: { md: 10, xs: 2 },
          maxWidth: { xs: "100vw", md: "50vw" },
          m: "auto",
        }}
      >
        <Box
          sx={{
            gap: "45px",
            display: "flex",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Name"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Phone Number"
          />
        </Box>
        <Box>
          <FormControl
            fullWidth
            sx={{
              zIndex: 2,
              textAlign: "start",
            }}
          >
            <InputLabel>Category</InputLabel>
            <Select label="Category" fullWidth value={30}>
              <MenuItem value={10}>All</MenuItem>
              <MenuItem value={20}>Wedding Events</MenuItem>
              <MenuItem value={30}>School Events</MenuItem>
              <MenuItem value={40}>Corporate Events</MenuItem>
              <MenuItem value={50}>Birthday Parties</MenuItem>
              <MenuItem value={60}>Decor</MenuItem>
              <MenuItem value={70}>Food & Catering</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          sx={{
            backgroundColor: "#fff2da !important",
            mt: 4,
            mb: 4,
          }}
          multiline
          rows={6}
          fullWidth
          label="Leave a note for us and we’ll get back to you"
        />
        <Button variant="contained" size="small" className="btn">
          Send →
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;
