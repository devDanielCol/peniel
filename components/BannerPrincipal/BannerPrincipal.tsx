import { Container } from "@mui/system";
import { FC, useState } from "react";
import GradientText from "../GradientText/GradientText";
import MouseMoveContent from "../MouseMoveCard/MouseMoveCard";

const BannerPrincipal: FC = () => {
  const [gradient, setGradient] = useState<number>(0);

  return (
    <Container>
      <MouseMoveContent
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
      >
        <GradientText
          fontSize={{
            xs: "40px",
            sm: "110px",
            md: "120px",
            lg: "120px",
          }}
          textAlign={{ xs: "center", md: "center" }}
          letterSpacing={{ xs: "-2px", sm: "-3px" }}
          gradient={`radial-gradient( circle at ${gradient}%,#5d309e,#995bff)`}
          sx={{ ml: 1 }}
        >
          Peniel Constucciones
        </GradientText>
      </MouseMoveContent>
    </Container>
  );
};

export default BannerPrincipal;
