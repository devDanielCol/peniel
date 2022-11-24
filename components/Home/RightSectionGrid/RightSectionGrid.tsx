import { Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import OpacityScroll from "../../ScrollWindow/componets/OpacityScroll";

interface IRightSectionGridProps {
  scroll: number;
}

const RightSectionGrid: FC<IRightSectionGridProps> = ({ scroll }) => {
  return (
    <OpacityScroll scroll={scroll}>
      <Container sx={{ width: "100%", height: "110vh" }}>
        <Grid container>
          <Grid item xs={12} md={5} sx={{ height: "100%" }}></Grid>
          <Grid
            item
            xs={12}
            md={7}
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
                fontSize: { xs: "3rem", lg: "7rem" },
                textAlign: "left",
              }}
            >
              Moderno y de calidad
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                zIndex: 1,
                boxSizing: "border-box",
                padding: 0,
                m: 0,
                lineHeight: 1,
                fontSize: { xs: "1rem", lg: "3rem" },
                textAlign: "left",
              }}
            >
              diseño y confort
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </OpacityScroll>
  );
};

export default RightSectionGrid;
