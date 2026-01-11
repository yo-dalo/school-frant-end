import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Reel = () => {
  const videoRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    // Sabhi videos pause
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });
  };

  return (
    <div className="w-screen bg-main h-[80vh] py-12 px-10">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        onSlideChange={handleSlideChange}
        navigation={true}
        className="FULL"
      >
        <SwiperSlide className="max-w-[400px] overflow-hidden rounded-2xl max-h-full">
          <video
            ref={(el) => (videoRefs.current[0] = el)}
            className="FULL object-cover"
            src="/video/m.mp4"
            loop
            onMouseEnter={() => videoRefs.current[0]?.play()}
            onMouseLeave={() => videoRefs.current[0]?.pause()}
          />
        </SwiperSlide>

        <SwiperSlide className="max-w-[400px] overflow-hidden rounded-2xl max-h-full">
          <video
            ref={(el) => (videoRefs.current[1] = el)}
            className="FULL object-cover"
            src="/video/y.mp4"
            loop
            onMouseEnter={() => videoRefs.current[1]?.play()}
            onMouseLeave={() => videoRefs.current[1]?.pause()}
          />
        </SwiperSlide>

        <SwiperSlide className="max-w-[400px] overflow-hidden rounded-2xl max-h-full">
          <video
            ref={(el) => (videoRefs.current[2] = el)}
            className="FULL object-cover"
            src="/video/s.mp4"
            loop
            onMouseEnter={() => videoRefs.current[2]?.play()}
            onMouseLeave={() => videoRefs.current[2]?.pause()}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reel;
