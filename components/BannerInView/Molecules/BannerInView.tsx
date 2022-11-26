import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { waveMove } from "../../../styles/animation/keyframes/zoomScale";

const BannerInView = () => {
  const [text1, setText1] = useState<boolean>(false);
  const [text2, setText2] = useState<boolean>(false);
  const [text3, setText3] = useState<boolean>(false);
  const [text4, setText4] = useState<boolean>(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#FBDA61",
          scrollSnapAlign: "center",
          scrollSnapStop: "always",
        }}
      >
        <InView
          onChange={(inView) => {
            setText1(inView);
          }}
          threshold={0.6}
          rootMargin={"200px 0px 0px 0px"}
          delay={100}
        >
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
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
                  lineHeight: 1,
                  fontSize: { xs: "5rem", lg: "10rem" },
                  transition: "all .4s linear",
                  display: "flex",
                  ...waveMove(index * 100, text1),
                }}
              >
                {letter}
              </Typography>
            ))}
          </Box>
        </InView>
      </Box>

      <Box
        sx={{
          backgroundColor: "#FBDA61",
          scrollSnapAlign: "center",
          scrollSnapStop: "always",
        }}
      >
        <InView
          onChange={(inView) => {
            setText2(inView);
          }}
          threshold={0.6}
          rootMargin={"200px 0px 0px 0px"}
          delay={100}
        >
          <Container
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              overflowX: "hidden",
            }}
          >
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
        </InView>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          backgroundImage: `linear-gradient(0deg, #FF5ACD, #FBDA61)`,
          scrollSnapAlign: "center",
          scrollSnapStop: "always",
          overflow: "hidden",
        }}
      >
        <InView
          onChange={(inView) => {
            setText3(inView);
          }}
          threshold={0.6}
          rootMargin={"200px 0px 0px 0px"}
          delay={100}
        >
          <Box
            sx={{
              transform: text3 ? "translateY(0%)" : "translateY(-200%)",
              opacity: text3 ? "100%" : "0%",
              transition: "all .5s linear",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                zIndex: 1,
                boxSizing: "border-box",
                padding: 0,
                lineHeight: 1,
                fontSize: { xs: "3rem", lg: "4rem" },
              }}
            >
              Te ofrecemos
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                zIndex: 1,
                boxSizing: "border-box",
                padding: 0,
                lineHeight: 1,
                mt: 2,
                fontSize: { xs: "1.5rem", lg: "2rem" },
                maxWidth: { xs: "100%", lg: "50%" },
                textAlign: "center",
              }}
            >
              un gran stack de servicios de construccion, diseño, remodeloacion,
              arquitectura, instalacion de puntos electricos y muchos más
              servicios
            </Typography>
          </Box>
        </InView>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          pt: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundImage: "linear-gradient(0deg, #ec3d43, #FF5ACD)",
          color: "white",
          scrollSnapAlign: "center",
          scrollSnapStop: "always",
        }}
      >
        <InView
          onChange={(inView) => {
            setText4(inView);
          }}
          threshold={1}
          rootMargin={"200px 0px 0px 0px"}
          delay={100}
        >
          {" "}
          <Box
            sx={{
              transform: text4 ? "translateY(0%)" : "translateY(100%)",
              opacity: text4 ? "100%" : "0%",
              transition: "all .5s linear",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                zIndex: 1,
                boxSizing: "border-box",
                padding: 0,
                lineHeight: 1,
                textAlign: "center",
                fontSize: { xs: "3rem", lg: "4rem" },
              }}
            >
              Comunicate ahora mismo
            </Typography>
            <Typography
              sx={{
                mt: 4,
                fontWeight: 500,
                zIndex: 1,
                boxSizing: "border-box",
                padding: 0,
                lineHeight: 1,
                textAlign: "center",
                fontSize: { xs: "1.5rem", lg: "2rem" },
              }}
            >
              Conoce toda la lista de servicios que tenemos disponibles para ti
            </Typography>
            <Box>
              <IconButton
                color="inherit"
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  color: "white",
                }}
              >
                <WhatsAppIcon
                  sx={{
                    width: { xs: "45px", lg: "70px" },
                    height: { xs: "90px", lg: "170px" },
                  }}
                />
              </IconButton>{" "}
              <IconButton
                color="inherit"
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  color: "white",
                }}
              >
                <AddIcCallIcon
                  sx={{
                    width: { xs: "45px", lg: "70px" },
                    height: { xs: "90px", lg: "170px" },
                  }}
                />
              </IconButton>{" "}
              <IconButton
                color="inherit"
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  color: "white",
                }}
              >
                <AlternateEmailIcon
                  sx={{
                    width: { xs: "45px", lg: "70px" },
                    height: { xs: "90px", lg: "170px" },
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </InView>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          pt: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#ec3d43",
          color: "white",
          scrollSnapAlign: "center",
          scrollSnapStop: "always",
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
            textAlign: "center",
            maxWidth: { xs: "100%", lg: "60%" },
          }}
        >
          Mas contenido en esta parte
        </Typography>
      </Box>
    </>
  );
};

export default BannerInView;
