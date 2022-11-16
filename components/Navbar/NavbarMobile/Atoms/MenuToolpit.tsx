import {
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import { FC, ReactElement, useState } from "react";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "transparent",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
    p: 0,
    m: 0,
    maxWidth: "100%",
  },
}));

interface IMenuToolpitProps {
  name: string;
  element: ReactElement;
  open?: boolean;
}

const MenuToolpit: FC<IMenuToolpitProps> = ({
  name,
  element,
  open: defaultOpen,
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen as boolean);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  return (
    <LightTooltip
      PopperProps={{
        disablePortal: true,
      }}
      onClose={handleTooltipClose}
      open={open}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      title={element}
    >
      <Box
        sx={{
          display: "flex",
          ml: 2,
          alignItems: "center",
        }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            alignItems: "center",
            transition: "all .2s linear",
            opacity: open ? "70%" : "100%",
            lineHeight: 1,
            textDecoration: open ? "underline" : "none",
          }}
          component="span"
        >
          {name}
        </Typography>
        <ExpandMoreIcon
          className="icon__expand-more"
          sx={{
            opacity: open ? "100%" : "30%",
            transition: "all .2s linear",
            transform: open ? "translateY(3px)" : "translateY(0px)",
          }}
        />
      </Box>
    </LightTooltip>
  );
};

export default MenuToolpit;
