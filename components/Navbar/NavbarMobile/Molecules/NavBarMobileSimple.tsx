import { AppBar, Avatar, Grid, Toolbar } from "@mui/material";
import { FC, MouseEvent, useState } from "react";

import MenuHmw from "../../../Menu/Molecules/MenuHmw";
import HmwButton from "../../../Global/HmwButton/HmwButton";
import Link from "next/link";

interface NavbarMobileSimpleProps {
  window?: () => Window;
}

const NavbarMobileSimple: FC<NavbarMobileSimpleProps> = () => {
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

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          boxShadow: 0,
          transition: "all .2s linear",
          backgroundColor: "custom.navbar",
          display: {
            xs: "block",
            lg: "none",
          },
          borderBottom: "solid 0.5px",
        }}
      >
        <Toolbar>
          <Grid container>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Link href={"/"}>
                <Avatar
                  src="/image/logo.png"
                  sx={{
                    transition: "all .2s linear",
                    width: "40px",
                    height: "40px",
                  }}
                />
              </Link>
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
              <HmwButton
                onClick={handleClick}
                open={menuOpen}
                bgColor={"text.primary"}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <MenuHmw onCloseFc={handleClose} anchorEl={anchorEl} open={menuOpen} />
    </>
  );
};

export default NavbarMobileSimple;
