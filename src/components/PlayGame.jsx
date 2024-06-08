import React from "react";
import TotalScore from "./TotalScore";
import NumSelector from "./NumSelector";
import { RollDice } from "./RollDice";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function PlayGame() {
  const [currentDice, setCurrentDice] = useState(1);
  const [selectNum, setSelectNum] = useState(1);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();


  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  function showRuleHandler() {
    navigate("/showrule");
  }

  function rollDice() {
    if (!selectNum) {
      toast.error("Select a number");
      return;
    }
    const randomNum = generateRandomNum(1, 7);
    setCurrentDice(randomNum);
    if (randomNum === selectNum) {
      setScore((prev) => prev + randomNum);
      toast("Win! Points have been added.", {
        icon: "👏",
      });
    } else {
      setScore((prev) => prev - 2);
      toast.error("Oops! You lost, 2 points have been deducted.");
    }

    setSelectNum(undefined);
  }

  return (
    <div>
      <div className="flex justify-between px-8 mt-[70px]">
        <TotalScore score={score}></TotalScore>
        <NumSelector
          selectNum={selectNum}
          setSelectNum={setSelectNum}
        ></NumSelector>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-4">
        <RollDice currentDice={currentDice} rollDice={rollDice}></RollDice>
        <button
          className="bg-black text-white text-[18px] px-[32px] py-[8px] rounded-lg border hover:bg-white hover:text-black hover:border duration-100 ease-in font-medium border-black"
          onClick={() => setScore(0)}
        >
          Reset
        </button>

        <button
          className="bg-black text-white text-[18px] px-[32px] py-[8px] rounded-lg border hover:bg-white hover:text-black hover:border duration-100 ease-in font-medium border-black"
          onClick={showRuleHandler}
        >
          Show Rules
        </button>
      </div>
    </div>
  );
}

export default PlayGame;
