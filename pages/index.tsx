import { useState } from "react";
import BannerPrincipal from "../components/BannerPrincipal/BannerPrincipal";
import Content from "../components/Layout/Content/General";
import ScrollTrigger from "../components/ScrollWindow/ScrollTrigger";
import isNavigator from "../util/helpers/isNavigator";
import LeftSectionGrid from "../components/Home/LeftSectionGrid/LeftSectionGrind";
import RightSectionGrid from "../components/Home/RightSectionGrid/RightSectionGrid";
import ServicesList from "../components/Home/ServicesList/ServicesList";
import GaleryPicture from "../components/GaleryPicture/Molecules/GaleryPicture";
import { Box, Dialog, IconButton } from "@mui/material";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import OurClients from "../components/Home/OurClients/OurClients";
import OurWork from "../components/Home/OurWork/OurWork";
import EndPage from "../components/Home/EndPage/EndPage";

export default function Home() {
  const currentScroll = (isNavigator() && self.scrollY) || 0;
  const [scroll, setScroll] = useState<number>(currentScroll);
  const [open, setOpen] = useState(false);

  ScrollTrigger({
    onEventScroll({ scrollY }) {
      setScroll(scrollY);
    },
  });

  return (
    <Content title="Home | Peniel construcciones">
      <BannerPrincipal />
      <LeftSectionGrid scroll={scroll} />
      <RightSectionGrid scroll={scroll} />
      <OurClients />
      <OurWork />
      <EndPage />
      <ServicesList />
      <Dialog
        open={open}
        maxWidth="md"
        fullWidth
        sx={{
          height: 700,
        }}
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            sx={{ position: "absolute", right: 0, zIndex: 100 }}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <DoNotDisturbOnIcon color="error" />
          </IconButton>
          <GaleryPicture />
        </Box>
      </Dialog>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <IconButton
          onClick={() => {
            setOpen(!open);
          }}
          sx={{
            backgroundColor: "lightgray",
            borderRadius: 2,
            p: 1.5,
            color: "gray",
          }}
        >
          Ver las fotos del catalogo
        </IconButton>
      </Box>
    </Content>
  );
}
