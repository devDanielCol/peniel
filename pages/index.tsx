import { useState } from "react";
import BannerPrincipal from "../components/BannerPrincipal/BannerPrincipal";
import Content from "../components/Layout/Content/General";
import ScrollTrigger from "../components/ScrollWindow/ScrollTrigger";
import isNavigator from "../util/helpers/isNavigator";
import BannerInView from "../components/BannerInView/Molecules/BannerInView";
import LeftSectionGrid from "../components/Home/LeftSectionGrid/LeftSectionGrind";
import RightSectionGrid from "../components/Home/RightSectionGrid/RightSectionGrid";
import ServicesList from "../components/Home/ServicesList/ServicesList";
import BgScrollMove from "../components/Home/BgScrollMove/BgScrollMove";
import GaleryPicture from "../components/GaleryPicture/Molecules/GaleryPicture";
import { Box, Dialog, IconButton } from "@mui/material";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";

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
      <Box sx={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}>
        <BannerPrincipal />
      </Box>
      <Box sx={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}>
        <LeftSectionGrid scroll={scroll} />
      </Box>
      <Box sx={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}>
        <RightSectionGrid scroll={scroll} />
      </Box>
      <Box sx={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}>
        <BgScrollMove scroll={scroll} />
      </Box>
      <BannerInView />
      <Box sx={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}>
        <ServicesList />
      </Box>

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
