import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/playgame")
  }
  return (
    <div className='max-w-[1180px] flex flex-col md:flex-row mx-auto  justify-around items-center pt-[150px] md:pt-12 gap-y-8 md:gap-y-0'>

    <div>
      <img src="/images/dices.png" />
    </div>

    <div className='flex flex-col items-center md:items-end gap-y-8 md:gap-y-0'>
      <h1 className='text-[50px] font-bold'>Dice Game</h1>
      <button 
      onClick={clickHandler}
        className='bg-black text-white text-[18px] px-[18px] py-[10px] rounded-lg border hover:bg-white hover:text-black hover:border duration-100 ease-in font-medium'>
        
        Play Now
        
      </button>
    </div>

    </div>
  )
}

export default Home;
