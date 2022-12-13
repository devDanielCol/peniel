import { Container, Box, Typography, Grid } from "@mui/material";
import { FC, useState } from "react";
import { InView } from "react-intersection-observer";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

interface ILeftSectionGridProps {
  scroll?: number;
}

const LeftSectionGrid: FC<ILeftSectionGridProps> = () => {
  const [inView, setInView] = useState<boolean>(false);

  return (
    <InView
      onChange={(inView) => {
        setInView(inView);
        console.log(inView);
      }}
      threshold={0.25}
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
            py: { xs: "4rem", md: "8rem" },
            px: 2,
            transform: inView ? "translateX(0%)" : "translateX(-100vw)",
            transition: "all .5s linear",
            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.8rem", md: "2rem" },
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            Te damos la{" "}
            <Typography
              sx={{
                mt: 5,
                fontSize: { xs: "1.8rem", md: "2rem" },
                color: "#ff4d4d",
              }}
              component="span"
            >
              Bienvenida
            </Typography>{" "}
            al lugar correcto
          </Typography>
          <Typography
            sx={{
              mt: { xs: 4, md: 2 },
              fontSize: { xs: "2.2rem", md: "3rem" },
              textAlign: "center",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            ¿Quienes somos?
          </Typography>
          <Typography
            sx={{
              mt: "4rem",
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              textAlign: "center",
            }}
          >
            The7 is the{" "}
            <Typography
              sx={{
                mt: 5,
                fontSize: { xs: "1.1rem", md: "1.5rem" },
                color: "#ff4d4d",
              }}
              component="span"
            >
              most customizable
            </Typography>{" "}
            WordPress theme available on the market up to date. It gives you
            creative freedom that no other theme can match. No matter if you are
            a beginner or a pro, website owner, creative professional, or a
            digital agency – The7 offers tremendous power and unparalleled value
            to everyone.
          </Typography>
          <Box sx={{ mt: "4rem" }}>
            <Grid container>
              {[0, 1, 2].map((_, i) => (
                <Grid
                  key={i}
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    mb: 3,
                  }}
                >
                  <CloudDownloadIcon
                    sx={{ width: "auto", height: "100px", color: "#f9cb28" }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        lineHeight: 2,
                        fontWeight: 700,
                        zIndex: 2,
                        textAlign: "center",
                      }}
                    >
                      Descarga
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </InView>
  );
};

export default LeftSectionGrid;
