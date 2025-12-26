import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



import { Navigation } from 'swiper/modules';

const SwipeR = () => {
    return (
        <div className="w-screen z-50 h-[40vw] bg-main">
            <Swiper navigation={true}  modules={[Navigation]} className="w-full z-1 h-full">

                {
                    [
                        "img/swiper/swiper1.jpeg",
                        "img/swiper/swiper1.jpeg",
                    ].map((e, i) => (


                        <SwiperSlide key={i} className='FULL'>
                            <img className='object-contain  ' src={e} alt="" />
                        </SwiperSlide>

                    ))


                }







            </Swiper>




        </div>
    )
}

export default SwipeR