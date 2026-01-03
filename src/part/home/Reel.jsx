import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';

const Reel = () => {
    return (
        <>
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
                    className=" FULL"
                >
                    <SwiperSlide className='max-w-[400px] overflow-hidden rounded-2xl max-h-full '>
                        <img className=' FULL ' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>

                    <SwiperSlide className='max-w-[400px] overflow-hidden rounded-2xl max-h-full '>
                        <img className=' FULL ' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide> <SwiperSlide className='max-w-[400px] overflow-hidden rounded-2xl max-h-full '>
                        <img className=' FULL ' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide> <SwiperSlide className='max-w-[400px] overflow-hidden rounded-2xl max-h-full '>
                        <img className=' FULL ' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide> <SwiperSlide className='max-w-[400px] overflow-hidden rounded-2xl max-h-full '>
                        <img className=' FULL ' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
}

export default Reel




