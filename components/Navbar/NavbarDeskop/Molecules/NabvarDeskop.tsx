import { AppBar, Toolbar, Box, useScrollTrigger } from "@mui/material";
import { Container } from "@mui/system";

import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import MenuToolpit from "../Atoms/MenuToolpit/MenuToolpit";
import CallToActionBtns from "../Atoms/CallToActionBtns/CallToActionBtns";
import ContactItem from "../../../MenuContent/Contact/Molecules/ContactMenuItem";
import AboutUsMenuItem from "../../../MenuContent/Solutions/Molecules/AboutUsMenuItem";
import ThemeButton from "../../../ThemeCtrl/ThemeBtn/ThemeBtn";

interface NavbarDeskopProps {
  window?: () => Window;
}

const NavbarDeskop = (props: NavbarDeskopProps) => {
  const { window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return (
    <>
      <AppBar
        sx={{
          boxShadow: 0,
          transition: "all .2s linear",
          backdropFilter: trigger ? "blur(15px)" : "blur(0px)",
          backgroundColor: trigger ? "#00000080" : "transparent",
          backgroundImage: "none",
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: "flex", py: 2 }}>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                color: "white",
                alignItems: "center",
              }}
            >
              <MapsHomeWorkIcon sx={{ color: "white" }} />
              <MenuToolpit element={<ContactItem />} name="Contacto" />
              <MenuToolpit element={<AboutUsMenuItem />} name="Soluciones" />
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <CallToActionBtns />
              <ThemeButton />
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavbarDeskop;
