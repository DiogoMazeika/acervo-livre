import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function ReactSwiper({ k, children }) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          // clickable: true,
        }}
        modules={[Pagination]}
      >
        {children.map((child, i) => {
          return (
            <SwiperSlide key={`slide_${k ?? 1}_${i}`}>{child}</SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
