const darkThemeOption = {
  palette: {
    mode: "dark",
    primary: {
      main: "#4e317e",
      dark: "#ff4d4d",
      light: "#f9cb28",
    },
    secondary: {
      main: "#7928ca",
      dark: "#ff0080",
    },
    info: {
      main: "#B8C7FF",
      dark: "#1E1938",
      light: "#7B78ED",
    },
    warning: {
      main: "#FEC201",
      dark: "#FF7A00",
    },
    success: {
      main: "#B3DCEA",
      dark: "#0FD960",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "#170b29",
      paper: "#332051",
    },
    custom: {
      navbar: "#251247a3",
      callaction: "#fff",
      section1: "#0b0513",
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
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: "12px",
          backgroundColor: "#332051",
          backgroundImage: "none",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: "12px",
          backgroundColor: "#332051",
          backgroundImage: "none",
        },
      },
    },
  },
};

export default darkThemeOption;
