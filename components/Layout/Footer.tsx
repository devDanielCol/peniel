import * as React from "react";
import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { SxProps } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

interface IProps {
  sx?: SxProps;
}

function Copyright(props: IProps) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="#">
        Construcciones y acabados peniel SAS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
        scrollSnapStop: "normal",
        backgroundColor: "#292929",
        color: "white",
      }}
      component="footer"
    >
      <Container sx={{ minHeight: "10rem", p: 3 }}>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box component={"ul"} sx={{ p: 0 }}>
              <Typography sx={{ fontWeight: 700 }}>Nosotros</Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Sobre nosotros
              </Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Terminos y condiciones
              </Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Politicas
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box component={"ul"} sx={{ p: 0 }}>
              <Typography sx={{ fontWeight: 700 }}>Contacto</Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Calle 96a sur 14q-18 Bogotá, <br />
                Colombia
              </Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                construccionesyacabadospeniel@gmail.com
              </Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Bogotá (57 1) 6678489
              </Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Resto del país (57) 3203379213
              </Typography>
              <ButtonGroup sx={{ mt: 2, fontSize: "0.9rem" }}>
                <IconButton
                  sx={{
                    bgcolor: "white",
                    p: 0.5,
                    mr: 1,
                    "&:hover": {
                      background: "white",
                    },
                  }}
                >
                  <WhatsAppIcon sx={{ width: "20px", height: "20px" }} />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: "white",
                    p: 0.5,
                    mr: 1,
                    "&:hover": {
                      background: "white",
                    },
                  }}
                >
                  <FacebookOutlinedIcon
                    sx={{ width: "20px", height: "20px" }}
                  />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: "white",
                    p: 0.5,
                    mr: 1,
                    "&:hover": {
                      background: "white",
                    },
                  }}
                >
                  <InstagramIcon sx={{ width: "20px", height: "20px" }} />
                </IconButton>
              </ButtonGroup>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ width: "100%", backgroundColor: "white" }} />
      <Grid
        container
        sx={{
          py: 5,
        }}
      >
        <Grid item lg={4} md={4} xs={12}></Grid>
        <Grid
          item
          lg={4}
          md={4}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Copyright />

          <Typography variant="body2" align="center">
            NIT: 800013514834-4
          </Typography>
          <Typography
            sx={{ mt: 2, mb: 2, color: "inherit" }}
            fontSize={{ xs: 12, md: 14 }}
          >
            Powered by
          </Typography>
          <Typography variant="body2" align="center">
            <Link color="inherit">Developer Information</Link>
          </Typography>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          xs={12}
          sx={{
            pt: { xs: 4, md: 0 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href="https://www.ccb.org.co/"
            about="camara-comercio-bogota"
            sx={{ backgroundColor: "white", p: 1, borderRadius: 2 }}
          >
            <Image
              width={150}
              height={50}
              src={"/image/ccb_icon.png"}
              alt={"camara-comercio-bogota"}
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
