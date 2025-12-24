import React from 'react'

const NavOne = () => {
    return (
        <div className='w-screen phone:px-3 overflow-hidden flex justify-around  phone:h-12 h-7 bg-main '>


            <div className="center phone:gap-2 phone:text-xl phone:gap text-sm gap-5">
                <h4>simpal</h4>
                <h4>modern</h4>
            </div>






            <div className="  phone:gap-3 py-3 gap-8 flex h-full ">

                {
                    ["insta.png", "mata.png", "tuter.png", "yt.png"].map((e, i) => (



                        <div className='w-auto  h-full'>
                            <img className='object-cover  ' src={`img/logo/${e}`} alt="" />
                        </div>






                    ))
                }










            </div>




        </div>
    )
}

export default NavOne