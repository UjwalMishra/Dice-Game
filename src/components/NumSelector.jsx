import React, { useState } from "react";

const NumSelector = ({selectNum,setSelectNum}) => {
  const diceNums = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-col items-end mt-8 md:mt-0">
      <div className="flex justify-center items-center gap-[12px] md:gap-[24px]">
        {diceNums.map((diceNum, index) => (
          <button
            key={index}
            onClick={() => setSelectNum(diceNum)}
            className={`flex justify-center items-center md:px-6 md:py-4 border-2 border-black text-[16px] md:text-[24px] font-[500] md:font-[700] rounded-lg h-[35px] w-[35px] md:h-[72px] md:w-[72px] ${
              selectNum === diceNum ? "text-white bg-black md:scale-110" : ""
            }`}
          >
            {diceNum}
          </button>
        ))}
      </div>

      <p className=" text-[18px] md:text-[24px] font-[600] md:font-[700] mt-2 md:mt-4">Select Number</p>
    </div>
  );
};

export default NumSelector;
