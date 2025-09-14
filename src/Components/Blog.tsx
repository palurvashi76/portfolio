import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  useTheme,
  alpha,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { CalendarToday, LocalOffer } from "@mui/icons-material";

// Mock data since the original import is not available
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt:
      "Learn how to set up a modern React application with TypeScript, exploring best practices and essential configurations for a robust development environment.",
    date: "2024-03-15",
    tags: ["React", "TypeScript", "Web Development"],
  },
  {
    id: 2,
    title: "Building Responsive UI with Material-UI",
    excerpt:
      "Discover the power of Material-UI components and how to create beautiful, responsive user interfaces that work seamlessly across all devices.",
    date: "2024-03-10",
    tags: ["Material-UI", "CSS", "Responsive Design"],
  },
  {
    id: 3,
    title: "State Management with Redux Toolkit",
    excerpt:
      "Simplify your React state management with Redux Toolkit, the modern way to write Redux logic with less boilerplate and better developer experience.",
    date: "2024-03-05",
    tags: ["Redux", "State Management", "JavaScript"],
  },
  {
    id: 4,
    title: "API Integration Best Practices",
    excerpt:
      "Learn effective strategies for integrating APIs in your React applications, including error handling, loading states, and data caching techniques.",
    date: "2024-02-28",
    tags: ["API", "HTTP", "React Hooks"],
  },
  {
    id: 5,
    title: "Testing React Components",
    excerpt:
      "Master the art of testing React components with Jest and React Testing Library, ensuring your applications are reliable and maintainable.",
    date: "2024-02-20",
    tags: ["Testing", "Jest", "Quality Assurance"],
  },
  {
    id: 6,
    title: "Performance Optimization in React",
    excerpt:
      "Boost your React application's performance with proven optimization techniques, from code splitting to memoization and lazy loading.",
    date: "2024-02-15",
    tags: ["Performance", "Optimization", "React"],
  },
];

const Blog = () => {
  const theme = useTheme();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
        Blog
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Sharing thoughts and insights about web development, technology, and my
        learning journey.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {blogPosts.map((post) => (
          <Grid key={post.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography variant="h6" component="h3" gutterBottom>
                  {post.title}
                </Typography>

                <Box
                  sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}
                >
                  <CalendarToday fontSize="small" color="action" />
                  <Typography variant="caption" color="text.secondary">
                    {formatDate(post.date)}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, lineHeight: 1.6, flexGrow: 1 }}
                >
                  {post.excerpt}
                </Typography>

                <Box sx={{ mt: "auto" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <LocalOffer
                      fontSize="small"
                      sx={{ mr: 1, color: theme.palette.text.secondary }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      Tags
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {post.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: alpha(
                            theme.palette.secondary.main,
                            0.1
                          ),
                          color: theme.palette.secondary.main,
                          fontSize: "0.7rem",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, p: 3, textAlign: "center" }}>
        <Typography variant="body1" color="text.secondary">
          More blog posts coming soon! Stay tuned for updates on my latest
          projects and learning experiences.
        </Typography>
      </Box>
    </Box>
  );
};

export default Blog;
