import React from 'react'

const PageTen = () => {
  return (


    <div className="w-screen overflow-hidden phone:min-h-[100vh] min-h-screen FC gap-8 bg-[linear-gradient(180deg,_#34495E_0%,_#ECF0F1_100%)]">

      <h1 className='main-text text-center phone:text-7xl phone:leading-[0.8]   leading-[0.9]'>CELEBRATING OUR ACADEMIC STAR</h1>

      <div className="w-full h-full phone:px-0 phone:gap-2   px-10 gap-10 grid  grid-cols-3 ">

{[1,2,3].map((e,i)=>(


        <div key={i} className="phone:min-h-[78vh] phone:relative   min-h-[50vw] ">

          <div className='w-full  phone:h-fit   #bg-[linear-gradient(179.96deg,_#E9EDEE_0.03%,_#70CF4B_84.18%)]    relative overflow-hidden h-[80%]'>

            {/* <div className=" w-[200%] h-[10vw] bg-[#bbb0]  z-40 rotate-[171deg]  absolute -bottom-[6vw] -left-[2vw]  "></div> */}


            <h4 className='text-3xl absolute top-8 z-50  left-8 '>20:00 | 23/08</h4>
            <img src="img/home/Vector 24.svg" className='FULL phone:object-cover  ' alt="" />
          </div>
          <div className='w-full FC overflow-hidden gap-3 py-3 h-[20%] '>
            <h3 className='text-4xl phone:text-xl phone:leading-4 font-bold '>HOANG NGUYEN</h3>
            <h5 className='text-xl phone:text-sm '>Tac gib Co Cach - Nuoi duog su sang tao tu niem tin cach</h5>

          </div>

        </div>

))}





      
      </div>







    </div>
  )
}

export default PageTen