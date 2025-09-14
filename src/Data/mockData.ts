import type { Project, BlogPost } from "../Types";

export const projects: Project[] = [
  {
    id: "1",
    title: "React Portfolio Website",
    description:
      "A beautiful personal portfolio website built with React and Material-UI, featuring dark mode support and responsive design.",
    images: [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    ],
    type: "Course",
    domain: "FS",
    technologies: ["React", "Material-UI", "TypeScript"],
    codeLink: "https://github.com/example/portfolio",
    projectLink: "https://myportfolio.example.com",
  },
  {
    id: "2",
    title: "Database Management System",
    description:
      "A comprehensive DBMS project implementing CRUD operations with advanced query optimization and indexing.",
    images: [
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    ],
    type: "Course",
    domain: "DBMS",
    technologies: ["Python", "SQLite", "Flask"],
    codeLink: "https://github.com/example/dbms",
  },
  {
    id: "3",
    title: "Network Analyzer Tool",
    description:
      "A networking application that analyzes network traffic and provides real-time monitoring capabilities.",
    images: [
      "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg",
    ],
    type: "Personal",
    domain: "Networking",
    technologies: ["Python", "Networking", "Wireshark"],
    codeLink: "https://github.com/example/network-analyzer",
  },
  {
    id: "4",
    title: "Mobile Music App",
    description:
      "A cross-platform mobile application for music streaming with personalized playlists and social features.",
    images: [
      "https://images.pexels.com/photos/3761020/pexels-photo-3761020.jpeg",
    ],
    type: "Personal",
    domain: "App",
    technologies: ["React Native", "Node.js", "MongoDB"],
    codeLink: "https://github.com/example/music-app",
    projectLink: "https://musicapp.example.com",
  },
  {
    id: "5",
    title: "Audio Spectrum Visualizer",
    description:
      "An interactive audio visualizer that creates stunning visual effects synchronized with music using WebGL.",
    images: [
      "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg",
    ],
    type: "Personal",
    domain: "Audio Visualizer",
    technologies: ["JavaScript", "WebGL", "Web Audio API"],
    codeLink: "https://github.com/example/audio-visualizer",
    projectLink: "https://visualizer.example.com",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Beautiful UIs with Material-UI",
    excerpt:
      "Learn how to create stunning user interfaces using Material-UI components and theming.",
    content:
      "Material-UI provides a comprehensive set of components that follow Google's Material Design principles...",
    date: "2024-01-15",
    tags: ["React", "Material-UI", "UI/UX"],
  },
  {
    id: "2",
    title: "The Importance of Responsive Design",
    excerpt:
      "Why responsive design matters in today's multi-device world and how to implement it effectively.",
    content:
      "With the proliferation of devices with different screen sizes, responsive design has become crucial...",
    date: "2024-01-10",
    tags: ["CSS", "Responsive Design", "Web Development"],
  },
  {
    id: "3",
    title: "Getting Started with React Hooks",
    excerpt:
      "A comprehensive guide to understanding and using React Hooks in your applications.",
    content:
      "React Hooks revolutionized the way we write React components by allowing us to use state...",
    date: "2024-01-05",
    tags: ["React", "Hooks", "JavaScript"],
  },
];
