import { Box } from "@mui/material";
import { FC, useState } from "react";
import { InView } from "react-intersection-observer";
import GradientText from "../../GradientText/GradientText";
import gradients from "../../../styles/colors/gradients";

const BannerPrincipal: FC = () => {
  const [inview, setInview] = useState<boolean>(false);

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "70vh", md: "90vh" },
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
              <GradientText
                fontSize={{
                  xs: "50px",
                  sm: "60px",
                  md: "70px",
                  lg: "80px",
                }}
                textAlign={{ xs: "center", md: "center" }}
                letterSpacing={{ xs: "-2px", sm: "-3px" }}
                gradient={gradients.whiteLight}
                sx={{ ml: 0 }}
              >
                Construcciones y acabados
              </GradientText>
              <Box
                sx={{
                  fontSize: { xs: "60px", sm: "80px", lg: "100px" },
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1,
                  letterSpacing: { xs: "0px", md: "-2px" },
                  mt: 3,
                  textTransform: "uppercase",
                }}
              >
                Peniel
              </Box>
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
      <Box
        sx={{
          top: 0,
          position: "absolute",
          width: "100vw",
          height: "100%",
          backgroundColor: "transparent",
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2016/12/08/21/21/skyscrapers-1893201_1280.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
    </Box>
  );
};

export default BannerPrincipal;
