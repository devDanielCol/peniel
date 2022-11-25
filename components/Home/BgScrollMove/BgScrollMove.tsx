import { Container, Typography, Box } from "@mui/material";
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
          height: "110vh",
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
            filter: "brightness(0.33)",
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
            filter: "brightness(0.66)",
          }}
        >
          Calidad
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "10rem",
            position: "sticky",
            top: 80,
          }}
        >
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
              filter: "brightness(1)",
            }}
          >
            Inovacion
          </Typography>
        </Box>
      </Container>
    </BackgroundScroll>
  );
};

export default BgScrollMove;
