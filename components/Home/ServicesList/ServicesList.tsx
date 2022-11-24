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
            pt: 12,
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
              fontSize: { xs: "3rem", lg: "4rem" },
              textAlign: "center",
              maxWidth: { xs: "100%", lg: "50%" },
            }}
          >
            Nuestra lista de servicios
          </Typography>
        </Box>
      </Container>
      <Box sx={{ width: "100%", my: 10 }}>
        <SlideServices />
      </Box>
    </>
  );
};

export default ServicesList;
