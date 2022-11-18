import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ISelector } from "../../../types/selectors";
import { changeTheme } from "../../../redux/reducers/theme";

const ThemeButton = () => {
  const { theme: mode } = useSelector(
    ({ controllerTheme }: ISelector) => controllerTheme
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeTheme(mode === "dark" ? "light" : "dark"));
  };

  return (
    <IconButton onClick={handleClick}>
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeButton;
