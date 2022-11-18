import { Popover, Box, Grid } from "@mui/material";
import gradients from "../../../styles/colors/gradients";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import GradientText from "../../GradientText/GradientText";
import { catalogImg } from "../../MenuContent/Catalog/Molecules/CatalogMenuItem";
import ContactOpt from "../../MenuContent/Contact/Atoms/ContactOpt";
import { socialMedia } from "../../MenuContent/Contact/Molecules/ContactMenuItem";
import AboutUsOpt from "../../MenuContent/Solutions/Atoms/AboutUsOpt";
import ListServices from "../../MenuContent/Solutions/Atoms/ListServices";
import AccordionMenuItem from "../Atoms/Accordion";
import useTheme from "../../../util/hooks/useTheme";

interface IMenuHmwProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onCloseFc(): void;
}

const MenuHmw = ({ open, anchorEl, onCloseFc }: IMenuHmwProps) => {
  const theme = useTheme();

  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        mt: 3,
        width: "100%",
        display: {
          md: "block",
          lg: "none",
        },
      }}
      disablePortal
      elevation={3}
      onClose={onCloseFc}
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
          <AccordionMenuItem sumary={"Contacto"}>
            <>
              {socialMedia.map(({ name, description, icon }, i) => (
                <ContactOpt
                  key={i}
                  icon={icon}
                  title={name}
                  description={description}
                />
              ))}
            </>
          </AccordionMenuItem>
          <AccordionMenuItem sumary={"Soluciones"}>
            <>
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
                  width: "100%",
                  backgroundImage: "url(./image/edificios.png)",
                  backgroundPositionY: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: 80,
                  borderRadius: 2,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                }}
              ></Box>
            </>
          </AccordionMenuItem>
          <AccordionMenuItem sumary={"Catalogo"}>
            <Grid container columnSpacing={1} rowSpacing={1}>
              {catalogImg.map(({ columns, img }, i) => (
                <Grid key={i} item xs={columns}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "90px",
                      borderRadius: 2,
                      backgroundImage: `url(${img})`,
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
                      <ImageSearchIcon sx={{ color: "text.primary" }} />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </AccordionMenuItem>
        </Box>
        <Box
          sx={{
            mt: 2,
            backgroundImage: gradients.bluePink,
            height: "fit-content",
            backgroundColor: "black",
            borderRadius: 2.5,
            p: 0.1,
          }}
        >
          <Box
            sx={{
              borderRadius: 2.5,
              p: 2,
              textAlign: "center",
              backgroundColor: theme.palette.background.paper,
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
    </Popover>
  );
};

export default MenuHmw;
