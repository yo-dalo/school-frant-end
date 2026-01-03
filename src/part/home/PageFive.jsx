import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAuth } from "../../context/AuthContext"
// Import Swiper styles

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PageFive = () => {
    const { resMsg } = useAuth();
    return (

        /* Desktop - 14 */





        <div className="w-screen overflow-hidden phone:px-0 px-10 py-10 FC bg-[linear-gradient(232.66deg,_#ECF0F1_58.64%,_#34495E_82.92%)] phone:gap-0 gap-10 min-h-screen">

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


                className="w-full md:min-h-[110vh] md:h-fit phone:min-h-[130vh]  h-[41vw]">

                {
                    resMsg?.map((e, i) => (


                        <SwiperSlide key={i} className='FULL  FC gap-6 '>
                            <>

                                <div className="flex-1">

                                    <div className="BT phone:FC md:FC phone:overflow-hidden gap-10 FULL">
                                        <div className="  md:w-full phone:w-full w-1/2 h-full">
                                            <img className='object-cover' src={`uploads/${e?.Image}`} alt="i" />

                                        </div>
                                        <div className="w-1/2 phone:w-full md:w-full FC gap-3 p-3 h-full">
                                            <h3 className="text-xl">INTEODUTION</h3>
                                            <h1 className="text-8xl md:text-7xl phone:text-7xl phone:leading-[0.9] font-bold leading-[0.8]">{e.Name}</h1>

                                            <p className="pr-20 phone:text-xl phone:font-light phone:pr-0">{e?.Description}</p>

                                        </div>

                                    </div>



                                </div>

                                <div className="w-full phone:justify-between px-3  EV   phone:h-[20vw] h-[3vw]">
                                    <div className="text-xs">
                                        <h4>Name of Project</h4>
                                        <h4>{e?.Roll}</h4>
                                    </div>

                                    <div className="text-xs">
                                        <h4>Name of Project</h4>
                                        <h4>Digital Mareting Portfolio</h4>
                                    </div>
                                    <div className="text-xs">
                                        <h4>Name of Project</h4>
                                        <h4>Digital Mareting Portfolio</h4>
                                    </div>

                                </div>
                            </>
                        </SwiperSlide>

                    ))


                }







            </Swiper>







            <div className=" px-72 phone:px-0 md:px-0   w-full">

                <h1 className='main-text phone:text-8xl md:text-7xl md:leading-[0.8]  leading-[0.9] text-center '>NEWS & EVENTS</h1>

            </div>



        </div>








    )
}

export default PageFive
