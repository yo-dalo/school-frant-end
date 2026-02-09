import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAuth } from "../../context/AuthContext"
// Import Swiper styles

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Moniter = () => {
    const { resMsg } = useAuth();
    return (

        /* Desktop - 14 */





        <div className="w-full overflow-hidden phone:px-0 px-10 py-10 FC bg-[linear-gradient(232.66deg,_#ECF0F1_58.64%,_#34495E_82.92%)] phone:gap-0 gap-10 min-h-screen">
            <div className="center  px-8 gap-10">
                <hr className='w-full border-main' />
                <div className="whitespace-nowrap  text-5xl">Our Moniters</div>
                <hr className='w-full  border-main' />

            </div>

            <Swiper

                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}


                className="w-full md:min-h-[110vh] md:h-fit phone:min-h-[130vh]#  h-[41vw]">

                {
                    resMsg?.map((e, i) => (


                        <SwiperSlide key={i} className='FULL'>
                            <div className='flex phone:flex-col phone:min-w-full items-start FULL'>
                                <div className='w-[30vw] min-w-[30vw] px-7 phone:min-w-full phone:h-60  h-[30vw]'>
                                    <img className='object-cover phone:object-contain FULL' src={`uploads/${e?.Image}`} alt="i" />
                                </div>







                                <div className='h-full flex-1  px-7 py-7'>

                                    <h3 className="text-2xl italic text-pink-800 ">{e.Roll} <span className='w-40 block bg-slate-100'><hr className='max-w-full bg-orange-400 inline-blockf border-main border-xl' /></span></h3>
                                    <h1 className="text-8xl md:text-7xl py-8 phone:text-7xl phone:leading-[0.9] font-bold leading-[0.8]">{e.Name}</h1>

                                    <p className="pr-20 phone:text-xl phone:font-light phone:pr-0">{e?.Description}</p>


                                </div>



                            </div>
                        </SwiperSlide>

                    ))


                }







            </Swiper>







            <div className=" px-72 phone:px-0 md:px-0   w-full">

                <h1 className='main-text bg-[linear-gradient(81.95deg,_#000000_76.31%,_#FFFFFF_79.42%)] phone:text-8xl md:text-7xl md:leading-[0.8]  leading-[0.9] text-center '>NEWS & EVENTS</h1>

            </div>



        </div>








    )
}

export default Moniter
