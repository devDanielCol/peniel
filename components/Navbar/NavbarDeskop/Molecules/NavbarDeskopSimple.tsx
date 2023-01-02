import { AppBar, Toolbar, Box, Avatar } from "@mui/material";
import MenuToolpit from "../Atoms/MenuToolpit/MenuToolpit";
import CallToActionBtns from "../Atoms/CallToActionBtns/CallToActionBtns";
import ContactItem from "../../../MenuContent/Contact/Molecules/ContactMenuItem";
import AboutUsMenuItem from "../../../MenuContent/Solutions/Molecules/AboutUsMenuItem";
import ThemeButton from "../../../ThemeCtrl/ThemeBtn/ThemeBtn";
import Pages from "../../../MenuContent/PagesList/Molecules/PagesList";
import useTheme from "../../../../util/hooks/useTheme";
import Link from "next/link";

const NavbarDeskopSimple = () => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          boxShadow: 0,
          backgroundColor: "custom.navbar",
          transition: "all .2s linear",
          display: {
            xs: "none",
            lg: "block",
          },
          p: 0,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href={"/"}>
            <Avatar
              src="/image/logo.png"
              sx={{
                transition: "all .2s linear",
                width: 50,
                height: 50,
              }}
            />
          </Link>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              color: theme.palette.custom.text,
            }}
          >
            <MenuToolpit name="Páginas" element={<Pages />} />
            <MenuToolpit name="Soluciones" element={<AboutUsMenuItem />} />
            <MenuToolpit name="Contacto" element={<ContactItem />} />
            <CallToActionBtns />
            <ThemeButton sx={{ ml: 2, color: "inherit" }} />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavbarDeskopSimple;
