import React from 'react'
import { motion } from "motion/react"
import { useAuth } from "../../context/AuthContext";
export const PhoneNav = () => {

    const { phoneNav } = useAuth();

    return (
        <div className={`w-screen ${phoneNav|| "none"}  z-[1000000000] h-screen fixed top-0 start-0 bg-slate-400`}>
            <div className="FULL grid-cols-2 pt-24 grid ">
                <div className=" px-6">


                    <div className='border w-full  hover:bg-main transition-all bg-slate-500 px-4'>
                        <motion.h3 className=''>hello</motion.h3>
                        <ul className='px-3  hover:scale-[1]'>
                            <li>hello</li>
                            <li>hello</li><li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
                    </div>



                    <div className='border w-full  hover:bg-main transition-all bg-slate-500 px-4'>
                        <motion.h3 className=''>hello</motion.h3>
                        <ul className='px-3 none scale-0 hover:scale-[1]'>
                            <li>hello</li>
                            <li>hello</li><li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
                    </div>


                    <div className='border w-full  hover:bg-main transition-all bg-slate-500 px-4'>
                        <motion.h3 className=''>hello</motion.h3>
                        <ul className='px-3 none scale-0 hover:scale-[1]'>
                            <li>hello</li>
                            <li>hello</li><li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
                    </div>




                    <div className='border w-full  hover:bg-main transition-all bg-slate-500 px-4'>
                        <motion.h3 className=''>hello</motion.h3>
                        <ul className='px-3 none hover:scale-[1]'>
                            <li>hello</li>
                            <li>hello</li><li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
                    </div>





                </div>

                <div className=" px-6">


                    <div className='border w-full  hover:bg-main transition-all bg-slate-500 px-4'>
                        <motion.h3 className=''>hello</motion.h3>
                        <ul className='px-3  hover:scale-[1]'>
                            <li>hello</li>
                            <li>hello</li><li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
                    </div>



                    <div className='border w-full  hover:bg-main transition-all bg-slate-500 px-4'>
                        <motion.h3 className=''>hello</motion.h3>
                        <ul className='px-3 none scale-0 hover:scale-[1]'>
                            <li>hello</li>
                            <li>hello</li><li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
                    </div>


                    <div className='border w-full  hover:bg-main transition-all bg-slate-500 px-4'>
                        <motion.h3 className=''>hello</motion.h3>
                        <ul className='px-3 none scale-0 hover:scale-[1]'>
                            <li>hello</li>
                            <li>hello</li><li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
                    </div>




                    <div className='border w-full  hover:bg-main transition-all bg-slate-500 px-4'>
                        <motion.h3 className=''>hello</motion.h3>
                        <ul className='px-3 none hover:scale-[1]'>
                            <li>hello</li>
                            <li>hello</li><li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </ul>
                    </div>





                </div>

            </div>
        </div>
    )
}
