import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0077b6",
    },
    secondary: {
      main: "#f9a825",
    },
    background: {
      default: "#f0f4f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#1c1c1c",
      secondary: "#4a4a4a",
    },
  },
  typography: {
    fontFamily: `'PT Sans', sans-serif`,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90e0ef",
    },
    secondary: {
      main: "#ffc300",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cfcfcf",
    },
  },
  typography: {
    fontFamily: `'PT Sans', sans-serif`,
  },
});
