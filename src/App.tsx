import React, { useState, useEffect } from "react";
import { Box, Container, Fab, Zoom, useTheme } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={showScrollTop}>
      <Fab
        onClick={scrollToTop}
        color="primary"
        size="medium"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1000,
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};

const AppContent = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Portfolio":
        return <Portfolio />;
      case "Blog":
        return <Blog />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: darkMode
          ? "linear-gradient(135deg, #121212 0%, #1e1e1e 100%)"
          : "linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)",
      }}
    >
      <Navbar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ minHeight: "calc(100vh - 200px)" }}>{renderPage()}</Box>
      </Container>

      <ScrollToTop />
    </Box>
  );
};

function App() {
  return <AppContent />;
}

export default App;
