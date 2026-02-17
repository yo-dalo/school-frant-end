import React from "react";
import { motion } from "framer-motion";

const TextSwiper = () => {
  return (
    <div className="w-full h-32 overflow-hidden bg-main flex items-center">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" }
        }}
      >
        <h1 className="text-5xl    main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl    main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
        <h1 className="text-5xl   main-text">Ydc Mahendergarh</h1>
      </motion.div>
    </div>
  );
};

export default TextSwiper;
