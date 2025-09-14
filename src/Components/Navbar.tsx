import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
  alpha,
} from "@mui/material";
import {
  Home,
  Work,
  Article,
  ContactMail,
  DarkMode,
  LightMode,
} from "@mui/icons-material";

const Navbar = ({ currentPage, onPageChange, darkMode, toggleDarkMode }) => {
  const theme = useTheme();

  const navItems = [
    { name: "Home", icon: Home },
    { name: "Portfolio", icon: Work },
    { name: "Blog", icon: Article },
    { name: "Contact", icon: ContactMail },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: alpha(theme.palette.background.paper, 0.8),
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            textFillColor: "transparent",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Portfolio
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = currentPage === item.name;

            return (
              <Button
                key={item.name}
                onClick={() => onPageChange(item.name)}
                startIcon={<IconComponent />}
                sx={{
                  color: isActive
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
                  backgroundColor: isActive
                    ? alpha(theme.palette.primary.main, 0.1)
                    : "transparent",
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                {item.name}
              </Button>
            );
          })}

          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
