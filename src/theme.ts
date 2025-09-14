import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gradient: {
      primary: string;
      secondary: string;
    };
  }
  interface PaletteOptions {
    gradient?: {
      primary?: string;
      secondary?: string;
    };
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E91E63',
      light: '#FF6090',
      dark: '#AD1457',
    },
    secondary: {
      main: '#9C27B0',
      light: '#D05CE3',
      dark: '#7B1FA2',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    gradient: {
      primary: 'linear-gradient(45deg, #E91E63 30%, #9C27B0 90%)',
      secondary: 'linear-gradient(135deg, #FF6090 0%, #D05CE3 100%)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Segoe UI", "Arial", sans-serif',
    h1: {
      fontWeight: 300,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 400,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.7,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF6090',
      light: '#FFB3BA',
      dark: '#E91E63',
    },
    secondary: {
      main: '#D05CE3',
      light: '#E1BEE7',
      dark: '#9C27B0',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    gradient: {
      primary: 'linear-gradient(45deg, #FF6090 30%, #D05CE3 90%)',
      secondary: 'linear-gradient(135deg, #FFB3BA 0%, #E1BEE7 100%)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Segoe UI", "Arial", sans-serif',
    h1: {
      fontWeight: 300,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 400,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.7,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 24px rgba(255,255,255,0.1)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});