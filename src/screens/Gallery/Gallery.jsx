import {
  Box,
  Button,
  FormControl,
  IconButton,
  ImageList,
  ImageListItem,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import "./gallery.css";
import flowerBorder from "../../resources/img/flower-border.png";
import cirBtn from "../../resources/img/cir-btn.png";
import cirBtnL from "../../resources/img/cir-btn-l.png";
import cirBtnT from "../../resources/img/cir-btn-t.png";
import React from "react";
function Gallery() {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      title: "Bed",
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
    },
    {
      img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      title: "Blinds",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Chairs",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
    },
    {
      img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
      title: "Storage",
    },
    {
      img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
      title: "Candle",
    },
    {
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      title: "Coffee table",
    },
  ];

  const [showGallery, setShowGallery] = React.useState(false);
  const [mobileView, setMobileView] = React.useState(false);
  React.useEffect(() => {
    let vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vw <= 600) {
      setMobileView(true);
      setShowGallery(true);
    } else {
      setMobileView(false);
      setShowGallery(false);
    }
  }, []);

  return (
    <Box className="gallery" id="gallery">
      <Typography className="s-title" sx={{ pt: "120px" }}>
        Gallery
      </Typography>
      {showGallery && (
        <Box id="gal-cat" sx={{ p: 2 }}>
          <FormControl
            sx={{
              zIndex: 2,
              textAlign: "start",
              minWidth: { xs: "30vw", md: "20vw" },
            }}
          >
            <InputLabel>Category</InputLabel>
            <Select label="Category" fullWidth value={10}>
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
      )}
      <Box className="img-list" sx={{ maxWidth: "90vw" }}>
        {!showGallery && (
          <Box
            component="img"
            draggable={false}
            src={flowerBorder}
            className="gal-flower-border-l"
            sx={{ zIndex: 2 }}
          />
        )}
        {!showGallery && (
          <Box
            component="img"
            draggable={false}
            src={flowerBorder}
            className="gal-flower-border-r"
            sx={{ zIndex: 2 }}
          />
        )}
        <ImageList
          id="img-list"
          cols={2}
          sx={
            showGallery
              ? {}
              : {
                  gap: "15px !important",
                  gridAutoFlow: "column",
                  gridTemplateColumns:
                    "repeat(auto-fill,minmax(15vw,1fr)) !important",
                  gridAutoColumns: "minmax(15vw, 1fr)",
                  overflow: "hidden",
                }
          }
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                className="gal-img"
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {!showGallery ? (
          <Box sx={{ display: "flex", gap: "25px" }} className="gal-nav">
            <IconButton
              aria-label="delete"
              onClick={() =>
                (document.getElementById("img-list").scrollLeft -= 300)
              }
            >
              <Box
                component="img"
                draggable={false}
                src={cirBtnL}
                sx={{ width: "80px" }}
              />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() =>
                (document.getElementById("img-list").scrollLeft += 300)
              }
            >
              <Box
                component="img"
                draggable={false}
                src={cirBtn}
                sx={{ width: "80px" }}
              />
            </IconButton>
          </Box>
        ) : (
          !mobileView && (
            <Box sx={{ display: "flex", gap: "25px" }} className="gal-nav">
              <IconButton
                aria-label="delete"
                onClick={() => window.location.replace("/#gallery")}
              >
                <Box
                  component="img"
                  draggable={false}
                  src={cirBtnT}
                  sx={{ width: "80px" }}
                />
              </IconButton>
            </Box>
          )
        )}

        {!mobileView && (
          <Button
            onClick={() => {
              window.location.replace("/#gallery");
              setShowGallery(!showGallery);
            }}
            variant="contained"
            size="small"
            className="btn"
          >
            {!showGallery ? "View More →" : "Hide Gallery"}
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Gallery;
