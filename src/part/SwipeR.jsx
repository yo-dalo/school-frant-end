import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Yo from './utils/Yo';
import { useState } from 'react';




const SwipeR = () => {

    const [resData, setResData] = useState([])
    const [damoData, setDamoData] = useState([{ Image: 'img/swiper/swiper1.jpeg' }, { Image: 'img/swiper/swiper2.jpeg' }])

    useEffect(() => {

        Yo.get("http://localhost:3000/api/client/poster").then((res) => {
            setResData(res?.data?.data || [])

        })



    }, [])


    return (
        <div className="w-full z-50 h-[40vw] bg-main">
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

                    resData.length ?
                        resData?.map((e, i) => (
                            <SwiperSlide key={i} className='FULL'>
                                <Link to={e.Url}>
                                    <img className='object-contain' src={`uploads/${e?.Image}`} alt={`uploads/${e?.Image}`} />
                                </Link>
                            </SwiperSlide>
                        )) : damoData?.map((e, i) => (
                            <SwiperSlide key={i} className='FULL'>
                                <Link to={e.Url}>
                                    <img className='object-contain' src={`${e?.Image}`} alt={`uploads/${e?.Image}`} />
                                </Link>
                            </SwiperSlide>
                        ))
                }







            </Swiper>




        </div>
    )
}

export default SwipeR