import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  useTheme,
} from "@mui/material";
import { Code, Favorite } from "@mui/icons-material";
import img from "../assets/urvashi.jpeg";

const Profile = () => {
  const theme = useTheme();

  const skills = [
    "React",
    "TypeScript",
    "Material-UI",
    "Python",
    "Node.js",
    "Database Design",
    "Networking",
  ];

  const interests = [
    "Full Stack Development",
    "UI/UX Design",
    "Database Systems",
    "Web Technologies",
  ];

  return (
    <Box sx={{ mb: 6 }}>
      {/* Top Full Width Card */}
      <Card
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          mb: 4,
        }}
      >
        <CardContent
          sx={{
            p: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: 220,
              height: 220,
              mb: { xs: 2, md: 0 },
              mr: { md: 4 },
              border: "4px solid rgba(255,255,255,0.2)",
            }}
            src={img}
            alt="Profile"
          />
          <Box>
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to My Portfolio
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
              BCA Student & Developer
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8, lineHeight: 1.8 }}>
              I'm passionate about creating beautiful and functional
              applications. This portfolio showcases my journey through various
              projects in full-stack development, database management,
              networking, and mobile applications. I love combining technical
              skills with creative design to build meaningful digital
              experiences.
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Bottom Two Cards Side by Side */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        {/* Technical Skills Card */}
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Code sx={{ mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="h6" component="h3">
                Technical Skills
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              ))}
            </Box>
          </CardContent>
        </Card>

        {/* Areas of Interest Card */}
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Favorite sx={{ mr: 1, color: theme.palette.secondary.main }} />
              <Typography variant="h6" component="h3">
                Areas of Interest
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {interests.map((interest) => (
                <Chip
                  key={interest}
                  label={interest}
                  color="secondary"
                  variant="outlined"
                  size="small"
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Profile;
