import React from "react";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { index } from "../../pagesConfig/index"
import { Link } from "react-router-dom";

export const PhoneNav = ({ pageCats = [] }) => {
  const { phoneNav, SetPhoneNav } = useAuth();

  return (
    <motion.div animate={{ x: phoneNav ? "0" : "100vw" }} transition={{ duration: 1, ease: "circOut" }} className="mainNav2 translate-x-screen pointer-events-auto fixed z-[1000000]   top-0 left-0 w-full h-screen overflow-y-auto bg-white shadow-2xl p-4">
      <ul className="navSec BT gap-3 mb-3">
        <a href="/" className=" w-full block">
          <li className="py-3 px-4 rounded-xl bg-main text-white font-semibold text-lg">
            Home
          </li>
        </a>

        <div onClick={() => { SetPhoneNav(false) }} className="cursor-pointer">55</div>

      </ul>

      {

        // [
        //   {
        //     title: "About Us",
        //     links: [
        //       ["/about", "About School"],
        //       ["/about-school", "About School M/garh"],
        //       ["/chairman-message", "Chairman Message"],
        //       ["/principal-message", "Principal Message"],
        //       ["/management-committee", "Management Committee"],
        //       ["/school-at-glance", "School at a Glance"],
        //       ["/achievements", "Achievements"],
        //     ],
        //   },
        //   {
        //     title: "Academics",
        //     links: [
        //       ["/academics", "Academics"],
        //       ["/curriculum", "Curriculum"],
        //       ["/syllabus", "Syllabus"],
        //       ["/teaching-methodology", "Teaching Methodology"],
        //       ["/academic-calendar", "Academic Calendar"],
        //       ["/exam-assessment", "Exam & Assessment"],
        //       ["/exam-dates-results", "Exam Dates & Results"],
        //       ["/exam-timetable-downloads", "Exam Timetable"],
        //     ],
        //   },
        // ]

        index.map((section, i) => (
          <details className="mb-3 group" key={i}>
            <summary className="list-none cursor-pointer py-3 px-4  bg-gray-100 rounded-xl font-semibold text-gray-800 flex justify-between items-center">
              {section.slug}
              <span className="transition-transform group-open:rotate-180">⌄</span>
            </summary>

            <div className="mt-2 ml-3 space-y-2">
              {section?.sub.map((e, idx) => (
                <Link to={e.link} key={idx}>
                  <div className="py-2 px-4 rounded-lg bg-gray-50 hover:bg-main hover:text-mainOne text-gray-700">
                    {e.slug}
                  </div>
                </Link>
              ))}
            </div>
          </details>
        ))}

      {pageCats.map((cat) => (
        <details className="mb-3 group" key={cat.Id}>
          <summary className="list-none cursor-pointer py-3 px-4 bg-gray-100 rounded-xl font-semibold text-gray-800 flex justify-between items-center">
            {cat.Name}
            <span className="transition-transform group-open:rotate-180">⌄</span>
          </summary>

          <div className="mt-2 ml-3 space-y-2">
            {cat.pages?.map((page) => (
              <a href={`/page/${page.Id}`} key={page.Id}>
                <div className="py-2 px-4 rounded-lg bg-gray-50 hover:bg-blue-50 text-gray-700">
                  {page.Name}
                </div>
              </a>
            ))}
          </div>
        </details>
      ))}

      <div className="mt-6 py-3 px-4 bg-main text-white rounded-xl font-semibold text-center">
        © School Menu
      </div>
    </motion.div>
  );
};

// export default PhoneNav;
