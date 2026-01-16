import React from 'react'

const Mission = () => {
    return (

        <div className='w-screen overflow-hidden min-h-screen py-6 bg-[linear-gradient(59.79deg,_#ECF0F1_67.3%,_#34495E_86.1%)]'>

            <div className="center  px-8 gap-10">
                <hr className='w-full' />
                <div className="whitespace-nowrap none text-5xl">our moniters</div>
                <hr className='w-full' />

            </div>


            <div className="w-screen grid grid-cols-3 phone:gap-1 phone:px-3  phone:min-h-[70vh] gap-14 px-12 py-9 min-h-[50vw] ">

                <div className="FC phone:gap-2">
                    <h1 className="text-7xl font-bold phone:text-3xl  phone:leading-6 leading-[0.9]">Vision & Mission</h1>
                    <div className="w-full  h-full bg-slate-800">
                        <img className='FULL object-cover' src="img/image/d2.jpg" alt="" />
                    </div>


                </div>
                <div className=" FC gap-3 phone:pt-6 pt-16">
                    <div className="BT w-full h-28  gap-3">
                        <div className="FULL bg-slate-500"> <img className='object-cover' src="img/image/x1.jpeg" alt="" /></div>
                        <div className="FULL bg-gray-600"> <img className='object-cover' src="img/image/a10.jpeg" alt="" /></div>
                    </div>

                    <div className="w-full h-full ">
                        <img className='object-cover' src="img/image/d2.jpg" alt="" />
                    </div>



                </div>
                <div className=" pt-1w6 phone:pt-6">
                    <img className='object-cover' src="img/image/d3.jpg" alt="" />
                </div>


            </div>


            <p className='w-4/5 font-semibold phone:leading-5 leading-tight  phone:text-xl phone:w-full phone:px-3 phone:text-left text-center m-auto text-2xl'>Technology is reshaping the education system by opening new learning opportunities for college students and faculty. Modern digital tools—such as virtual classrooms, smart learning platforms, and AI-based support—make education more flexible and accessible. Students can attend classes from anywhere, revisit recorded lectures, and explore learning resources far beyond traditional books. Faculty members also benefit through advanced tools that help track performance, personalize teaching, and stay connected with learners. In today’s colleges, technology boosts creativity through digital projects, presentations, and collaborative assignments. Overall, the integration of technology is building a smarter, more connected, and efficient academic environment. As innovation continues, the future of college education will become even more engaging, adaptive, and inclusive for every student.</p>








        </div>




    )
}

export default Mission