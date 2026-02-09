import React from "react"
import { motion } from "framer-motion"

const Mission = () => {
    return (
        <div className="w-full pointer-events-auto overflow-hidden min-h-screen py-6 bg-[linear-gradient(59.79deg,_#ECF0F1_67.3%,_#34495E_86.1%)]">
            <div className="center px-8 gap-10">
                <hr className="w-full" />
                <div className="whitespace-nowrap none text-5xl">our moniters</div>
                <hr className="w-full" />
            </div>

            <div className="w-full flex pointer-events-auto phone:gap-1 phone:px-3 phone:min-h-[70vh] gap-14 px-12 py-9 min-h-[10vw]">
                <motion.div
                    initial={{ minWidth: "10vw" }}
                    whileHover={{ minWidth: "70vw" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="FC phone:gap-2"
                >
                    <h1 className="text-7xl font-bold phone:text-3xl phone:leading-6 leading-[0.9]">
                        Vision & Mission
                    </h1>
                    <div className="w-full h-full bg-slate-800">
                        <img className="FULL object-cover" src="img/image/d2.jpg" alt="" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ minWidth: "10vw" }}
                    whileHover={{ minWidth: "70vw" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="FC gap-3 phone:pt-6 pt-16"
                >
                    <motion.div
                        initial={{ height: "7rem" }}
                        whileHover={{ height: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="BT w-full gap-3 overflow-hidden"
                    >
                        <div className="FULL w-full bg-slate-500">
                            <img className="object-cover" src="img/image/x1.jpeg" alt="" />
                        </div>
                        <div className="FULL bg-gray-600">
                            <img className="object-cover" src="img/image/a10.jpeg" alt="" />
                        </div>
                    </motion.div>

                    <div className="w-full h-full">
                        <img className="object-cover" src="img/image/d2.jpg" alt="" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ minWidth: "4vw" }}
                    whileHover={{ minWidth: "70vw" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="phone:pt-6"
                >
                    <img className="object-cover" src="img/image/d3.jpg" alt="" />
                </motion.div>
            </div>

            <p className="w-4/5 font-semibold phone:leading-5 leading-tight phone:text-xl phone:w-full phone:px-3 phone:text-left text-center m-auto text-2xl">
                Technology is reshaping the education system by opening new learning
                opportunities for college students and faculty. Modern digital tools—
                such as virtual classrooms, smart learning platforms, and AI-based
                support—make education more flexible and accessible. Students can attend
                classes from anywhere, revisit recorded lectures, and explore learning
                resources far beyond traditional books. Faculty members also benefit
                through advanced tools that help track performance, personalize teaching,
                and stay connected with learners. In today’s colleges, technology boosts
                creativity through digital projects, presentations, and collaborative
                assignments. Overall, the integration of technology is building a
                smarter, more connected, and efficient academic environment. As
                innovation continues, the future of college education will become even
                more engaging, adaptive, and inclusive for every student.
            </p>
        </div>
    )
}

export default Mission
