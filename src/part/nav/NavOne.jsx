import React from 'react'

const NavOne = () => {
    return (
        <div className='w-screen flex justify-around  phone:h-12 h-7 bg-main '>


            <div className="center phone:text-2xl text-sm gap-5">
                <h4>simpal</h4>
                <h4>modern</h4>
            </div>






            <div className="  py-2 gap-8 flex h-full ">

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