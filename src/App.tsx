import Router from "@app/routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#7b97fd",
      main: "#7b97fd",
      dark: "#7b97fd",
    },
  },
  spacing: 8,
  typography: {
    caption: {
      color: "#9f9f9f",
      fontWeight: 500,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
