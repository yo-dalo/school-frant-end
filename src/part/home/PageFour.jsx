import React from 'react'

const PageFour = () => {

    const data = [
        {
            tag: "STUDENT///",
            count: "3000+",
            title: "We offer design that",
            desc1: "works for you - Our studio designs interiors with functionality and aesthetics in mind.",
            desc2: "Our diverse student community brings energy, creativity, and enthusiasm to campus life. They actively participate in academics, cultural events, and extracurricular activities. Every student is encouraged to grow intellectually and personally."
        },
        {
            tag: "FACULTY///",
            count: "150+",
            title: "Experienced Faculty",
            desc1: "Our faculty members are highly qualified and dedicated to delivering quality education.",
            desc2: "They mentor students, guide research, and contribute to innovation through modern teaching methods and practical exposure."
        },
        {
            tag: "PROGRAMS///",
            count: "50+",
            title: "Innovative Programs",
            desc1: "We provide industry-focused programs designed to meet current market demands.",
            desc2: "Our curriculum encourages creativity, critical thinking, and hands-on learning experiences."
        }
    ]

    return (

        <div className="w-full overflow-hidden min-h-screen bg-[linear-gradient(67.33deg,_#ECF0F1_67.01%,_#2C3E50_77.04%,_#2C3E50_82.99%)]">

            <h1 className='main-text bg-[linear-gradient(21.95deg,_#000000_6.31%,_#FFFFFF_79.42%)] phone:text-7xl md:text-7xl text-center py-4 leading-[0.9]'>
                OUR JOURNEY HIGHLIGHTS
            </h1>

            <h3 className="text-center phone:text-2xl md:text-2xl phone:text-left phone:leading-7 phone:px-3 px-10 text-3xl pb-28 leading-8 font-semibold">
                Our college provides quality education with a focus on holistic development. Dedicated faculty, modern facilities, and innovative programs create an engaging environment that nurtures learning, creativity, and growth for every student.
            </h3>

            <div className="flex gap-28 md:gap-0 phone:gap-0 flex-col md:px-4 px-32 phone:px-3">

                {data.map((item, i) => (

                    <div key={i} className="w-full phone:FC phone:justify-start BT relative phone:relative gap-10 md:gap-5 phone:gap-5 border-t-4 border-black md:min-h-[200px] phone:min-h-[150vw] h-40">

                        <div className='-top-10 phone:-top-10 phone:left-0 md:-top-10 md:left-0 font-medium bg-black text-white px-9 pl-20 py-1 absolute'>
                            {item.tag}
                        </div>

                        <div className="w-1/2 phone:w-full center phone:h-fit h-full">
                            <h1 className='text-9xl hover:scale-125 duration-200 md:text-7xl'>
                                {item.count}
                            </h1>
                        </div>

                        <div className="w-1/2 phone:w-full phone:text-xl gap-2 flex flex-col text-xs">

                            <p className="phone:font-light">
                                <span className='font-medium'>{item.title}</span>: {item.desc1}
                            </p>

                            <p className="phone:font-light">
                                {item.desc2}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    )
}

export default PageFour