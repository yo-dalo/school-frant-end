import React, { useState, useEffect } from 'react';
import { useAuth } from "../../context/AuthContext";

const PageEleven = () => {
  const { resToper } = useAuth();

  // State to track the currently selected topper (default: first one)
  const [selectedTopper, setSelectedTopper] = useState(null);

  // Set default to the 1st rank topper when data loads
  useEffect(() => {
    if (resToper && resToper.length > 0) {
      // Find the topper with Rank "1" or index 0 as fallback
      const firstTopper = resToper.find(e => e.Rank === "1") || resToper[0];
      setSelectedTopper(firstTopper);
    }
  }, [resToper]);

  // Handle click on any topper card
  const handleTopperClick = (topper) => {
    setSelectedTopper(topper);
  };

  return (
    <div className="w-screen overflow-hidden h-fit flex justify-center items-center">
      <div className="w-screen flex md:flex-col md:gap-10 md:h-fit phone:h-screen phone:flex-col bg-main h-[450px]">

        {/* ==================== PART 1: Highlighted Topper ==================== */}
        <div className="w-[1162px] md:w-full phone:w-full phone:gap-4 pl-3 pr-2 flex gap-9 h-full items-center justify-center">
          {/* Photo Placeholder */}
          <img src={`uploads/${selectedTopper?.Image}`} className="w-[20vw] object-cover md:w-[70vw] phone:w-[70vw] bg-mainOne h-[40vh] rounded-xl" />

          {/* Name, Father, Rank */}
          <div className="flex flex-col phone:px-2 justify-center phone:h-full py-10 phone:py-0 phone:items-start items-end">
            <div>
              <h2 className="text-4xl font-bold">
                {selectedTopper?.Student_Name || "Loading..."}
              </h2>
              <h4>
                {selectedTopper?.Gender?.toLowerCase() === "male" ? "S/o" : "D/o"}{" "}
                {selectedTopper?.Father_name ? `SH ${selectedTopper.Father_name}` : ""}
              </h4>
            </div>

            <h1 className="text-[25vw] phone:text-[40vw] phone:translate-x-0 md:-translate-x-[100px] phone:translate-y-0 -translate-x-[120px] translate-y-[1rem] relative phone:leading-[1] leading-[0.5]">
              <span className="text-2xl right-[1px] -top-[25px] md:right-[2px] phone:right-[2px] phone:top-[15px] px-0 text-red-600 absolute">
                {selectedTopper?.Rank === "1" ? "st" :
                  selectedTopper?.Rank === "2" ? "nd" :
                    selectedTopper?.Rank === "3" ? "rd" : "th"}
              </span>
              {selectedTopper?.Rank || "1"}
            </h1>

            <h2 className="text-2xl leading-6 phone:w-full w-[58%]">
              Position in University
            </h2>
          </div>
        </div>

        {/* ==================== PART 2: Scrollable Toppers List ==================== */}
        <div className="flex justify-start   overflow-x-auto h-full w-full px-4 pb-4">
          {resToper?.map((e, i) => (
            <div
              key={i}
              onClick={() => handleTopperClick(e)}
              className={`min-w-[205px] md:min-w-[205px] phone:min-w-[51vw] gap-4 flex flex-col justify-center px-3 items-center cursor-pointer transition-all duration-300 
                ${selectedTopper?.Rank === e.Rank ? "scale-110 opacity-100" : "opacity-70 hover:opacity-100 hover:scale-105"}`}
            >
              {/* Rank */}
              <h1 className="relative inline-block text-8xl font-bold">
                {e.Rank}
                <span className="absolute text-sm top-1 -right-6">
                  {e.Rank === "1" ? "st" : e.Rank === "2" ? "nd" : e.Rank === "3" ? "rd" : "th"}
                </span>
                <span className="absolute text-sm bottom-0 -right-28 font-normal leading-4 w-24">
                  Position in University
                </span>
              </h1>

              {/* Photo Placeholder */}
              <img src={`uploads/${e?.Image}`} className="w-full object-cover h-[15vw] phone:h-[35vw] rounded-lg bg-mainOne" />

              {/* Name & Father (small text below) */}
              <div className="w-full text-center leading-5">
                <h2 className="font-bold text-2xl">{e.Student_Name}</h2>
                <h4>
                  {e.Gender?.toLowerCase() === "male" ? "S/o" : "D/o"} {e.Father_name}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PageEleven;