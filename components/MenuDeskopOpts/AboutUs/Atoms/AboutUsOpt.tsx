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
        color="text.primary"
        sx={{
          fontSize: "1rem",
          fontWeight: 700,
          zIndex: 2,
        }}
      >
        {title}
      </Typography>
      <Typography
        color="text.primary"
        sx={{
          fontSize: "0.8rem",
          lineHeight: 1.1,
        }}
      >
        {description}
      </Typography>
      <Divider sx={{ mt: 4 }} />
    </Box>
  );
};

export default AboutUsOpt;
