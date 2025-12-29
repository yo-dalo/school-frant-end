import React from "react";
import { motion } from "motion/react";
import { useAuth } from "../../context/AuthContext";

export const PhoneNav = () => {
  const { phoneNav } = useAuth();

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen z-[1000000000] bg-black/60 backdrop-blur-sm ${
        phoneNav || "hidden"
      } md:hidden`}
    >
      <div className="h-full w-full bg-slate-900 pt-24 px-4 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="group rounded-xl bg-slate-800 border border-slate-700 overflow-hidden transition-all"
            >
              <motion.h3
                whileTap={{ scale: 0.97 }}
                className="px-4 py-3 text-white font-semibold bg-slate-700 group-hover:bg-main transition-all"
              >
                Menu
              </motion.h3>

              <ul className="px-4 py-2 text-sm text-slate-200 space-y-2 max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100 transition-all duration-300">
                <li className="hover:text-main cursor-pointer">Item 1</li>
                <li className="hover:text-main cursor-pointer">Item 2</li>
                <li className="hover:text-main cursor-pointer">Item 3</li>
                <li className="hover:text-main cursor-pointer">Item 4</li>
                <li className="hover:text-main cursor-pointer">Item 5</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
