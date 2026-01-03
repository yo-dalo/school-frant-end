import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Reel = () => {
    const videoRefs = useRef([]);

    const handleSlideChange = (swiper) => {
        // Sabhi videos ko pause karo
        videoRefs.current.forEach((video) => {
            if (video) video.pause();
        });

        // Current slide ka video play karo
        const currentSlide = swiper.slides[swiper.activeIndex];
        const video = currentSlide.querySelector('video');
        if (video) {
            video.play().catch(() => { }); // catch for autoplay restrictions
        }
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
                onSwiper={handleSlideChange} // first slide play
                className="FULL"
            >

                <SwiperSlide className="max-w-[400px] overflow-hidden rounded-2xl max-h-full">
                    <video
                        ref={(el) => (videoRefs.current[1] = el)}
                        className="FULL object-cover"
                        src="/video/m.mp4"
                        loop
                    />
                </SwiperSlide>

                <SwiperSlide className="max-w-[400px] overflow-hidden rounded-2xl max-h-full">
                    <video
                        ref={(el) => (videoRefs.current[2] = el)}
                        className="FULL object-cover"
                        src="/video/y.mp4"
                        loop
                    />
                </SwiperSlide>
                <SwiperSlide className="max-w-[400px] overflow-hidden rounded-2xl max-h-full">
                    <video
                        ref={(el) => (videoRefs.current[3] = el)}
                        className="FULL object-cover"
                        src="/video/s.mp4"
                        loop
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Reel;
