import { Box } from "@mui/material";
import { FC, useState } from "react";
import { InView } from "react-intersection-observer";
import GradientText from "../GradientText/GradientText";
import gradients from "../../styles/colors/gradients";

const BannerPrincipal: FC = () => {
  const [inview, setInview] = useState<boolean>(false);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundColor: "transparent",
        backgroundImage: gradients.orangeYellow,
      }}
    >
      <Box
        sx={{
          top: 0,
          position: "absolute",
          width: "100%",
          height: "100vh",
          zIndex: 2,
        }}
      >
        {/* <MouseMoveContent
          onMove={({ centerX, pageX, pageY, width, height, centerY }) => {
            const dX = pageX - centerX;
            const dY = pageY - centerY;
            setGradient((dX / width) * 100 + (dY / height) * 100);
          }}
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}
        <Box
          sx={{
            width: "100%",
            height: "100vh",
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
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <GradientText
                fontSize={{
                  xs: "90px",
                  sm: "130px",
                  md: "140px",
                  lg: "180px",
                }}
                textAlign={{ xs: "center", md: "center" }}
                letterSpacing={{ xs: "-2px", sm: "-3px" }}
                gradient={gradients.whiteLight}
                // gradient={`radial-gradient( circle at ${
                //   gradient * 1.5
                // }%,white, white)`}
                sx={{ ml: 0 }}
              >
                Peniel
              </GradientText>
              <Box
                component={"h2"}
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", lg: "3rem" },
                  fontWeight: 500,
                  color: "white",
                  lineHeight: 1,
                  maxWidth: "90%",
                  letterSpacing: "-2px",
                  mt: 3,
                }}
              >
                Lo mejor del mundo en construcciones y acabados
              </Box>
            </Box>
          </InView>
        </Box>
        {/* </MouseMoveContent> */}
      </Box>

      <Box
        sx={{
          top: 0,
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundImage: "url(/image/bgt1.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 1,
          opacity: 0.2,
        }}
      ></Box>
    </Box>
  );
};

export default BannerPrincipal;
