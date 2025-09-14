import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Paper,
  Chip,
  useTheme,
  alpha,
} from "@mui/material";
import { FilterList } from "@mui/icons-material";
import Project from "./Project";
import { useMemo, useState } from "react";

// ----- Mock Data -----
const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack web application with React and Node.js for online shopping with secure payment integration.",
    type: "Personal",
    domain: "FS",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    images: ["https://images.pexels.com/photos/34577/pexels-photo.jpg"],
    codeLink: "https://github.com/example/ecommerce",
    projectLink: "https://example-ecommerce.com",
  },
  {
    id: "2",
    title: "Database Management System",
    description:
      "Custom database management system with advanced querying capabilities and data visualization.",
    type: "Course",
    domain: "DBMS",
    technologies: ["Python", "SQLite", "Tkinter"],
    images: ["https://images.pexels.com/photos/590016/pexels-photo-590016.jpg"],
    codeLink: "https://github.com/example/dbms",
  },
  {
    id: "3",
    title: "Network Monitor",
    description:
      "Real-time network monitoring tool with traffic analysis and performance metrics dashboard.",
    type: "Course",
    domain: "Networking",
    technologies: ["Python", "Wireshark", "Flask"],
    images: [
      "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpg",
    ],
    codeLink: "https://github.com/example/network-monitor",
  },
  {
    id: "4",
    title: "Mobile Fitneasas ss App",
    description:
      "Cross-platform mobile application for fitness tracking with workout plans and progress monitoring.",
    type: "Personal",
    domain: "App",
    technologies: ["React Native", "Firebase", "Redux"],
    images: [
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpg",
    ],
    codeLink: "https://github.com/example/fitness-app",
  },
];

// ----- Portfolio Component -----
const Portfolio = () => {
  const theme = useTheme();

  const [filters, setFilters] = useState({
    type: [],
    domain: [],
    technology: [],
  });

  const allTypes = ["Course", "Personal"];
  const allDomains = ["FS", "DBMS", "Networking", "App", "Audio Visualizer"];
  const allTechnologies = [...new Set(projects.flatMap((p) => p.technologies))];

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }));
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const typeMatch =
        filters.type.length === 0 || filters.type.includes(project.type);
      const domainMatch =
        filters.domain.length === 0 || filters.domain.includes(project.domain);
      const technologyMatch =
        filters.technology.length === 0 ||
        filters.technology.some((tech) => project.technologies.includes(tech));

      return typeMatch && domainMatch && technologyMatch;
    });
  }, [filters]);

  const clearAllFilters = () =>
    setFilters({ type: [], domain: [], technology: [] });
  const hasActiveFilters =
    filters.type.length || filters.domain.length || filters.technology.length;

  return (
    <Box sx={{ maxWidth: "1400px", mx: "auto", px: { xs: 2, md: 4 }, py: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}
      >
        My Portfolio
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 4,
        }}
      >
        {/* Filters Sidebar */}
        <Box
          sx={{
            flex: { xs: "unset", lg: 1 },
            width: { xs: "100%", lg: "25%" },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 3,
              position: { lg: "sticky" },
              top: { lg: 100 },
              backgroundColor: alpha(theme.palette.background.paper, 0.95),
              backdropFilter: "blur(10px)",
              borderRadius: 2,
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <FilterList sx={{ mr: 1.5, color: theme.palette.primary.main }} />
              <Typography variant="h6" fontWeight="bold">
                Filterssss
              </Typography>
            </Box>

            {hasActiveFilters && (
              <Box sx={{ mb: 3 }}>
                <Chip
                  label="Clear All Filters"
                  onClick={clearAllFilters}
                  size="medium"
                  color="primary"
                  variant="outlined"
                  clickable
                  sx={{
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                />
              </Box>
            )}

            {/* Project Type Filter */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, mb: 2, color: "primary.main" }}
              >
                Project Type
              </Typography>
              <FormGroup>
                {allTypes.map((type) => (
                  <FormControlLabel
                    key={type}
                    control={
                      <Checkbox
                        checked={filters.type.includes(type)}
                        onChange={() => handleFilterChange("type", type)}
                        size="small"
                        color="primary"
                      />
                    }
                    label={type}
                    sx={{
                      mb: 0.5,
                      "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
                    }}
                  />
                ))}
              </FormGroup>
            </Box>

            {/* Project Domain Filter */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, mb: 2, color: "secondary.main" }}
              >
                Project Domain
              </Typography>
              <FormGroup>
                {allDomains.map((domain) => (
                  <FormControlLabel
                    key={domain}
                    control={
                      <Checkbox
                        checked={filters.domain.includes(domain)}
                        onChange={() => handleFilterChange("domain", domain)}
                        size="small"
                        color="secondary"
                      />
                    }
                    label={domain}
                    sx={{
                      mb: 0.5,
                      "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
                    }}
                  />
                ))}
              </FormGroup>
            </Box>

            {/* Technology Filter */}
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Technology
              </Typography>
              <FormGroup>
                {allTechnologies.map((tech) => (
                  <FormControlLabel
                    key={tech}
                    control={
                      <Checkbox
                        checked={filters.technology.includes(tech)}
                        onChange={() => handleFilterChange("technology", tech)}
                        size="small"
                      />
                    }
                    label={tech}
                    sx={{
                      mb: 0.5,
                      "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
                    }}
                  />
                ))}
              </FormGroup>
            </Box>
          </Paper>
        </Box>

        {/* Projects Section */}
        <Box
          sx={{
            flex: { xs: "unset", lg: 3 },
            width: { xs: "100%", lg: "75%" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 500, color: "text.secondary" }}
          >
            Showing {filteredProjects.length} of {projects.length} projects
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            {filteredProjects.map((project) => (
              <Box
                key={project.id}
                sx={{ flex: { xs: "100%", sm: "48%", xl: "30%" } }}
              >
                <Project project={project} />
              </Box>
            ))}
          </Box>

          {filteredProjects.length === 0 && (
            <Paper
              elevation={2}
              sx={{
                p: 6,
                textAlign: "center",
                borderRadius: 3,
                backgroundColor: alpha(theme.palette.background.paper, 0.8),
                border: `2px dashed ${alpha(theme.palette.divider, 0.3)}`,
              }}
            >
              <Typography
                variant="h5"
                sx={{ mb: 2, fontWeight: 500, color: "text.secondary" }}
              >
                No projects match your filters
              </Typography>
              <Typography sx={{ mb: 3, color: "text.secondary" }}>
                Try adjusting your filter criteria or clearing all filters to
                see more projects.
              </Typography>
              <Chip
                label="Clear All Filters"
                onClick={clearAllFilters}
                color="primary"
                clickable
                sx={{ fontWeight: 500 }}
              />
            </Paper>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
