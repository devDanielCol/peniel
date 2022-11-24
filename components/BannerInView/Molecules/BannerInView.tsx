import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import gradients from "../../../styles/colors/gradients";
import GradientText from "../../GradientText/GradientText";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const BannerInView = () => {
  const [text1, setText1] = useState<boolean>(false);
  const [text2, setText2] = useState<boolean>(false);
  const [text3, setText3] = useState<boolean>(false);
  const [text4, setText4] = useState<boolean>(false);

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 300,
          zIndex: 1,
          boxSizing: "border-box",
          padding: 0,
          m: 0,
          lineHeight: 1,
          fontSize: "1rem",
          position: "sticky",
          top: "100px",
          width: "200px",
          px: 2,
          py: 1,
          borderBottomRightRadius: "16px",
          color: "white",
          backgroundImage: "linear-gradient(to right, #d84242, #ff0068)",
        }}
      >
        ¿Te gusta lo que ves?
      </Typography>
      <InView
        onChange={(inView) => {
          setText1(inView);
        }}
        threshold={1}
        rootMargin={"200px 0px 0px 0px"}
        delay={100}
      >
        <Box
          sx={{
            width: "100%",
            height: "90vh",
            pt: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // backgroundImage: "linear-gradient(0deg, #5598def5, #2ca2b4)",
          }}
        >
          <Box
            sx={{
              transform: text1 ? "translateY(0%)" : "translateY(100%)",
              opacity: text1 ? "100%" : "0%",
              transition: "all .5s linear",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <GradientText gradient={gradients.yellowPink} fontSize={"5rem"}>
              Arquitectónico
            </GradientText>
            <Typography
              sx={{
                fontWeight: 500,
                zIndex: 1,
                boxSizing: "border-box",
                padding: 0,
                lineHeight: 1,
                fontSize: "8rem",
              }}
            >
              Es Fascinante
            </Typography>
          </Box>
        </Box>
      </InView>

      <InView
        onChange={(inView) => {
          setText2(inView);
        }}
        threshold={1}
        rootMargin={"200px 0px 0px 0px"}
        delay={100}
      >
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            pt: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // backgroundImage: "linear-gradient(0deg, #7f87ff, #5598def5)",
          }}
        >
          <Box
            sx={{
              transform: text2 ? "translateY(0%)" : "translateY(100%)",
              opacity: text2 ? "100%" : "0%",
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
                fontSize: "4rem",
              }}
            >
              ¿ Quieres conocer más ?
            </Typography>
          </Box>
        </Box>
      </InView>

      <InView
        onChange={(inView) => {
          setText3(inView);
        }}
        threshold={1}
        rootMargin={"200px 0px 0px 0px"}
        delay={100}
      >
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
          }}
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
                fontSize: "4rem",
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
                fontSize: "2rem",
                maxWidth: "50%",
                textAlign: "center",
              }}
            >
              un gran stack de servicios de construccion, diseño, remodeloacion,
              arquitectura, instalacion de puntos electricos y muchos más
              servicios
            </Typography>
          </Box>
        </Box>
      </InView>

      <InView
        onChange={(inView) => {
          setText4(inView);
        }}
        threshold={1}
        rootMargin={"200px 0px 0px 0px"}
        delay={100}
      >
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
          }}
        >
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
                fontSize: "4rem",
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
                fontSize: "2rem",
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
                  fontSize: "1.3rem",
                  width: "100px",
                  height: "100px",
                  color: "white",
                }}
              >
                <WhatsAppIcon sx={{ width: "70px", height: "170px" }} />
              </IconButton>{" "}
              <IconButton
                color="inherit"
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: "50%",
                  fontSize: "1.3rem",
                  width: "100px",
                  height: "100px",
                  color: "white",
                }}
              >
                <AddIcCallIcon sx={{ width: "70px", height: "170px" }} />
              </IconButton>{" "}
              <IconButton
                color="inherit"
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: "50%",
                  fontSize: "1.3rem",
                  width: "100px",
                  height: "100px",
                  color: "white",
                }}
              >
                <AlternateEmailIcon sx={{ width: "70px", height: "170px" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </InView>
    </Box>
  );
};

export default BannerInView;
