import Router from '@app/routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CookiesProvider } from 'react-cookie';

const theme = createTheme({
  palette: {
    primary: {
      light: '#7b97fd',
      main: '#7b97fd',
      dark: '#7b97fd',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
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
          color: 'white',
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
