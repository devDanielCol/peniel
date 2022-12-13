// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, Link, Typography } from "@mui/material";
import useTheme from "../../../util/hooks/useTheme";
import GradientText from "../../GradientText/GradientText";

const SlideServices = () => {
  const theme = useTheme();

  const slide = (
    <Box
      sx={{
        height: "260px",
        width: "260px",
        p: "36px",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "20px",
        boxShadow: "5px 5px 10px rgb(0 0 0 / 5%)",
        m: 1,
      }}
    >
      <GradientText fontSize={"1.4rem"} sx={{ fontWeight: 600 }}>
        Diseño de interiores
      </GradientText>
      <Typography sx={{ fontSize: "0.8rem", fontWeight: 600 }}>
        Calidad y atencion
      </Typography>
      <Typography sx={{ fontSize: "1.2rem", mt: 3 }}>
        Diseño de tu interior con la mejor practica, lo ultimo en tendecias
      </Typography>
      <Typography sx={{ mt: 3 }}>
        <Link>Cotizar</Link>
      </Typography>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={10}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
        </Swiper>
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={10}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
          <SwiperSlide>{slide}</SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default SlideServices;
