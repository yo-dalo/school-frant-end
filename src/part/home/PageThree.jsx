import React from 'react'

const PageThree = () => {
    return (
        <div className="w-screen phone:py-8 bg-mainOne  phone:grid-cols-1 overflow-hidden grid grid-cols-3 px-20 phone:px-0  gap-14 min-h-screen">

            <div className="  flex flex-col gap-3">
                <div className="w-full phone:h-96  h-2/3 bg-red-700">
                    <img src="https://i.pinimg.com/736x/2e/bb/49/2ebb49c2e9cee470cfbf140ff55908db.jpg" alt="" className="FULL object-cover" />
                </div>

                <h1 className="text-6xl leading-[3rem]">BUILDING BRIGHTER FUTURES</h1>

                <h6 className='w-1/2 phone:font-semibold leading-tight'>Admissions Open 2026-27</h6>

            </div>

            <div className=" flex flex-col gap-3 ">
                <div className="w-full h-2/4 phone:h-96  bg-red-700">
                    <img src="https://i.pinimg.com/736x/2e/bb/49/2ebb49c2e9cee470cfbf140ff55908db.jpg" alt="" className="FULL object-cover" />
                </div>
                <h2 className="h2 text-xl phone:text-5xl font-medium">Overview</h2>
                <h3 className=" text-lg phone:text-4xl ">Our College Journey</h3>
                <p className=" text-xs phone:text-xl phone:font-light phone:px-3">Our school is committed to providing a balanced and holistic education that focuses on academic excellence, discipline, and character development. With well-qualified teachers, modern classrooms, and a safe learning environment, we ensure that every child receives the care and guidance they need to grow and succeed.</p>
                <p className="text-xs phone:text-xl phone:font-light phone:px-3">We emphasize values, creativity, communication skills, and overall personality development. Through a variety of co-curricular and extra-curricular activities, students get opportunities to explore their interests and unlock their full potential.</p>
                <p className="text-xs phone:text-xl phone:font-light phone:px-3">Our goal is to build confident, responsible, and future-ready students who can excel in every field of life.</p>
            </div>

            <div className=" flex flex-col gap-3">
                <div className="w-full h-1/3 phone:h-96  bg-red-700">
                    <img  src="https://i.pinimg.com/736x/2e/bb/49/2ebb49c2e9cee470cfbf140ff55908db.jpg" alt="" className="FULL object-cover" />
                </div>
                <h1 className=" text-xl font-medium  phone:text-5xl">Why Choose Ydc</h1>

                <ol className='text-black phone:font-light  list-disc  pl-7 text-lg'>
                    <li>100% Placement Assistance</li>
                    <li>Highly Qualified & Experienced Faculty</li>
                    <li>Modern Labs & Smart Classrooms</li>
                    <li>Scholarship upto ₹2 Lakh</li>
                    <li>Sports & Cultural Excellence</li>
                    <li>Hostel & Transport Facility</li>
                    <li>NAAC/NIRF Accredited</li>
                    <li>Industry Tie-ups & Skill Development Programs</li>
                    <li>Safe & Green Campus</li>
                </ol>

                <p className="font-semibold phone:px-3 w-1/2">Admission Helpline:
                    <span className='font-normal'>+91-XXXXXXXXXX</span></p>



                <button className='w-24 phone:mx-3 h-10 rounded-md  phone:w-1/2 bg-red-500'>Apply Now </button>
            </div>

        </div>

    )
}

export default PageThree