import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



import { Navigation } from 'swiper/modules';

const PageFive = () => {
    return (

        /* Desktop - 14 */





        <div className="w-screen px-10 py-10 FC bg-[linear-gradient(232.66deg,_#ECF0F1_58.64%,_#34495E_82.92%)] gap-10 min-h-screen">

            <Swiper navigation={true} modules={[Navigation]} className="w-full   h-[41vw]">

                {
                    [
                        "img/swiper/swiper1.jpeg",
                        "img/swiper/swiper1.jpeg",
                    ].map((e, i) => (


                        <SwiperSlide key={i} className='FULL FC gap-6'>
                            <>

                                <div className="flex-1">

                                    <div className="BT gap-10 FULL">
                                        <div className="  w-1/2 h-full">
                                            <img className='object-cover' src="img/home/bd.png" alt="" />

                                        </div>
                                        <div className="w-1/2  FC gap-3 p-3 h-full">
                                            <h3 className="text-xl">INTEODUTION</h3>
                                            <h1 className="text-8xl font-bold leading-[0.8]">RAO BAHADUR SINGH</h1>

                                            <p className="pr-20">Technology has transformed the modern education system by creating new opportunities for both students and teachers. Digital tools such as online classrooms, interactive learning platforms, and AI-powered assistants have made learning more flexible and accessible than</p>

                                        </div>

                                    </div>



                                </div>

                                <div className="w-full EV h-[3vw]">
                                    <div className="text-xs">
                                        <h4>Name of Project</h4>
                                        <h4>Digital Mareting Portfolio</h4>
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







            <div className=" px-72 w-full">

                <h1 className='main-text leading-[0.9] text-center '>NEWS & EVENTS</h1>

            </div>



        </div>








    )
}

export default PageFive
