import { Container } from "@mui/system";
import { FC, useState } from "react";
import GradientText from "../GradientText/GradientText";
import MouseMoveContent from "../MouseMoveCard/MouseMoveCard";

const BannerPrincipal: FC = () => {
  const [gradient, setGradient] = useState<number>(0);

  return (
    <Container sx={{ width: "100vw", height: "100vh" }}>
      <MouseMoveContent
        onMove={({ centerX, pageX, width }) => {
          const dX = pageX - centerX;
          setGradient((dX / width) * 100);
        }}
      >
        <GradientText
          fontSize={{
            xs: "40px",
            sm: "110px",
            md: "120px",
            lg: "120px",
          }}
          textAlign={{ xs: "center", md: "left" }}
          letterSpacing={{ xs: "-2px", sm: "-3px" }}
          gradient={`linear-gradient(to right, #5d309e , #995bff ${gradient}% )`}
          sx={{ ml: 1 }}
        >
          Peniel Constucciones
        </GradientText>
      </MouseMoveContent>
    </Container>
  );
};

export default BannerPrincipal;
