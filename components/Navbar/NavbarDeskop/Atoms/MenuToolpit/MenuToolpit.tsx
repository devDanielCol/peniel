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
    maxWidth: "100%",
    padding: 0,
    margin: 0,
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

  return (
    <LightTooltip
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      title={element}
    >
      <Box
        sx={{
          display: "flex",
          ml: 2,
          alignItems: "center",
          color: "custom.navbartext",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            alignItems: "center",
            transition: "all .2s linear",
            lineHeight: 1,
            color: "inherit",
          }}
          component="span"
        >
          {name}
        </Typography>
        <ExpandMoreIcon
          className="icon__expand-more"
          sx={{
            opacity: open ? "100%" : "0%",
            transition: "all .2s linear",
            transform: open ? "translateY(3px)" : "translateY(0px)",
            color: "custom.navbartext",
          }}
        />
      </Box>
    </LightTooltip>
  );
};

export default MenuToolpit;
