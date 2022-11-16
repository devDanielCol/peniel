import { ThemeOptions } from "@mui/material/styles";

const lightThemeOption: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#AAC4FF",
      light: "#00dfd8",
    },
    secondary: {
      main: "#ff4d4d",
      light: "#f9cb28",
    },
    info: {
      main: "#B8C7FF",
      light: "#7B78ED",
    },
    warning: {
      main: "#FEC201",
      light: "#FF7A00",
    },
    success: {
      main: "#B3DCEA",
      light: "#0FD960",
    },
    common: {
      white: "#FFFFFF",
      black: "#000",
    },
  },
  typography: {
    fontFamily: [
      "Alliance1",
      "Alliance1HeaderFallback",
      "-apple-system",
      "BlinkMacSystemFont",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
    button: {
      textTransform: "capitalize",
    },
    fontSize: 16,
  },
};

export default lightThemeOption;
