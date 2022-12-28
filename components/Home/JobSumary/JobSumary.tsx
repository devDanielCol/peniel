import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import { InView } from "react-intersection-observer";
import useTheme from "../../../util/hooks/useTheme";

interface IRightSectionGridProps {
  scroll?: number;
}

const OurClients: FC<IRightSectionGridProps> = () => {
  const [inview, setInview] = useState<boolean>(false);

  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.paper }}>
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          py: 5,
        }}
      >
        <Grid container sx={{ px: 4 }}>
          <Grid
            item
            xs={12}
            sm={5}
            md={5}
            sx={{
              height: "100%",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              zIndex: 1,
              mb: { xs: 5, sm: 0 },
            }}
          >
            <Box
              sx={{
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
            sm={7}
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
                    xs: inview ? "translateY(0px)" : "translateY(-50vw)",
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
            <Typography
              sx={{
                fontWeight: 300,
                boxSizing: "border-box",
                padding: 0,
                m: 0,
                lineHeight: 1.5,
                fontSize: { xs: "1rem", lg: "1.3rem" },
                textAlign: { xs: "center", md: "left" },
                mt: { xs: 2, md: 5 },
              }}
            >
              Manejamos cualquier nivel de remodelacion, desde la parte interior
              hasta la exterior de casas, edificios, entre otros.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurClients;
