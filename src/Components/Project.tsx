import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  IconButton,
  useTheme,
  alpha,
} from "@mui/material";
import { GitHub, Launch, Code, Category, Public } from "@mui/icons-material";
import type { Project as ProjectType } from "../Types";

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const theme = useTheme();

  const handleLinkClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "visible",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.images[0]}
        alt={project.title}
        sx={{
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          display: "flex",
          gap: 1,
        }}
      >
        {project.codeLink && (
          <IconButton
            onClick={() => handleLinkClick(project.codeLink)}
            sx={{
              backgroundColor: alpha(theme.palette.background.paper, 0.9),
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.8),
                color: "white",
              },
            }}
            size="small"
          >
            <GitHub fontSize="small" />
          </IconButton>
        )}
        {project.projectLink && (
          <IconButton
            onClick={() => handleLinkClick(project.projectLink)}
            sx={{
              backgroundColor: alpha(theme.palette.background.paper, 0.9),
              "&:hover": {
                backgroundColor: alpha(theme.palette.secondary.main, 0.8),
                color: "white",
              },
            }}
            size="small"
          >
            <Launch fontSize="small" />
          </IconButton>
        )}
      </Box>

      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h6" component="h3" gutterBottom>
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, flexGrow: 1 }}
        >
          {project.description}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}>
            <Category fontSize="small" color="primary" />
            <Chip
              label={project.type}
              size="small"
              color="primary"
              variant="outlined"
            />
            <Public fontSize="small" color="secondary" />
            <Chip
              label={project.domain}
              size="small"
              color="secondary"
              variant="outlined"
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Code
              fontSize="small"
              sx={{ mr: 1, color: theme.palette.text.secondary }}
            />
            <Typography variant="caption" color="text.secondary">
              Technologies
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                  fontSize: "0.7rem",
                }}
              />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Project;
