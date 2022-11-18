import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, ThemeOptions } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTheme } from "../../redux/reducers/theme";
import darkThemeOption from "../../styles/themes/darkmode";
import lightThemeOption from "../../styles/themes/lightmode";
import { ISelector } from "../../types/selectors";

interface IThemeProps {
  children: ReactElement;
}

const ThemeConfigProvider = ({ children }: IThemeProps) => {
  const { theme: mode } = useSelector(
    ({ controllerTheme }: ISelector) => controllerTheme
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTheme());
  });

  const theme = {
    dark: createTheme(darkThemeOption as ThemeOptions),
    light: createTheme(lightThemeOption as ThemeOptions),
  }[mode];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfigProvider;
