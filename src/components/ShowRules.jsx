import React from "react";
import PlayGame from "./PlayGame";
import { useNavigate } from "react-router-dom";

const ShowRules = () => {
  const navigate = useNavigate();

  function startGame() {
    navigate("/playgame");
  }
  return (
    <div className="mt-8">
      <div className="flex justify-evenly mb-16">
        <img src="/images/dice/dice_1.png" width={100} alt="" />
        <img src="/images/dice/dice_2.png" width={100} alt="" />
        <img src="/images/dice/dice_3.png" width={100} alt="" />
      </div>

      <div className="w-[800px] flex flex-col mx-[250px]">
        <h2 className="text-[24px] font-[700] mb-4">How to play dice game?</h2>
        <ul className="list-disc list-inside font-[500]">
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            After clicking on the dice, if the selected number matches the dice
            number, you will receive the{" "}
            <span className="mx-[22px]">
              same points as the dice. However, if the guess is wrong, 2 points
              will be deducted.
            </span>
          </li>
        </ul>
        <div className="flex justify-center mt-6">
          <button
            className="bg-black text-white text-[18px] px-[24px] py-[8px] rounded-lg border hover:bg-white hover:text-black hover:border duration-100 ease-in font-medium border-black"
            onClick={startGame}
          >
            Play Game
          </button>
        </div>
      </div>
      <div className="flex justify-evenly mt-16">
        <img src="/images/dice/dice_4.png" width={100} alt="" />
        <img src="/images/dice/dice_5.png" width={100} alt="" />
        <img src="/images/dice/dice_6.png" width={100} alt="" />
      </div>
    </div>
  );
};

export default ShowRules;
