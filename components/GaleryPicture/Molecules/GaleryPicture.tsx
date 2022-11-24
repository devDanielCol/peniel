// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";

export default function GaleryPicture() {
  return (
    <>
      <Swiper
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Box
            sx={{
              height: "80vh",
              backgroundImage: "url(/image/home2.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              height: "500px",
              backgroundImage: "url(/image/home3.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Box
            sx={{
              height: "80vh",
              backgroundImage: "url(/image/home2.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Box
            sx={{
              height: "80vh",
              backgroundImage: "url(/image/home2.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Box
            sx={{
              height: "80vh",
              backgroundImage: "url(/image/home2.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Box
            sx={{
              height: "80vh",
              backgroundImage: "url(/image/home2.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Box
            sx={{
              height: "80vh",
              backgroundImage: "url(/image/home2.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Box
            sx={{
              height: "80vh",
              backgroundImage: "url(/image/home2.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Box
            sx={{
              height: "80vh",
              backgroundImage: "url(/image/home2.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
