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
import { Box, Dialog, DialogTitle, IconButton } from "@mui/material";
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
      <BannerPrincipal />
      <LeftSectionGrid scroll={scroll} />
      <RightSectionGrid scroll={scroll} />
      <BgScrollMove scroll={scroll} />
      <BannerInView />
      <ServicesList />
      <Dialog open={open} maxWidth="lg">
        <DialogTitle sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={() => {
              setOpen(!open);
            }}
          >
            <DoNotDisturbOnIcon color="error" />
          </IconButton>
        </DialogTitle>
        <Box>
          <GaleryPicture />
        </Box>
      </Dialog>
      <IconButton
        onClick={() => {
          setOpen(!open);
        }}
      >
        <DoNotDisturbOnIcon color="error" />
      </IconButton>
    </Content>
  );
}
