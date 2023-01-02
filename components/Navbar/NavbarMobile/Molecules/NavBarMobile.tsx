import {
  AppBar,
  Avatar,
  Box,
  Grid,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { FC, MouseEvent, useState } from "react";

import MenuHmw from "../../../Menu/Molecules/MenuHmw";
import HmwButton from "../../../Global/HmwButton/HmwButton";
import Link from "next/link";

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
                      pr: trigger ? 0 : 0.75,
                      left: trigger ? 0 : -35,
                      overflow: trigger ? "initial" : "hidden",
                      borderBottomRightRadius: "100%",
                      borderTopRightRadius: 200,
                    }}
                  >
                    <Box
                      sx={{
                        pr: trigger ? 0 : 1,
                        pb: trigger ? 0 : 0.3,
                        bgcolor: trigger ? "transparent" : "#ffea00",
                        overflow: trigger ? "initial" : "hidden",
                        borderBottomRightRadius: "100%",
                        borderTopRightRadius: 200,
                      }}
                    >
                      <Box
                        sx={{
                          pl: trigger ? 0 : 6,
                          pr: trigger ? 0 : 3,
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
                            width: {
                              xs: trigger ? "40px" : "70px",
                              md: trigger ? "50px" : "100px",
                            },
                            height: {
                              xs: trigger ? "40px" : "80px",
                              md: trigger ? "50px" : "100px",
                            },
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
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
                bgColor={trigger ? "text.primary" : "white"}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <MenuHmw onCloseFc={handleClose} anchorEl={anchorEl} open={menuOpen} />
    </>
  );
};

export default NavbarMobile;
