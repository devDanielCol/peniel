import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";

import MenuHmw from "../../../Menu/Molecules/MenuHmw";

interface NavbarDeskopProps {
  window?: () => Window;
}

const NavbarMobile: FC<NavbarDeskopProps> = (props) => {
  const { window } = props;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
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
          backgroundColor: trigger ? "#00000080" : "transparent",
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
              <Button
                variant="outlined"
                sx={{
                  px: 1,
                  py: 0.5,
                  ml: 2,
                  color: "white",
                  borderColor: "white",
                  borderRadius: 2,
                  "&:hover": {
                    opacity: "70%",
                  },
                }}
              >
                Nosotros
              </Button>
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
              <MapsHomeWorkIcon sx={{ color: "white" }} />
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
              <Button
                onClick={handleClick}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography
                  component="div"
                  sx={{
                    width: "30px",
                    height: "2px",
                    backgroundColor: "white",
                    transform: menuOpen
                      ? "rotate(-45deg) translateX(-1px) translateY(7px)"
                      : "",
                    transition: "all .2s linear",
                  }}
                />
                <Typography
                  component="div"
                  sx={{
                    mt: 0.5,
                    width: "30px",
                    height: "2px",
                    opacity: menuOpen ? "0%" : "100%",
                    backgroundColor: "white",
                    transition: "all .2s linear",
                  }}
                />
                <Typography
                  component="div"
                  sx={{
                    mt: 0.5,
                    width: "30px",
                    height: "2px",
                    backgroundColor: "white",
                    transform: menuOpen
                      ? "rotate(45deg) translateX(-1px) translateY(-7px)"
                      : "",
                    transition: "all .2s linear",
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <MenuHmw onCloseFc={handleClose} anchorEl={anchorEl} open={menuOpen} />
    </>
  );
};

export default NavbarMobile;
