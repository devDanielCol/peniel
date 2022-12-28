// import required modules
import { Box, Link, Typography } from "@mui/material";
import useTheme from "../../../util/hooks/useTheme";
import GradientText from "../../GradientText/GradientText";
import { FC } from "react";

interface CardServicesProps {
  title: string;
  summary: string;
  description: string;
}

const CardServices: FC<CardServicesProps> = ({
  title,
  summary,
  description,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: { xs: "150px", md: "220px" },
        width: { xs: "180px", md: "240px" },
        p: { xs: "26px", md: "36px" },
        backgroundColor: theme.palette.background.paper,
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
          fontSize={{ xs: "1.1rem", md: "1.4rem" }}
          sx={{ fontWeight: 600 }}
        >
          {title}
        </GradientText>
        <Typography sx={{ fontSize: "0.8rem", fontWeight: 600 }}>
          {summary}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", md: "1.2rem" },
            mt: { xs: 1, md: 3 },
            lineHeight: 1.1,
          }}
        >
          {description}
        </Typography>
      </Box>
      <Typography
        sx={{ mt: { xs: 1, md: 0 }, fontSize: { xs: "1rem", md: "1.5rem" } }}
      >
        <Link
          target={"_blank"}
          href={`https://wa.me/573203373213?text=Hola, estoy interesado en recibir informacioin sobre ${title}`}
        >
          Cotizar
        </Link>
      </Typography>
    </Box>
  );
};

export default CardServices;
