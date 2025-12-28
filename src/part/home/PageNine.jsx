import React from "react"
import { motion } from "framer-motion"

const PageNine = () => {
  return (
    <div className="w-full phone:h-[70vh] overflow-hidden h-[50vw] py-12 gap-5 grid grid-rows-2 bg-main">
      
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
              <img className="h-full" src="https://i.pinimg.com/736x/a0/d8/82/a0d882b093ecc4da0eecd34258b63423.jpg" />
              <img className="h-full" src="https://i.pinimg.com/736x/2e/bb/49/2ebb49c2e9cee470cfbf140ff55908db.jpg" />
              <img className="h-full" src="https://i.pinimg.com/736x/f3/f1/45/f3f145d5aa2f40f8c620900c60139c07.jpg" />
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
              <img className="h-full" src="https://i.pinimg.com/736x/2e/bb/49/2ebb49c2e9cee470cfbf140ff55908db.jpg" />
              <img className="h-full" src="https://i.pinimg.com/736x/a0/d8/82/a0d882b093ecc4da0eecd34258b63423.jpg" />
              <img className="h-full" src="https://i.pinimg.com/736x/f3/f1/45/f3f145d5aa2f40f8c620900c60139c07.jpg" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

    </div>
  )
}

export default PageNine
