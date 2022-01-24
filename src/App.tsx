import Router from '@app/routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CookiesProvider } from 'react-cookie';

const theme = createTheme({
  palette: {
    background: {
      default: '#fafafa',
    },
    primary: {
      light: '#95abfd',
      main: '#7b97fd',
      dark: '#5669b1',
    },
    secondary: {
      light: '#f38baf',
      main: '#f06f9b',
      dark: '#a84d6c',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 6,
  },
  typography: {
    caption: {
      color: '#9f9f9f',
      fontWeight: 500,
    },
    body1: {
      color: '#373737',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          color: 'white',
          boxShadow: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;
