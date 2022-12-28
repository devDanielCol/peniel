import { Button, SxProps, Typography } from "@mui/material";
import { MouseEvent } from "react";

interface IHmwButtonProps {
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
  open?: boolean;
  sx?: SxProps;
  bgColor?: string;
}

const HmwButton = ({ onClick, open, sx, bgColor }: IHmwButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={{ display: "flex", flexDirection: "column", ...sx }}
    >
      <Typography
        component="div"
        sx={{
          width: "30px",
          height: "2px",
          backgroundColor: bgColor,
          transform: open
            ? "rotate(-45deg) translateX(-1px) translateY(7px)"
            : "",
          transition: "all .2s linear",
        }}
      />
      <Typography
        component="div"
        sx={{
          mt: 0.5,
          width: "30px",
          height: "2px",
          opacity: open ? "0%" : "100%",
          backgroundColor: bgColor,
          transition: "all .2s linear",
        }}
      />
      <Typography
        component="div"
        sx={{
          mt: 0.5,
          width: "30px",
          height: "2px",
          backgroundColor: bgColor,
          transform: open
            ? "rotate(45deg) translateX(-1px) translateY(-7px)"
            : "",
          transition: "all .2s linear",
        }}
      />
    </Button>
  );
};

export default HmwButton;
