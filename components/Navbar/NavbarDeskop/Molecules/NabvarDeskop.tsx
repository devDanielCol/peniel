import { AppBar, Toolbar, Box, useScrollTrigger, Avatar } from "@mui/material";
import MenuToolpit from "../Atoms/MenuToolpit/MenuToolpit";
import CallToActionBtns from "../Atoms/CallToActionBtns/CallToActionBtns";
import ContactItem from "../../../MenuContent/Contact/Molecules/ContactMenuItem";
import AboutUsMenuItem from "../../../MenuContent/Solutions/Molecules/AboutUsMenuItem";
import ThemeButton from "../../../ThemeCtrl/ThemeBtn/ThemeBtn";
import CatalogMenuItem from "../../../MenuContent/Catalog/Molecules/CatalogMenuItem";
import useTheme from "../../../../util/hooks/useTheme";

interface NavbarDeskopProps {
  window?: () => Window;
}

const NavbarDeskop = (props: NavbarDeskopProps) => {
  const { window } = props;
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });

  return (
    <>
      <AppBar
        sx={{
          boxShadow: 0,
          transition: "all .2s linear",
          // backdropFilter: trigger ? "blur(15px)" : "blur(0px)",
          backgroundColor: trigger ? "custom.navbar" : "transparent",
          backgroundImage: "none",
          display: {
            xs: "none",
            lg: "block",
          },
          borderBottomColor: trigger ? "#4e317e50" : "transparent",
          py: trigger ? 1 : 3,
          px: trigger ? 1 : 3,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              src="/image/logo.png"
              sx={{
                transition: "all .2s linear",
                width: trigger ? "50px" : "80px",
                height: trigger ? "50px" : "80px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              color: trigger ? theme.palette.custom.text : "white",
            }}
          >
            <MenuToolpit element={<ContactItem />} name="Contacto" />
            <MenuToolpit element={<AboutUsMenuItem />} name="Soluciones" />
            <MenuToolpit name="Catalogo" element={<CatalogMenuItem />} />
            <CallToActionBtns />
            <ThemeButton sx={{ ml: 2, color: "inherit" }} />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavbarDeskop;
