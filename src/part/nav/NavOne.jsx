import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom'
const NavOne = () => {
    return (
        <div className='w-full phone:px-3 overflow-hidden flex justify-around  phone:h-12 h-7 bg-main '>


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="center phone:gap-2 phone:text-xl phone:gap text-sm gap-5">
                <h4>simpal</h4>
                <h4>modern</h4>
            </motion.div>






            <div className="  phone:gap-3 phone:py-3 py-2 gap-8 flex h-full ">

                {
                    [
                        { logo: "insta.png", link: "https://www.instagram.com/yaduvanshidegreecollege/" },
                        { logo: "mata.png", link: "https://www.facebook.com/ydc.mahendergarh.92" },
                        { logo: "tuter.png" },
                        { logo: "yt.png", link: "https://www.youtube.com/@yaduvanshigroup" },
                    ]
                        .map((e, i) => (



                            <Link to={e.link} key={i} className='w-auto  h-full'>
                                <img className='object-cover  ' src={`/img/logo/${e.logo}`} alt="" />
                            </Link>






                        ))
                }










            </div>




        </div>
    )
}

export default NavOne