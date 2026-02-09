import Yo from "../utils/Yo";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react"
import { index } from "../../pagesConfig/index"
import { Link } from "react-router-dom"

import { useAuth } from "../../context/AuthContext";




export const NavFour = () => {

    const { resData } = useAuth();




    return (
        <div className="w-full sticky top-12  phone:none  z-[900]  gap-9 flex items-center px-[4vw] h-12 bg-main border-b border-white/10">
            {resData?.map((item, idx) => (
                <div
                    key={idx}
                    className="text-white  md:none phone:none text-[1.1vw] font-medium tracking-wide"
                >

                    <motion.h3
                        className="relative cursor-pointer select-none px-2 py-1"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    >
                        {item?.Name}

                        {item?.Name && item?.Name.length > 0 && (
                            <motion.div
                                variants={{
                                    rest: {
                                        opacity: 0,

                                        y: 16,
                                        scale: 0.98,
                                        pointerEvents: "none",
                                    },
                                    hover: {
                                        opacity: 1,
                                        y: 0,

                                        scale: 1,
                                        pointerEvents: "auto",
                                    },
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeOut",
                                }}
                                className="absolute top-6 -left-9 w-40 overflow-scroll max-h-[75vh] rounded-xl border border-white bg-white backdrop-blur-xl shadow-lg"
                            >
                                <div className="flex flex-col p-2">

                                    {item?.pages.map((subItem, subIdx) => (
                                        <Link to={`/${subItem.Name.toLowerCase().replace(/\s+/g, "-")}`}
                                            key={subIdx}
                                            className="px-3 py-2  text-sm rounded-lg text-main hover:text-white hover:bg-main transition-all"
                                        >
                                            {subItem.Name}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </motion.h3>
                </div>
            ))}
        </div>
    )
}
