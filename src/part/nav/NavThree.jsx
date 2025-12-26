import React from "react"
import { motion } from "motion/react"
import { index } from "../../pagesConfig/index"

export const NavThree = () => {
    return (
        <div className="w-screen BT px-[4vw] h-12 bg-main border-b border-white/10">
            {index.map((item, idx) => (
                <div
                    key={idx}
                    className="text-white phone:none text-[1.1vw] font-medium tracking-wide"
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
                                        width: 0,
                                        y: 16,
                                        scale: 0.98,
                                        pointerEvents: "none",
                                    },
                                    hover: {
                                        opacity: 1,
                                        y: 0,
                                        width: 100,
                                        scale: 1,
                                        pointerEvents: "auto",
                                    },
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeOut",
                                }}
                                className="absolute top-8 left-0 z-50 w-48 rounded-xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-lg"
                            >
                                <div className="flex flex-col p-2">
                                    {item.sub.map((subItem, subIdx) => (
                                        <h3
                                            key={subIdx}
                                            className="px-3 py-2 text-sm rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all"
                                        >
                                            {subItem.slug}
                                        </h3>
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
