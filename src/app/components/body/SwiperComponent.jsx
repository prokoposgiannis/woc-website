// components/CarouselSwiper.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import RectangleBlock from "@/app/components/body/RectangleBlock";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CarouselSwiper = () => {
  return (
    <div className="w-full flex justify-center">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={20} // Space between slides
        slidesPerView={3} // Number of slides visible at once
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable pagination dots
        freeMode={true} // Allow free scrolling
        onSlideChange={() => console.log("Slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 6000, disableOnInteraction: true }} // Autoplay settings
        loop={true} // Disable infinite loop to scroll naturally
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // 1024: {
          //   slidesPerView: 3,
          //   spaceBetween: 20,
          // },
        }}
      >
        <SwiperSlide>
          <div className="h-fit flex justify-center items-center">
            <RectangleBlock imageSubtitle={"Telecomunications"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-fit flex justify-center items-center">
            <RectangleBlock imageSubtitle={"Streaming services"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-fit flex justify-center items-center">
            <RectangleBlock imageSubtitle={"Gaming"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-fit flex justify-center items-center">
            <RectangleBlock imageSubtitle={"Internet banking"} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselSwiper;
