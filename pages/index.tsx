import { Box, Divider } from "@mui/material";
import { Container } from "@mui/system";
import GradientText from "../components/GradientText/GradientText";
import Content from "../components/Layout/Content/General";
import { animationZoom } from "../styles/animation/keyframes/zoomScale";
import gradients from "../styles/colors/gradients";

export default function Home() {
  return (
    <Content title="Home | Peniel construcciones">
      <>
        <Box sx={{ overflow: "hidden" }}>
          <Container
            sx={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                ...animationZoom,
                animation: `${"ZoomPrimary" || "primary"} 1s`,
                transition: "all 0.5s linear",
                zIndex: 100,
              }}
            >
              <GradientText
                fontSize={{ xs: "50px", sm: "70px", md: "90px", lg: "110px" }}
                textAlign={{ xs: "center", md: "left" }}
                animation="none"
                gradient={gradients.yellowPink}
              >
                Peniel Construcciones
              </GradientText>
            </Box>
            <Box
              sx={{
                ...animationZoom,
                position: "absolute",
                top: "30%",
                right: "-20% !important",
                width: "35rem",
                transform: "rotate(-40deg)",
                height: "50rem",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${"https://cdn.pixabay.com/photo/2016/04/01/22/32/world-1301744_1280.png"})`,
                backgroundSize: "contain",
                animation: `${"desdeAbajo" || "primary"} 1s`,
                zIndex: 1,
              }}
            ></Box>
          </Container>
        </Box>
        <Divider sx={{ width: "90%" }} />
        <Box sx={{ width: "100%", height: "100vh" }}></Box>
      </>
    </Content>
  );
}
