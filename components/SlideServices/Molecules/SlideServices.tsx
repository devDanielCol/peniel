// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../data/servicesList.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, SxProps } from "@mui/material";
import { FC } from "react";
import CardServices from "../Atoms/CardServices";
import LastCardServices from "../Atoms/LastCardServices";

interface SlideServicesProps {
  sx?: SxProps;
  slidesPerView: number;
}

const SlideServices: FC<SlideServicesProps> = ({ sx, slidesPerView }) => {
  return (
    <>
      <Box sx={sx}>
        <Swiper
          slidesPerView={slidesPerView}
          centeredSlides={true}
          spaceBetween={10}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {data.map(({ category, description, name }, key) => (
            <SwiperSlide key={key}>
              <CardServices
                title={name}
                description={description}
                summary={category}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <LastCardServices />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default SlideServices;
