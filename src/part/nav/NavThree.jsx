import React from "react"
import { motion } from "motion/react"
import { index } from "../../pagesConfig/index"
import { Link } from "react-router-dom"
import { PhoneNav } from "./PhoneNav"
import { useAuth } from "../../context/AuthContext";

export const NavThree = () => {
    const { SetPhoneNav } = useAuth();
    return (
        <div className="w-screen sticky top-0  z-[1000]   BT px-[4vw] h-12 bg-main border-b border-white/10">
            <div onClick={() => SetPhoneNav(true)} className="div">hi</div>

            {index.map((item, idx) => (
                <div
                    key={idx}
                    className="text-white  phone:none  md:none  text-[1.1vw] font-medium tracking-wide"
                >

                    <motion.h3
                        className="relative cursor-pointer select-none px-2 py-1"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    >
                        {item.slug}

                        {item.sub && item.sub.length > 0 && (
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
                                className="absolute top-6 -left-9 w-40  overflow-scroll max-h-[75vh] rounded-xl border border-white bg-white backdrop-blur-xl shadow-lg"
                            >
                                <div className="flex flex-col p-2">

                                    {item.sub.map((subItem, subIdx) =>
                                        subItem?.slug ? (
                                            <Link
                                                key={subIdx}
                                                to={`/${subItem.link || subItem.slug}`}
                                                className="px-3 py-2 text-sm rounded-lg text-main hover:text-white hover:bg-main transition-all"
                                            >
                                                {subItem.slug}
                                            </Link>
                                        ) : null
                                    )}

                                </div>
                            </motion.div>
                        )}
                    </motion.h3>
                </div>
            ))}
        </div>
    )
}
