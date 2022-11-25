import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TranslateScroll from "../../ScrollWindow/componets/TranslateScroll";

const BannerInView = ({ scroll }: { scroll: number }) => {
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
        }}
      >
        <TranslateScroll scroll={scroll}>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
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
                fontSize: { xs: "5rem", lg: "10rem" },
              }}
            >
              Expertos
            </Typography>
          </Box>
        </TranslateScroll>
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
          backgroundColor: "#FBDA61",
          scrollSnapAlign: "center",
          // backgroundImage: "linear-gradient(0deg, #7f87ff, #5598def5)",
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
          {" "}
          <Box
            sx={{
              transform: text2 ? "translateY(0%)" : "translateY(100%)",
              opacity: text2 ? "100%" : "0%",
              transition: "all .2s linear",
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
              Calidad garantizada - Los mejores materiales y diseños - Moderno y
              sofisticados
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
          color: "white",
          backgroundImage: `linear-gradient(0deg, #FF5ACD, #FBDA61)`,
          scrollSnapAlign: "center",
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
              transform: text3 ? "translateY(0%)" : "translateY(100%)",
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
        }}
      ></Box>
    </>
  );
};

export default BannerInView;
