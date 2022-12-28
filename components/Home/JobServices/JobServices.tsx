import { Container, Box, Typography } from "@mui/material";
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
            py: { xs: 6, md: 12 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              zIndex: 1,
              boxSizing: "border-box",
              padding: 0,
              m: 0,
              lineHeight: 1,
              textAlign: "center",
              maxWidth: { xs: "100%", lg: "50%" },
              fontSize: { xs: "2.2rem", lg: "4rem" },
            }}
          >
            Lista de servicios
          </Typography>
        </Box>
      </Container>
      <Box sx={{ width: "100%", pb: { xs: 6, md: 12 } }}>
        <SlideServices
          slidesPerView={1.4}
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <SlideServices
          slidesPerView={2.5}
          sx={{ display: { xs: "none", sm: "block", md: "none" } }}
        />
        <SlideServices
          slidesPerView={3.2}
          sx={{ display: { xs: "none", md: "block", lg: "none" } }}
        />
        <SlideServices
          slidesPerView={4}
          sx={{ display: { xs: "none", lg: "block" } }}
        />
      </Box>
    </>
  );
};

export default ServicesList;
