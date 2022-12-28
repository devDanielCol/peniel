import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";
import { InView } from "react-intersection-observer";

const Presentation: FC = () => {
  const [inview, setInview] = useState<boolean>(false);

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "40vh", md: "50vh" },
        backgroundColor: "transparent",
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2016/12/22/18/20/skyline-1925943_1280.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          top: 0,
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 2,
          px: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InView
            onChange={(inView) => {
              setInview(inView);
            }}
            threshold={1}
            delay={0}
          >
            <Box
              sx={{
                opacity: inview ? 1 : 0,
                transition: "all .4s linear",
                textAlign: { xs: "center", md: "center" },
              }}
            >
              <Typography
                fontSize={{
                  xs: "50px",
                  sm: "60px",
                  md: "70px",
                  lg: "80px",
                }}
                textAlign={{ xs: "center", md: "center" }}
                letterSpacing={{ xs: "-2px", sm: "-3px" }}
                sx={{ fontWeight: 700, color: "white" }}
              >
                Sobre nosotros
              </Typography>
            </Box>
          </InView>
        </Box>
      </Box>

      <Box
        sx={{
          top: 0,
          position: "absolute",
          width: "100vw",
          height: "100%",
          backgroundImage: "url(/image/bgt1.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 1,
          opacity: 0.3,
        }}
      ></Box>
    </Box>
  );
};

export default Presentation;
