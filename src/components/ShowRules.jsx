import React from "react";
import { useNavigate } from "react-router-dom";

const ShowRules = () => {
  const navigate = useNavigate();

  function startGame() {
    navigate("/playgame");
  }
  return (
    <div className="mt-16 md:mt-8 flex flex-col justify-between">
      <div className="flex justify-evenly mb-16">
        <img src="../public/images/dice/dice_1.png" width={100} alt="" />
        <img src="../public/images/dice/dice_2.png" width={100} alt="" />
        <img src="../public/images/dice/dice_3.png" width={100} alt="" />
      </div>

      <div className="w-[320px] md:w-[800px] flex flex-col mx-[30px] md:mx-[250px]">
        <h2 className="text-[18px] md:text-[24px] font-[700] mb-2 md:mb-4">
          How to play dice game?
        </h2>
        <ul className="list-disc list-inside text-[14px] md:text-[16px] font-[500]">
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            After clicking on the dice, if the selected number matches the dice
            number, you will receive the same points as the dice. However, if
            the guess is wrong, 2 points will be deducted.
          </li>
        </ul>
        <div className="flex justify-center mt-8">
          <button
            className="bg-black text-white text-[18px] px-[24px] py-[8px] rounded-lg border hover:bg-white hover:text-black hover:border duration-100 ease-in font-medium border-black"
            onClick={startGame}
          >
            Play Game
          </button>
        </div>
      </div>
      <div className="flex justify-evenly mt-16">
        <img src="../public/images/dice/dice_4.png" width={100} alt="" />
        <img src="../public/images/dice/dice_5.png" width={100} alt="" />
        <img src="../public/images/dice/dice_6.png" width={100} alt="" />
      </div>
    </div>
  );
};

export default ShowRules;
