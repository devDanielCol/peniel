import { useState } from "react";
import BannerPrincipal from "../components/BannerPrincipal/BannerPrincipal";
import Content from "../components/Layout/Content/General";
import ScrollTrigger from "../components/ScrollWindow/ScrollTrigger";
import isNavigator from "../util/helpers/isNavigator";
import LeftSectionGrid from "../components/Home/LeftSectionGrid/LeftSectionGrind";
import RightSectionGrid from "../components/Home/RightSectionGrid/RightSectionGrid";
import ServicesList from "../components/Home/ServicesList/ServicesList";
import OurClients from "../components/Home/OurClients/OurClients";
import OurWork from "../components/Home/OurWork/OurWork";
import EndPage from "../components/Home/EndPage/EndPage";

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
      <BannerPrincipal />
      <LeftSectionGrid scroll={scroll} />
      <RightSectionGrid scroll={scroll} />
      <OurClients />
      <OurWork />
      <EndPage />
      <ServicesList />
    </Content>
  );
}
