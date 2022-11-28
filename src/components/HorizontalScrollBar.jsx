import { Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  return (
    <Swiper
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      breakpoints={{
        640: {
          // width: 576,
          slidesPerView: 1,
        },
        768: {
          // width: 768,
          slidesPerView: 2,
        },
        1000: {
          // width: 768,
          slidesPerView: 3,
        },
      }}
      style={{
        "--swiper-pagination-color": "#ff1212",
        "--swiper-navigation-color": "#ff1212",
      }}
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          className="mySlide"
        >
          {isBodyPart ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <Stack alignItems="center" justifyContent="center">
              <ExerciseCard exercise={item} />
            </Stack>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HorizontalScrollBar;
