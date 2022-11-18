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
          color: "text.primary",
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
            color: "text.primary",
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
            color: "text.primary",
          }}
        />
      </Box>
    </LightTooltip>
  );
};

export default MenuToolpit;
