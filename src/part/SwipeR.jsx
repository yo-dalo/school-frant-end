import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Yo from './utils/Yo';
import { useState } from 'react';




const SwipeR = () => {

    const [resData, setResData] = useState([])
    useEffect(() => {

        Yo.get("http://localhost:3000/api/client/poster").then((res) => {
            setResData(res?.data?.data)
            console.log(res?.data?.data)
        })



    }, [])


    return (
        <div className="w-screen z-50 h-[40vw] bg-main">
            <Swiper


                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

                className="w-full z-1 h-full">

                {

                    resData?.map((e, i) => (


                        <SwiperSlide key={i} className='FULL'>
                            <img className='object-contain  ' src={`uploads/${e?.Image}`} alt="" />
                        </SwiperSlide>

                    ))


                }







            </Swiper>




        </div>
    )
}

export default SwipeR