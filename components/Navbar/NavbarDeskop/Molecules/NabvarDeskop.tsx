import { AppBar, Toolbar, Box, useScrollTrigger, Avatar } from "@mui/material";
import MenuToolpit from "../Atoms/MenuToolpit/MenuToolpit";
import CallToActionBtns from "../Atoms/CallToActionBtns/CallToActionBtns";
import ContactItem from "../../../MenuContent/Contact/Molecules/ContactMenuItem";
import AboutUsMenuItem from "../../../MenuContent/Solutions/Molecules/AboutUsMenuItem";
import ThemeButton from "../../../ThemeCtrl/ThemeBtn/ThemeBtn";
import Pages from "../../../MenuContent/PagesList/Molecules/PagesList";
import useTheme from "../../../../util/hooks/useTheme";
import Link from "next/link";

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
          px: trigger ? 1 : 2,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href={"/"}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: trigger ? "initial" : "absolute",
                  bgcolor: trigger ? "transparent" : "#ffa700",
                  pr: trigger ? 0 : 1,
                  left: trigger ? 0 : -35,
                  overflow: trigger ? "initial" : "hidden",
                  borderBottomRightRadius: "100%",
                  borderTopRightRadius: 200,
                }}
              >
                <Box
                  sx={{
                    pr: trigger ? 0 : 2,
                    pb: trigger ? 0 : 0.5,
                    bgcolor: trigger ? "transparent" : "#ffea00",
                    overflow: trigger ? "initial" : "hidden",
                    borderBottomRightRadius: "100%",
                    borderTopRightRadius: 200,
                  }}
                >
                  <Box
                    sx={{
                      pl: trigger ? 0 : 3,
                      pr: trigger ? 0 : 6,
                      pt: trigger ? 0 : 8,
                      pb: trigger ? 0 : 3,
                      bgcolor: trigger ? "inherit" : "white",
                      left: trigger ? 0 : -35,
                      overflow: trigger ? "initial" : "hidden",
                      borderBottomRightRadius: "100%",
                      borderTopRightRadius: 200,
                    }}
                  >
                    <Avatar
                      src="/image/logo.png"
                      sx={{
                        transition: "all .2s linear",
                        width: trigger ? "50px" : "100px",
                        height: trigger ? "50px" : "100px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              color: trigger ? theme.palette.custom.text : "white",
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
export default NavbarDeskop;
