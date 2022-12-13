import { Container, Typography } from "@mui/material";
import { FC } from "react";
import BackgroundScroll from "../../ScrollWindow/componets/BackgroundScroll";

interface IBgScrollMoveProps {
  scroll: number;
}

const BgScrollMove: FC<IBgScrollMoveProps> = ({ scroll }) => {
  return (
    <BackgroundScroll {...{ scroll }}>
      <Container
        sx={{
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            zIndex: 1,
            boxSizing: "border-box",
            padding: 0,
            m: 0,
            lineHeight: 1,
            fontSize: { xs: "2rem", lg: "7rem" },
            textAlign: "left",
            color: "white",
          }}
        >
          Diseño
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            zIndex: 1,
            boxSizing: "border-box",
            padding: 0,
            ml: { xs: 7, lg: 20 },
            lineHeight: 1,
            fontSize: { xs: "3rem", lg: "7rem" },
            textAlign: "left",
            color: "white",
          }}
        >
          Calidad
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            zIndex: 1,
            boxSizing: "border-box",
            padding: 0,
            ml: { xs: 14, lg: 40 },
            lineHeight: 1,
            fontSize: { xs: "3.7rem", lg: "7rem" },
            textAlign: "left",
            color: "white",
          }}
        >
          Inovacion
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            zIndex: 1,
            boxSizing: "border-box",
            padding: 0,
            ml: { xs: 7, lg: 20 },
            lineHeight: 1,
            fontSize: { xs: "3rem", lg: "7rem" },
            textAlign: "left",
            color: "white",
            opacity: 0.75,
          }}
        >
          Calidad
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            zIndex: 1,
            boxSizing: "border-box",
            padding: 0,
            m: 0,
            lineHeight: 1,
            fontSize: { xs: "2rem", lg: "7rem" },
            textAlign: "left",
            color: "white",
            opacity: 0.5,
          }}
        >
          Diseño
        </Typography>
      </Container>
    </BackgroundScroll>
  );
};

export default BgScrollMove;
