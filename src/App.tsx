import React, { useState, useEffect } from "react";
import { Box, Container, Fab, Zoom } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

// Define the page type
type PageName = "Home" | "Portfolio" | "Blog" | "Contact";

const ScrollToTop: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setShowScrollTop(window.pageYOffset > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => {
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

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageName>("Home");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  const handlePageChange = (page: string): void => {
    // Type guard to ensure page is a valid PageName
    if (
      page === "Home" ||
      page === "Portfolio" ||
      page === "Blog" ||
      page === "Contact"
    ) {
      setCurrentPage(page);
    }
  };

  const renderPage = (): React.ReactElement => {
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
        onPageChange={handlePageChange}
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

const App: React.FC = () => {
  return <AppContent />;
};

export default App;
