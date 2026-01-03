import React from 'react'
import { useAuth } from "../../context/AuthContext"
import { Link } from 'react-router-dom';

const PageSix = () => {
  const { resNotification } = useAuth();
  return (
    <div className='page-6 w-screen h-screen py-10 bg-main'>

      <div className="center phone:px-0 phone:gap-1    px-8 gap-10">
        <hr className='w-full ' />
        <div className="whitespace-nowrap text-5xl">our moniters</div>
        <hr className='w-full' />

      </div>





      <div className="BT h-[100%] px-12 phone:px-3 phone:FC py-9 gap-11 ">
        <div className="w-full phone:grid-cols-1 phone:pt-10 phone:gap-16 phone:auto-rows-[30vw] grid grid-cols-5 auto-rows-[15vw] gap-1 h-full overflow-y-scroll place-items-center">


          {resNotification?.map((e, i) => (

            <Link to={`/notice/${e.Id}`} key={i} className=" py-9 phone:py-12 px-4 bg-white phone:w-full w-[15vw] relative   FC items-center phone:h-[35vw] h-[12vw]">
              <div style={{ background: Number(e?.Is_Important) ? "crimson" : "black" }} className="w-[80%] overflow-hidden   h-10 phone:text-3xl md:text-xl md:leading-[2.8rem]  text-2xl -top-4 -rotate-3 absolute  text-center font-bold bg-black text-white">
                {e?.Date}
              </div>

              <h2 className=" text-xl leading-4 font-black ">{e?.Name}
              </h2>
              <h4 className='text-xs py-2 leading-tight '>{e?.Title}
              </h4>


            </Link>
          ))}






        </div>

        <Link to={'/notice'} className="h-full phone:h-10 phone:w-full w-20 rounded-xl px-3 phone:py-2 phone:px-0 bg-white">
          <img src="img/x/Arrow.svg" className=' phone:rotate-90 phone:scale-[4]' alt="" />
        </Link>
      </div>













    </div>
  )
}

export default PageSix