import { useSelector } from "react-redux";
import darkThemeOption from "../../styles/themes/darkmode";
import lightThemeOption from "../../styles/themes/lightmode";
import { ISelector } from "../../types/selectors";

const useTheme = () => {
  const { theme: mode } = useSelector(
    ({ controllerTheme }: ISelector) => controllerTheme
  );

  return {
    dark: darkThemeOption,
    light: lightThemeOption,
  }[mode];
};

export default useTheme;
