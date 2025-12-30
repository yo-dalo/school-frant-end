import React from 'react'
import { useAuth } from "../../context/AuthContext"
const PageEleven = () => {
  const { resToper } = useAuth();
  return (
    <div className="w-screen   overflow-hidden h-fit  center  ">


      <div className='w-screen BT md:gap-10 md:FC md:h-fit phone:h-screen phone:FC bg-main  h-[450px]'>
        <div className="w-[1162px] md:w-full phone:w-full  phone:gap-4  pl-3 pr-2 center gap-9 h-full ">
          <div className=" w-[20vw] md:w-[70vw] phone:w-[70vw] bg-mainOne h-[40vh] rounded-xl ">

          </div>

          <div className="FC phone:px-2 justify-center phone:h-full py-10 phone:py-0   phone:items-start items-end">

            <div className="">
              <h2 className='text-4xl font-bold'>PRITA</h2>
              <h4>D/O SH kuldeep</h4>

            </div>


            <h1 className='text-[25vw] phone:text-[40vw] phone:translate-x-0 md:-translate-x-[100px]  phone:translate-y-0 -translate-x-[120px] translate-y-[1rem]  relative  phone:leading-[1] leading-[0.5]'> <span className='text-2xl right-[1px] -top-[25px]  md:right-[2px]  phone:right-[2px] phone:top-[15px] px-0 text-red-600 absolute'>st</span>1  </h1>

            <h2 className='text-2xl  leading-6  phone:w-full  w-[58%]'>Position in Univarsty </h2>






          </div>


        </div>



        <div className="center justify-start overflow-x-scroll   h-full w-full ">
          {resToper.map((e, i) => (

            <div key={i} className="min-w-[205px] md:min-w-[205px] md:py-10 phone:min-w-[51vw]  gap-4 FC justify-center px-3 items-center text-5rem">
              {/* <h1 className='text-8xl w-full relative font-bold '>{e.Rank} <span className="absolute text-sm top-1 right-16">st</span>  <span className="absolute text-sm bottom-0 font-normal  w-24 -right-6 leading-4  "> Position in Univarsty </span></h1> */}

              <h1 className="relative inline-block mr-9 text-8xl font-bold">
                {e.Rank}
                <span className="absolute text-sm top-1 -right-6">st</span>
                <span className="absolute text-sm bottom-0 -right-28 font-normal leading-4 w-24">
                  Position in University
                </span>
              </h1>




              <div className="w-full h-[15vw] phone:h-[35vw]  rounded-lg bg-mainOne"></div>

              <div className=" w-full text-center leading-5">
                <h2 className='font-bold text-2xl'>{e?.Student_Name}</h2>
                <h4>{e.Gender === "male" ? "S/o" : "D/o"} {e.Father_name}</h4>

              </div>








            </div>


          ))}





        </div>

      </div>

























    </div>
  )
}

export default PageEleven