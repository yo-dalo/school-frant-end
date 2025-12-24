import React from 'react'

const PageSix = () => {
  return (
    <div className='w-screen h-screen py-10 bg-main'>

      <div className="center  px-8 gap-10">
        <hr className='w-full' />
        <div className="whitespace-nowrap text-5xl">our moniters</div>
        <hr className='w-full' />

      </div>





      <div className="BT h-[100%] px-12 py-9 gap-11 ">
        <div className="w-full grid grid-cols-5 auto-rows-[15vw] gap-1 h-full overflow-y-scroll place-items-center">


          {[1, 1, 1, 1, 1, 111, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ,].map((e, i) => (

            <div key={i} className=" py-9 px-4 bg-white w-[15vw] relative  FC items-center h-[12vw]">
              <div className="w-[80%] h-10  text-3xl -top-4 -rotate-3 absolute text-center font-bold bg-black text-white">
                03:00 PM
              </div>

              <h2 className=" text-xl leading-4 font-black ">CULTURAL
                SHOWCASES</h2>
              <h4 className='text-xs py-2 leading-tight '>Exprience traditional dances
                art display, and storytelling</h4>


            </div>
          ))}






        </div>

        <div className="h-full w-20 rounded-xl px-3 bg-white">
          <img src="img/x/Arrow.svg" alt="" />
        </div>
      </div>













    </div>
  )
}

export default PageSix