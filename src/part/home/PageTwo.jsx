import React from 'react'

const PageTwo = () => {
  return (
    <div className='w-screen  overflow-hidden h-min-screen '>
      <div className="w-full h-[90vh]  overflow-visible phone:uppercase  center flex-col leading-[100.1px] bg-[linear-gradient(235.34deg,_#ECF0F1_36.62%,_#34495E_78.39%)]">
        <h2 className='main-text h-fit phone:text-6xl text-center w-full'>welcome</h2>
        <h2 className='main-text text-center  phone:text-7xl w-full'>Yaduvanshi Degree </h2>
        <h2 className='main-text h-fit text-center  phone:text-8xl w-full'>College</h2>



      </div>

      <div className="w-full h-[90vh]  py-9 bg-[linear-gradient(51deg,_#ECF0F1_57.12%,_#34495E_73.92%)] ">

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