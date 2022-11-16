import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  Grid,
  Popover,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactOpt from "../../../MenuDeskopOpts/Contact/Atoms/ContactOpt";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import AboutUsOpt from "../../../MenuDeskopOpts/AboutUs/Atoms/AboutUsOpt";
import ListServices from "../../../MenuDeskopOpts/AboutUs/Atoms/ListServices";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import GradientText from "../../../GradientText/GradientText";
import gradients from "../../../../util/colors/gradients";

interface NavbarDeskopProps {
  window?: () => Window;
}

const NavbarMobile: FC<NavbarDeskopProps> = (props) => {
  const { window } = props;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number>();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const handleOpenAccordion = (item: number) => {
    if (item !== openAccordion) {
      setOpenAccordion(item);
    } else {
      setOpenAccordion(undefined);
    }
  };

  return (
    <>
      <AppBar
        sx={{
          boxShadow: 0,
          transition: "all .2s linear",
          backgroundColor: trigger ? "#00000080" : "transparent",
          backdropFilter: trigger ? "blur(15px)" : "blur(0px)",
          backgroundImage: "none",
          display: {
            xs: "block",
            lg: "none",
          },
        }}
      >
        <Toolbar>
          <Grid container sx={{ py: 2 }}>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  px: 1,
                  py: 0.5,
                  ml: 2,
                  color: "white",
                  borderColor: "white",
                  borderRadius: 2,
                  "&:hover": {
                    opacity: "70%",
                  },
                }}
              >
                Nosotros
              </Button>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MapsHomeWorkIcon />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button
                onClick={handleClick}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography
                  component="div"
                  sx={{
                    width: "30px",
                    height: "2px",
                    backgroundColor: "white",
                    transform: menuOpen
                      ? "rotate(-45deg) translateX(-1px) translateY(7px)"
                      : "",
                    transition: "all .2s linear",
                  }}
                />
                <Typography
                  component="div"
                  sx={{
                    mt: 0.5,
                    width: "30px",
                    height: "2px",
                    opacity: menuOpen ? "0%" : "100%",
                    backgroundColor: "white",
                    transition: "all .2s linear",
                  }}
                />
                <Typography
                  component="div"
                  sx={{
                    mt: 0.5,
                    width: "30px",
                    height: "2px",
                    backgroundColor: "white",
                    transform: menuOpen
                      ? "rotate(45deg) translateX(-1px) translateY(-7px)"
                      : "",
                    transition: "all .2s linear",
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Popover
        anchorEl={anchorEl}
        open={menuOpen}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleClose}
        sx={{ mt: 3, width: "100%" }}
        disablePortal
        elevation={3}
      >
        <Box
          sx={{
            width: {
              xs: "90vw",
              md: "60vw",
            },
            minHeight: 500,
            borderRadius: 3,
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Accordion
              expanded={openAccordion === 1}
              onChange={() => handleOpenAccordion(1)}
              sx={{
                backgroundColor: "transparent",
                backgroundImage: "none",
                boxShadow: 0,
                "&::before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                sx={{ p: 0 }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Contacto</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <ContactOpt
                  icon={<FacebookRoundedIcon />}
                  title="Facebook"
                  description="Conecta con nostros en facebook"
                />
                <ContactOpt
                  icon={<InstagramIcon />}
                  title="Instagram"
                  description="Mira imagenes y videos"
                />
                <ContactOpt
                  icon={<WhatsAppIcon />}
                  title="WhatsApp"
                  description="Envianos un mensaje"
                />
                <ContactOpt
                  icon={<AlternateEmailRoundedIcon />}
                  title="Email"
                  description="Solicitanos informacion"
                />{" "}
                <ContactOpt
                  icon={<PermPhoneMsgRoundedIcon />}
                  title="Teléfono"
                  description="Agenda una consulta"
                />
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={openAccordion === 2}
              onChange={() => handleOpenAccordion(2)}
              sx={{
                backgroundColor: "transparent",
                backgroundImage: "none",
                boxShadow: 0,
                borderBottom: 0,
                "&::before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                sx={{ p: 0, borderBottom: 0 }}
                id="panel1a-header"
              >
                <Typography>Soluciones</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0, borderBottom: 0 }}>
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
                <Box
                  sx={{
                    mt: 7,
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
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={openAccordion === 3}
              onChange={() => handleOpenAccordion(3)}
              sx={{
                backgroundColor: "transparent",
                backgroundImage: "none",
                boxShadow: 0,
                "&::before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                sx={{ p: 0 }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Catalogo</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <Grid container columnSpacing={1} rowSpacing={1}>
                  <Grid item xs={3}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "90px",
                        borderRadius: 2,
                        backgroundImage:
                          "url(https://cdn.pixabay.com/photo/2017/05/09/03/47/buildings-2297210_1280.jpg)",
                        backgroundPositionY: "50%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 2,
                          opacity: "0%",
                          transition: "all 200ms linear",
                          "&:hover": {
                            opacity: "100%",
                            backgroundColor: "#00000038",
                            backdropFilter: "blur(2px)",
                            transition: "all 200ms linear",
                          },
                        }}
                      >
                        <ImageSearchIcon />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "90px",
                        borderRadius: 2,
                        backgroundImage:
                          "url(https://cdn.pixabay.com/photo/2017/09/21/18/55/hildesheim-2772941_1280.jpg)",
                        backgroundPositionY: "50%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 2,
                          opacity: "0%",
                          transition: "all 200ms linear",
                          "&:hover": {
                            opacity: "100%",
                            backgroundColor: "#00000038",
                            backdropFilter: "blur(2px)",
                            transition: "all 200ms linear",
                          },
                        }}
                      >
                        <ImageSearchIcon />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "90px",
                        borderRadius: 2,
                        backgroundImage:
                          "url(https://cdn.pixabay.com/photo/2017/06/28/15/32/venice-2451047_1280.jpg)",
                        backgroundPositionY: "50%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 2,
                          opacity: "0%",
                          transition: "all 200ms linear",
                          "&:hover": {
                            opacity: "100%",
                            backgroundColor: "#00000038",
                            backdropFilter: "blur(2px)",
                            transition: "all 200ms linear",
                          },
                        }}
                      >
                        <ImageSearchIcon />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "90px",
                        borderRadius: 2,
                        backgroundImage:
                          "url(https://cdn.pixabay.com/photo/2018/01/21/01/46/architecture-3095716_1280.jpg)",
                        backgroundPositionY: "50%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 2,
                          opacity: "0%",
                          transition: "all 200ms linear",
                          "&:hover": {
                            opacity: "100%",
                            backgroundColor: "#00000038",
                            backdropFilter: "blur(2px)",
                            transition: "all 200ms linear",
                          },
                        }}
                      >
                        <ImageSearchIcon />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "90px",
                        borderRadius: 2,
                        backgroundImage:
                          "url(https://cdn.pixabay.com/photo/2016/10/21/14/50/szechenyi-chain-bridge-1758196_1280.jpg)",
                        backgroundPositionY: "50%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 2,
                          opacity: "0%",
                          transition: "all 200ms linear",
                          "&:hover": {
                            opacity: "100%",
                            backgroundColor: "#00000038",
                            backdropFilter: "blur(2px)",
                            transition: "all 200ms linear",
                          },
                        }}
                      >
                        <ImageSearchIcon />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Box
              sx={{
                mt: 2,
                backgroundImage: gradients.bluePink,
                height: "fit-content",
                borderRadius: 2.5,
                p: 0.1,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "background.default",
                  borderRadius: 2.5,
                  p: 2,
                  textAlign: "center",
                }}
              >
                <GradientText
                  fontSize={20}
                  gradient={gradients.bluePink}
                  animation={"none"}
                  fontWeight={500}
                  legend="Construcciones y acabados"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default NavbarMobile;
