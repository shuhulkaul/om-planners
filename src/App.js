import React from "react";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Events from "./screens/Events/Events";
import Footer from "./screens/Footer";
import Gallery from "./screens/Gallery";
import Hero from "./screens/Hero";
import Services from "./screens/Services";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Loading from "./screens/Loading";

function App() {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#ff7b01",
      },
      secondary: {
        main: "#fff2da",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Hero />
        <About />
        <Services />
        <Events />
        <Gallery />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
