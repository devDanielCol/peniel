import { Box, Divider, SxProps, Typography } from "@mui/material";
import React from "react";

interface IAboutUsOptProps {
  sx?: SxProps;
  title: string;
  description: string;
}

const AboutUsOpt = ({ sx, title, description }: IAboutUsOptProps) => {
  return (
    <Box sx={sx}>
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: 700,
          zIndex: 2,
          color: "black",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "0.8rem",
          lineHeight: 1.1,
          color: "black",
        }}
      >
        {description}
      </Typography>
      <Divider sx={{ mt: 4 }} />
    </Box>
  );
};

export default AboutUsOpt;
