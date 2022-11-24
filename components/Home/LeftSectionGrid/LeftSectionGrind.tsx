import { Container, Typography, Grid } from "@mui/material";
import { FC } from "react";
import OpacityScroll from "../../ScrollWindow/componets/OpacityScroll";

interface ILeftSectionGridProps {
  scroll: number;
}

const LeftSectionGrid: FC<ILeftSectionGridProps> = ({ scroll }) => {
  return (
    <OpacityScroll scroll={scroll}>
      <Container sx={{ width: "100%", height: "110vh" }}>
        <Grid container>
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
              Lo mejor del mundo
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
              en Construccion y Acabados
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} sx={{ height: "100%" }}></Grid>
        </Grid>
      </Container>
    </OpacityScroll>
  );
};

export default LeftSectionGrid;
