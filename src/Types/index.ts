export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  type: string; // e.g., "Course", "Personal"
  domain: string; // e.g., "FS", "DBMS", "Networking", "App", "Audio Visualizer"
  technologies: string[];
  codeLink?: string;
  projectLink?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
}
