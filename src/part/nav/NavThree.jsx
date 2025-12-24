import React from 'react'

export const NavThree = () => {
    return (
        <div className='w-screen BT   px-[4vw] h-10 bg-main '>

            {
                [
                    'Home ',
                    'About Us',
                    'Why Only YDC',
                    'Admission ',
                    'Activities',
                    'Achievements',
                    'Academics',
                    'Facilities',
                    'Faculty',
                    'Collaboration',
                    'ydc Campuses ',
                    'Contact US ',
                ]




                    .map((e, i) => (


                        <div key={i} className="text-white phone:none  text-[1.2vw] font-normal">
                            <h3>{e}</h3>
                        </div>




                    ))


            }








        </div>
    )
}
