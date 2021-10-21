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
  typography: {},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
