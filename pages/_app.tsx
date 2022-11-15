import "../styles/globals.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import darkThemeOption from "../styles/themes/darkmode";
import lightThemeOptions from "../styles/themes/lightmode";

export default function App({ Component, pageProps }: AppProps) {
  const themes = {
    dark: darkThemeOption,
    light: lightThemeOptions,
  }["light"];

  const theme = createTheme(themes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
