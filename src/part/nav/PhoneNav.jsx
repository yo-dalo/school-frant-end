import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { index } from "../../pagesConfig/index";
import { Link } from "react-router-dom";

export const PhoneNav = ({ pageCats = [] }) => {
  const { phoneNav, SetPhoneNav } = useAuth();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.div
      initial={false}
      animate={{ x: phoneNav ? "0" : "100vw" }}
      transition={{ duration: 1, ease: "circOut" }}
      className="mainNav2 translate-x-[100vw] pointer-events-auto fixed z-[1000000] top-0 left-0 w-full h-screen overflow-y-auto bg-white shadow-2xl p-4"
    >
      <ul className="navSec BT gap-3 mb-3">
        <a href="/" className="w-full block">
          <li className="py-3 px-4 rounded-xl bg-main text-white font-semibold text-lg">
            Home
          </li>
        </a>

        <div onClick={() => SetPhoneNav(false)} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
      </ul>

      <div className="w-screen">
        {index.map((section, i) => (
          <div key={i} className="w-full">
            <div
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full cursor-pointer hover:bg-main rounded-xl hover:text-mainOne px-5 py-3"
            >
              {section.slug}
            </div>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {section.sub.map((e, j) => (
                    <div
                      key={j}
                      className="w-full hover:bg-main rounded-xl hover:text-mainOne"
                    >
                      <Link
                        to={`/${e.link || e.slug}`}
                        onClick={() => SetPhoneNav(false)}
                        className="FULL block px-9 py-3"
                      >
                        {e.slug}
                      </Link>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-6 py-3 px-4 bg-main text-white rounded-xl font-semibold text-center">
        © School Menu
      </div>
    </motion.div>
  );
};
