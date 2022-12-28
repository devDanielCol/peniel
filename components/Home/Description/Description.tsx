import { Container, Box, Typography } from "@mui/material";
import { FC, useState } from "react";
import { InView } from "react-intersection-observer";
import { waveMove } from "../../../styles/animation/keyframes/zoomScale";

interface ILeftSectionGridProps {
  scroll?: number;
}

const LeftSectionGrid: FC<ILeftSectionGridProps> = () => {
  const [inView, setInView] = useState<boolean>(false);
  const [text, setText] = useState<boolean>(false);

  return (
    <Box sx={{ backgroundColor: "#0a0f11", color: "white" }}>
      <InView
        onChange={(inView) => {
          setInView(inView);
          console.log(inView);
        }}
        threshold={0.85}
      >
        <Container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              py: "8rem",
              px: 2,
              opacity: inView ? "100%" : "0%",
              transition: "all .5s linear",
              overflow: "hidden",
            }}
          >
            <InView
              onChange={(inView) => {
                setText(inView);
              }}
              threshold={1}
              rootMargin={"200px 0px 0px 0px"}
              delay={100}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  transition: "all 1 linear",
                }}
              >
                {"Expertos".split("").map((letter, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontWeight: 500,
                      zIndex: 1,
                      boxSizing: "border-box",
                      padding: 0,
                      color: "#03a9f4",
                      lineHeight: 1,
                      fontSize: { xs: "3.5rem", lg: "7rem" },
                      transition: "all .4s linear",
                      display: "flex",
                      ...waveMove(index * 100, text),
                    }}
                  >
                    {letter}
                  </Typography>
                ))}
              </Box>
            </InView>
            <Typography
              sx={{
                mt: "4rem",
                fontSize: { xs: "1.1rem", md: "1.5rem" },
                textAlign: "center",
                color: "#90a4ae",
              }}
            >
              Con nosotros{" "}
              <Typography
                sx={{
                  mt: 5,
                  fontSize: { xs: "1.1rem", md: "1.5rem" },
                  color: "white",
                }}
                component="span"
              >
                Construcciones y acabados Peniel
              </Typography>{" "}
              Tienes el alto nivel que necesitas de calidad, buena atención y
              alta demanda en servicios de remodelacion, construccion y
              acabados. Ya que contamos con las mejores tecnicas, buenas
              practicas y excelente capacidad en todos nuestros trabajos,
            </Typography>
          </Box>
        </Container>
      </InView>
    </Box>
  );
};

export default LeftSectionGrid;
