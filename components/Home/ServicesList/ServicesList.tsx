import { Container, Box } from "@mui/material";
import GradientText from "../../GradientText/GradientText";
import SlideServices from "../../SlideServices/Molecules/SlideServices";

const ServicesList = () => {
  return (
    <>
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
          <GradientText
            fontSize={{ xs: "3rem", lg: "4rem" }}
            sx={{
              fontWeight: 900,
              zIndex: 1,
              boxSizing: "border-box",
              padding: 0,
              m: 0,
              lineHeight: 1,
              textAlign: "center",
              maxWidth: { xs: "100%", lg: "50%" },
            }}
            gradient={"linear-gradient(to right, #494949, #000000)"}
          >
            Lista de servicios
          </GradientText>
        </Box>
      </Container>
      <Box sx={{ width: "100%", my: 10 }}>
        <SlideServices />
      </Box>
    </>
  );
};

export default ServicesList;
