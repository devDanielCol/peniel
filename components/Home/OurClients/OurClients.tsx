import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import { InView } from "react-intersection-observer";

interface IRightSectionGridProps {
  scroll?: number;
}

const OurClients: FC<IRightSectionGridProps> = () => {
  const [inview, setInview] = useState<boolean>(false);

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          pt: 5,
        }}
      >
        <Grid container sx={{ px: 2 }}>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              height: "100%",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                backgroundImage: "url(/image/pcref.webp)",
                width: "100%",
                height: { xs: "300px", md: "600px" },
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              pl: { xs: 0, md: "4rem" },
            }}
          >
            <InView
              onChange={(inView) => {
                setInview(inView);
              }}
              threshold={1}
            >
              <Box
                sx={{
                  transition: "all .5s linear",
                  transform: {
                    xs: inview ? "translateY(0px)" : "translateY(50vw)",
                    md: inview ? "translateX(0px)" : "translateX(-50vw)",
                  },
                  zIndex: -1,
                  opacity: inview ? "100%" : "0%",
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
                    fontSize: { xs: "2rem", lg: "4rem" },
                    textAlign: { xs: "center", md: "left" },
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
                    fontSize: { xs: "1.2rem", lg: "1.5rem" },
                    textAlign: { xs: "center", md: "left" },
                    mt: { xs: 2, md: 0 },
                  }}
                >
                  diseño y confort
                </Typography>
              </Box>
            </InView>
          </Grid>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              backgroundImage: "url(/image/pcref.webp)",
              width: "100%",
              height: { xs: "300px", md: "600px" },
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              zIndex: 1,
            }}
          ></Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurClients;
