import { Container } from "@mui/system";
import { FC } from "react";
import gradients from "../../styles/colors/gradients";
import GradientText from "../GradientText/GradientText";

const BannerPrincipal: FC = () => {
  return (
    <Container
      sx={{
        zIndex: "-1",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
      <GradientText
        fontSize={{
          xs: "90px",
          sm: "110px",
          md: "120px",
          lg: "180px",
        }}
        textAlign={{ xs: "center", md: "center" }}
        letterSpacing={{ xs: "-2px", sm: "-3px" }}
        // gradient={`radial-gradient( circle at ${gradient}%,#5d309e,#995bff)`}
        gradient={gradients.yellowPink}
        sx={{ ml: 1 }}
      >
        Peniel
      </GradientText>
      {/* </MouseMoveContent> */}
    </Container>
  );
};

export default BannerPrincipal;
