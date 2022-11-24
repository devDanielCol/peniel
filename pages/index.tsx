import { Box, Container, Grid, Grow, Typography } from "@mui/material";
import { useState } from "react";
import OpacityScroll from "../components/ScrollWindow/componets/OpacityScroll";
import BannerPrincipal from "../components/BannerPrincipal/BannerPrincipal";
import Content from "../components/Layout/Content/General";
import ScrollTrigger from "../components/ScrollWindow/ScrollTrigger";
import isNavigator from "../util/helpers/isNavigator";
import BackgroundScroll from "../components/ScrollWindow/componets/BackgroundScroll";
import SlideServices from "../components/SlideServices/Molecules/SlideServices";
import BannerInView from "../components/BannerInView/Molecules/BannerInView";

export default function Home() {
  const currentScroll = (isNavigator() && self.scrollY) || 0;
  const [scroll, setScroll] = useState<number>(currentScroll);

  ScrollTrigger({
    onEventScroll({ scrollY }) {
      setScroll(scrollY);
    },
  });

  return (
    <Content title="Home | Peniel construcciones">
      <BannerPrincipal />
      <OpacityScroll {...{ scroll }}>
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
                  fontSize: "7rem",
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
                  fontSize: "3rem",
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
      <OpacityScroll {...{ scroll }}>
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
                  fontSize: "7rem",
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
                  fontSize: "3rem",
                  textAlign: "left",
                }}
              >
                diseño y confort
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </OpacityScroll>
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
                  fontSize: "7rem",
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
                  ml: 20,
                  lineHeight: 1,
                  fontSize: "7rem",
                  textAlign: "left",
                  color: "white",
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
                    ml: 40,
                    lineHeight: 1,
                    fontSize: "7rem",
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  Inovacion
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BackgroundScroll>

      <BannerInView />

      <Container id="services" sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 12,
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
              fontSize: "4rem",
              textAlign: "center",
              maxWidth: "50%",
            }}
          >
            Nuestra lista de servicios
          </Typography>
        </Box>
      </Container>
      <Box sx={{ width: "100%", my: 10 }}>
        <SlideServices />
      </Box>
    </Content>
  );
}
