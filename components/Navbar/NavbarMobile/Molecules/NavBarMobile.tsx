import { AppBar, Avatar, Grid, Toolbar, useScrollTrigger } from "@mui/material";
import { FC, MouseEvent, useState } from "react";

import MenuHmw from "../../../Menu/Molecules/MenuHmw";
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
    threshold: 50,
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
          borderBottom: "solid 0.5px",
          borderBottomColor: trigger ? "#4e317e50" : "transparent",
        }}
      >
        <Toolbar>
          <Grid container sx={{ py: trigger ? 0.5 : 2 }}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Avatar
                src="/image/logo.png"
                sx={{
                  transition: "all .2s linear",
                  width: {
                    xs: trigger ? "50px" : "70px",
                    sm: trigger ? "40px" : "80px",
                  },
                  height: {
                    xs: trigger ? "50px" : "70px",
                    sm: trigger ? "40px" : "80px",
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={6}
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
