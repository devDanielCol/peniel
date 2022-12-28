// import required modules
import { Box, Link, Typography } from "@mui/material";
import GradientText from "../../GradientText/GradientText";
import { FC } from "react";
import gradients from "../../../styles/colors/gradients";

const LastCardServices: FC = () => {
  return (
    <Box
      sx={{
        height: { xs: "150px", md: "220px" },
        width: { xs: "180px", md: "240px" },
        p: { xs: "26px", md: "36px" },
        backgroundImage: gradients.yellowPink,
        borderRadius: "20px",
        boxShadow: "5px 5px 10px rgb(0 0 0 / 5%)",
        m: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <GradientText
          gradient={gradients.whiteLight}
          fontSize={{ xs: "1.1rem", md: "1.4rem" }}
          sx={{ fontWeight: 600 }}
        >
          {"Necesitas Ayuda"}
        </GradientText>
        <Typography
          sx={{ fontSize: "0.8rem", fontWeight: 600, color: "white" }}
        >
          {"Estamos dispuestos ayudarte"}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", md: "1.2rem" },
            mt: { xs: 1, md: 3 },
            lineHeight: 1.1,
            color: "white",
          }}
        >
          {"Comunicate con nostros ahora mismo"}
        </Typography>
      </Box>
      <Typography
        sx={{
          mt: { xs: 1, md: 0 },
          fontSize: { xs: "1rem", md: "1.5rem", color: "white" },
        }}
      >
        <Link
          target={"_blank"}
          sx={{ color: "inherit", textDecoration: "none" }}
          href={`https://wa.me/573203373213?text=Hola, quisiera tener mas información sobre los servicios de Construcciones y acabados Peniel`.replace(
            " ",
            "+"
          )}
        >
          Envianos un mensaje
        </Link>
      </Typography>
    </Box>
  );
};

export default LastCardServices;
