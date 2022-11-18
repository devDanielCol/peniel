import { AppBar, Grid, Toolbar, useScrollTrigger } from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";

import MenuHmw from "../../../Menu/Molecules/MenuHmw";
import CallToActionBtn from "../../NavbarDeskop/Atoms/CallToActionBtns/CallToActionBtns";
import HmwButton from "../../../Global/HmwButton/HmwButton";

interface NavbarDeskopProps {
  window?: () => Window;
}

const NavbarMobile: FC<NavbarDeskopProps> = (props) => {
  const { window } = props;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
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

  return (
    <>
      <AppBar
        sx={{
          boxShadow: 0,
          transition: "all .2s linear",
          backgroundColor: trigger ? "custom.navbar" : "transparent",
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
              <CallToActionBtn />
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
              <MapsHomeWorkIcon sx={{ color: "text.primary" }} />
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
              <HmwButton onClick={handleClick} open={menuOpen} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <MenuHmw onCloseFc={handleClose} anchorEl={anchorEl} open={menuOpen} />
    </>
  );
};

export default NavbarMobile;
