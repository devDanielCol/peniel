import { Container, Typography, Box, Grid } from "@mui/material";
import { FC } from "react";
import BackgroundScroll from "../../ScrollWindow/componets/BackgroundScroll";

interface IBgScrollMoveProps {
  scroll: number;
}

const BgScrollMove: FC<IBgScrollMoveProps> = ({ scroll }) => {
  return (
    <BackgroundScroll {...{ scroll }}>
      <Container sx={{ width: "100%", height: "110vh" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
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
                opacity: { xs: "70%", lg: "100%" },
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
                opacity: { xs: "85%", lg: "100%" },
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
                  opacity: { xs: "100%", lg: "100%" },
                }}
              >
                Inovacion
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </BackgroundScroll>
  );
};

export default BgScrollMove;
