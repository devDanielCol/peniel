import { Container, Box, Typography } from "@mui/material";

const Article = () => {
  return (
    <Container maxWidth={"md"}>
      <Box sx={{ minHeight: "100vh" }}>
        <Box component={"article"}>
          <Typography
            component={"h1"}
            sx={{ fontSize: "2rem", display: "none" }}
          >
            Sobre Construcciones y acabados Peniel SAS
          </Typography>
          <Box component={"section"}>
            <Typography
              component={"h2"}
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 500,
                textAlign: "left",
                mt: 3,
              }}
            >
              ¿Quienes somos?
            </Typography>
            <Typography component={"p"} sx={{ mt: 3 }}>
              Somos una compañia comprometida con el resultado de nuestros
              trabajos, procuramos cumplir y entregar cada proyecto de la mejor
              manera con un alto estandar de calidad, creamos soluciones de
              construccion de cabados y de construccion en general.
              Probablemente tienes en mente remodelar tu oficina, tu casa o un
              edificio por completo y necesitas de expertos para llevar a cabo
              esta tarea. Nosotros entendemos cada necesidad existente en el
              entorno de trabajo, realizamos observaciones preliminares y
              validamos las condiciones actualies versus la imagen proyectada a
              futuro.
            </Typography>
            <Typography component={"p"} sx={{ mt: 3 }}>
              Somos una compañia comprometida con el resultado de nuestros
              trabajos, procuramos cumplir y entregar cada proyecto de la mejor
              manera con un alto estandar de calidad, creamos soluciones de
              construccion de cabados y de construccion en general.
              Probablemente tienes en mente remodelar tu oficina, tu casa o un
              edificio por completo y necesitas de expertos para llevar a cabo
              esta tarea. Nosotros entendemos cada necesidad existente en el
              entorno de trabajo, realizamos observaciones preliminares y
              validamos las condiciones actualies versus la imagen proyectada a
              futuro.
            </Typography>
          </Box>
          <Box component={"section"}>
            <Typography
              component={"h2"}
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 500,
                textAlign: "left",
                mt: 3,
              }}
            >
              Nuestra mision
            </Typography>
            <Typography component={"p"} sx={{ mt: 3 }}>
              Tenemos una vision completemante clara en{" "}
              <b>Construcciones y acabados peniel sas</b> sabemos que los
              resultados no se miden por la cantidad de proyectos abiertos, sino
              por la felicidad otorgada a nuestros clientes.
              <br />
              Nuestra meta primordial, es competir dentro del mercado nacional
              de infraestructura y desarrollar proyectos inovadores de calidad y
              de talla mundial, usando lo ultimo en tecnologia.
            </Typography>
          </Box>
          <Box component={"section"} sx={{ mb: 4, mt: 3 }}>
            <Typography
              component={"h2"}
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 500,
                textAlign: "left",
                mt: 3,
              }}
            >
              Valores institucionales
            </Typography>
            <Typography component={"ul"} sx={{ mt: 3 }}>
              <Typography component={"li"}>Compromiso</Typography>
              <Typography component={"li"}>Responsabilidad</Typography>
              <Typography component={"li"}>Comunicación continua</Typography>
              <Typography component={"li"}>Rentabilidad</Typography>
              <Typography component={"li"}>Estabilidad</Typography>
              <Typography component={"li"}>Atencion</Typography>
            </Typography>
            <Typography component={"p"} sx={{ mt: 3 }}>
              Creemos que los valores son importantes, y que nos describen como
              empresa, por esa razon somos comprometidos con nuestras labores,
              contamos con un alta responsabildiad a la hora de atender
              solicitudes y una comunicacion continua para que nuestros clientes
              sepan de cada avance y de cada resultado obtenido.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Article;
