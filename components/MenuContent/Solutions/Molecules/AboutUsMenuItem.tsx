import { Box } from "@mui/material";
import AboutUsOpt from "../Atoms/AboutUsOpt";
import ListServices from "../Atoms/ListServices";

const AboutUsMenuItem = () => {
  return (
    <>
      <Box
        sx={{
          width: "500px",
          minHeight: "400px",
          px: 2,
          py: 4,
          backgroundColor: "background.default",
          borderRadius: 2,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <AboutUsOpt
          title="Peniel Construcciones"
          description="Encuentra todo lo que necesitas en un solo lugar para que estes
        siempre"
        />
        <AboutUsOpt
          sx={{ mt: 4 }}
          title="Nuestros servicios"
          description="Ofrecemos servicios que se acomodan a cualquier dimension"
        />
        <ListServices />
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundImage: "url(./image/edificios.png)",
          backgroundPositionY: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 80,
          borderRadius: 2,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          backgroundColor: "background.default",
        }}
      ></Box>
    </>
  );
};

export default AboutUsMenuItem;
