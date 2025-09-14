import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";
import { Send, Email, LinkedIn, GitHub } from "@mui/icons-material";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  const handleChange =
    (field: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const contactInfo = [
    { icon: Email, label: "Email", value: "palurvashi76@gmail.com" },
    {
      icon: LinkedIn,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/urvashi-pal-6a56a7384/",
    },
    { icon: GitHub, label: "GitHub", value: "https://github.com/palurvashi76" },
  ];

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
        Get In Touch
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        I'd love to hear from you! Whether you have questions about my projects,
        want to collaborate, or just want to say hello, feel free to reach out.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {/* Left: Contact Form */}
        <Paper sx={{ p: 4, flex: 2 }}>
          <Typography variant="h6" gutterBottom>
            Send Message
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 3,
              }}
            >
              <TextField
                fullWidth
                label="Name"
                value={form.name}
                onChange={handleChange("name")}
                error={!!errors.name}
                helperText={errors.name}
                required
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                error={!!errors.email}
                helperText={errors.email}
                required
              />
            </Box>
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={6}
              value={form.message}
              onChange={handleChange("message")}
              error={!!errors.message}
              helperText={errors.message}
              required
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              startIcon={<Send />}
              sx={{
                alignSelf: "flex-start",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Paper>

        {/* Right: Contact Info Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
          {contactInfo.map((contact) => {
            const IconComponent = contact.icon;
            return (
              <Card key={contact.label}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <IconComponent color="primary" />
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        {contact.label}
                      </Typography>
                      <Typography variant="body2">{contact.value}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Box>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thank you for your message! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
