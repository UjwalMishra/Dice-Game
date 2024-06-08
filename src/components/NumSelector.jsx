import React, { useState } from "react";

const NumSelector = ({selectNum,setSelectNum}) => {
  const diceNums = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-col items-end">
      <div className="flex gap-[24px]">
        {diceNums.map((diceNum, index) => (
          <button
            key={index}
            onClick={() => setSelectNum(diceNum)}
            className={` px-6 py-3 border-2 border-black text-[24px] font-[700] rounded-lg  h-[72px] w-[72px] ${
              selectNum === diceNum ? "text-white bg-black scale-110" : ""
            }`}
          >
            {diceNum}
          </button>
        ))}
      </div>

      <p className="text-[24px] font-[700] mt-4">Select Number</p>
    </div>
  );
};

export default NumSelector;
