import { Box } from "@mui/material";
import { useState } from "react";
import OpacityScroll from "../components/ScrollWindow/componets/OpacityScroll";
import BannerPrincipal from "../components/BannerPrincipal/BannerPrincipal";
import Content from "../components/Layout/Content/General";
import ScrollTrigger from "../components/ScrollWindow/ScrollTrigger";
import isNavigator from "../util/helpers/isNavigator";

export default function Home() {
  const currentScroll = (isNavigator() && self.scrollY) || 0;
  const [scroll, setScroll] = useState<number>(currentScroll);

  ScrollTrigger({
    onEventScroll({ scrollY }) {
      setScroll(scrollY);
    },
  });

  return (
    <Content title="Home | Peniel construcciones">
      <>
        <BannerPrincipal />
        <OpacityScroll {...{ scroll }}>
          <Box sx={{ width: "100%", height: "100vh", bgcolor: "red" }}></Box>
        </OpacityScroll>
        <Box sx={{ width: "100%", height: "100vh" }}></Box>
      </>
    </Content>
  );
}
