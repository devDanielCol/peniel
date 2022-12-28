import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";

const EndPage: FC = () => {
  return (
    <Container sx={{ pt: 5 }}>
      <Box
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            zIndex: 2,
            px: { xs: 0, md: 3 },
          }}
        >
          <Grid container>
            <Grid
              item
              xs={7}
              md={6.5}
              sx={{
                p: { xs: 2, md: 4 },
                borderTopLeftRadius: "24px",
                borderBottomLeftRadius: "24px",
                backgroundColor: "#ffea00",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.9rem", sm: "2rem", md: "3rem" },
                  lineHeight: 1.2,
                }}
              >
                Obten mayor informacion sobre
                <Typography
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "2rem", md: "3rem" },
                    px: 1,
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                  component={"span"}
                >
                  Nosotros
                </Typography>
                y comunicate ahora mismo
              </Typography>
              <Grid
                container
                columnSpacing={1}
                rowSpacing={1}
                sx={{ mt: { xs: 1, sm: 2.5, md: 4 } }}
              >
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: { xs: "0.5rem", sm: "1rem", md: "1rem" },
                      width: "100%",
                      borderRadius: "8px",
                      p: 0.5,
                      backgroundColor: "white",
                      boxShadow: 0,
                    }}
                  >
                    <PhoneCallbackIcon
                      sx={{
                        mr: { xs: 0.5, sm: 0.7, md: 1 },
                        height: { xs: 10, sm: 20, md: 20 },
                        width: { xs: 10, sm: 20, md: 20 },
                      }}
                    />
                    Llamada
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: { xs: "0.5rem", sm: "1rem", md: "1rem" },
                      width: "100%",
                      borderRadius: "8px",
                      p: 0.5,
                      backgroundColor: "white",
                      boxShadow: 0,
                    }}
                  >
                    <WhatsAppIcon
                      sx={{
                        mr: { xs: 0.5, sm: 0.7, md: 1 },
                        height: { xs: 10, sm: 20, md: 20 },
                        width: { xs: 10, sm: 20, md: 20 },
                      }}
                    />
                    WhatsApp
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: { xs: "0.5rem", sm: "1rem", md: "1rem" },
                      width: "100%",
                      borderRadius: "8px",
                      p: 0.5,
                      backgroundColor: "white",
                      boxShadow: 0,
                    }}
                  >
                    <MailIcon
                      sx={{
                        mr: { xs: 0.5, sm: 0.7, md: 1 },
                        height: { xs: 10, sm: 20, md: 20 },
                        width: { xs: 10, sm: 20, md: 20 },
                      }}
                    />
                    Correo
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={5}
              md={5.5}
              sx={{
                p: 4,
                borderTopRightRadius: "24px",
                borderBottomRightRadius: "24px",
                backgroundColor: "#fff",
                backgroundImage: "url(/image/home3.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default EndPage;
