import React from 'react'

const PageTen = () => {
  return (
    <div className="w-screen overflow-hidden min-h-screen flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 bg-[linear-gradient(180deg,_#34495E_0%,_#ECF0F1_100%)]">

      <h1 className='main-text text-center text-3xl sm:text-5xl lg:text-7xl leading-tight sm:leading-[0.9] lg:leading-[0.8]'>
        CELEBRATING OUR ACADEMIC STAR
      </h1>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

        {[1, 2, 3].map((e, i) => (
          <div key={i} className="min-h-[70vh] sm:min-h-[60vh] lg:min-h-[50vw] flex flex-col">

            <div className="w-full relative overflow-hidden h-[75%] sm:h-[78%] lg:h-[80%]">
              <h4 className='text-sm sm:text-lg lg:text-3xl absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 z-50'>
                20:00 | 23/08
              </h4>
              <img
                src="img/home/Vector 24.svg"
                className='w-full h-full object-cover'
                alt=""
              />
            </div>

            <div className='w-full flex flex-col items-center justify-center text-center gap-2 sm:gap-3 py-3 h-[25%] sm:h-[22%] lg:h-[20%]'>
              <h3 className='text-xl sm:text-2xl lg:text-4xl font-bold'>
                HOANG NGUYEN
              </h3>
              <h5 className='text-sm sm:text-base lg:text-xl'>
                Tac gib Co Cach - Nuoi duog su sang tao tu niem tin cach
              </h5>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default PageTen
