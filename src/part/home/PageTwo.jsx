import React from 'react'
import { motion } from "framer-motion";
const PageTwo = () => {
  const texts = ["welcome", "Yaduvanshi Degree", "College"];
  return (
    <div className='w-screen  overflow-hidden h-min-screen '>
      <div className="w-full h-[90vh] flex flex-col items-center justify-center gap-4 overflow-visible phone:uppercase leading-[100.1px] bg-[linear-gradient(235.34deg,#ECF0F1_36.62%,#34495E_78.39%)]">
        {texts.map((text, idx) => (
          <motion.h2
            key={idx}
            className="main-text text-center phone:text-[6vw] w-full 
                     bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                     bg-clip-text text-transparent"
            whileHover={{
              scale: 1.2,
              rotate: 5,
              backgroundImage: "linear-gradient(90deg, #FACC15, #EF4444, #10B981)",
              textShadow: "0px 0px 10px rgba(0,0,0,0.3)"
            }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            {text}
          </motion.h2>
        ))}
      </div>

     <div className="w-full h-[90vh] py-9 bg-[linear-gradient(51deg,#ECF0F1_57.12%,#34495E_73.92%)] overflow-hidden">

        <div className="BT   gap-7 font-bold leading-tight  px-10">
          <h2 className='phone:none'>Welcome to Our School</h2>
          <hr className='w-full border-red-800' />
          <h2>Established
            in 19XX</h2>

        </div>





        <div className="BT phone:pt-6 flex-1 phone:flex-col-reverse phone:FC phone:nonea px-10 h-full">
          <div className=" text-3xl flex-1  phone:text-xl h-full center  leading-9 font-medium  ">
            <p>Our school provides quality education with modern classrooms, experienced teachers, and a student-focused learning environment. We aim to build strong values, discipline, and knowledge to prepare students for a bright future.</p>
          </div>
          <div className=" items-centerg justify-center phone:w-full phone:h-fit flex flex-col w-1/3 h-full">
            <h3 className='text-3xl font-semibold'>Updated on 2024</h3>
            <h1 className='text-8xl font-extrabold pr-96'>Our
              Vision.</h1>

            <h4 className='text-4xl'>Yaduvanshi Degree College</h4>

          </div>


        </div>








      </div>


    </div>
  )
}

export default PageTwo