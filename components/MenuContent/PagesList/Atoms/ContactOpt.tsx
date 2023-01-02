import * as React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { useState, FC } from "react";
import Link from "next/link";

interface PageOptProps {
  open?: boolean;
  title: string;
  description?: string;
  linkTo: string;
}

const PageOpt: FC<PageOptProps> = ({
  open: defaultOpen,
  title,
  description,
  linkTo,
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen as boolean);

  const defaultColor = "text.primary";
  const colorActive = "#7f87ff";

  return (
    <>
      <Link href={linkTo}>
        <Box
          onMouseOver={() => {
            setOpen(true);
          }}
          onMouseOut={() => {
            setOpen(false);
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            mb: 1.5,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: 2,
                fontWeight: 700,
                zIndex: 2,
                color: open ? colorActive : defaultColor,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                lineHeight: 1.1,
                color: open ? colorActive : defaultColor,
              }}
            >
              {description}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: 1,
              transition: "all .2s linear",
              zIndex: 0,
              transform: open ? "translateX(0%)" : "translateX(-100%)",
              opacity: open ? "100%" : "0%",
              // color: open ? colorActive : defaultColor,
            }}
          >
            <IconButton sx={{ color: open ? colorActive : defaultColor }}>
              <LaunchIcon sx={{ width: "1rem" }} />
            </IconButton>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default PageOpt;
