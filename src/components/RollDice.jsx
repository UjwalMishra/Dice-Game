import React, { useState } from 'react'

export const RollDice = ({currentDice,rollDice}) => {

    

  return (

    <div className='flex flex-col items-center mt-[16px] cursor-pointer'
    onClick={rollDice}
    >
        <img
        src={`../public/images/dice/dice_${currentDice}.png`} 
        width={200}
        alt="" />
        <p className='text-[24px] font-[500]'>Click on Dice to roll</p>
    </div>
  )
}
