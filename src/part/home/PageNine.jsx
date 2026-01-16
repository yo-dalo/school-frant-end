import React from "react"
import { motion } from "framer-motion"

const PageNine = () => {
  return (
    <div className="w-full phone:h-[70vh] overflow-hidden h-[1000px] py-12 gap-5 grid grid-rows-3 bg-main">

      {/* Row 1 : left */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 25,
          }}
        >
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <img className="h-full object-fill" src="img/image/a12.jpeg" />
              <img className="h-full object-fill" src="img/image/a13.jpeg" />
              <img className="h-full object-fill " src="img/image/a15.jpeg" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Row 2 : right */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 25,
          }}
        >
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <img className="h-full object-fill" src="img/image/a6.jpeg" />
              <img className="h-full object-fill" src="img/image/a11.jpeg" />
              <img className="h-full object-fill" src="img/image/a17.jpeg" />
            </React.Fragment>
          ))}

        </motion.div>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 20,
          }}
        >
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <img className="h-full object-fill" src="img/image/a6.jpeg" />
              <img className="h-full object-fill" src="img/image/a11.jpeg" />
              <img className="h-full object-fill" src="img/image/a17.jpeg" />
            </React.Fragment>
          ))}

        </motion.div>
      </div>


    </div>
  )
}

export default PageNine
