import { AppBar, Toolbar, Box } from "@mui/material";
import { Container } from "@mui/system";

import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import MenuToolpit from "../Atoms/MenuToolpit/MenuToolpit";
import CallToActionBtns from "../Atoms/CallToActionBtns/CallToActionBtns";
import ContactItem from "../../../MenuDeskopOpts/Contact/Molecules/ContactMenuItem";
import AboutUsMenuItem from "../../../MenuDeskopOpts/AboutUs/Molecules/AboutUsMenuItem";

const Navbar = () => {
  return (
    <>
      <AppBar sx={{ boxShadow: 0, backgroundColor: "transparent" }}>
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: "flex", pt: 2 }}>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                color: "white",
                alignItems: "center",
              }}
            >
              <MapsHomeWorkIcon />
              <MenuToolpit element={<ContactItem />} name="Contacto" />
              <MenuToolpit element={<AboutUsMenuItem />} name="Soluciones" />
            </Box>
            <Box
              sx={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
            >
              <CallToActionBtns />
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
