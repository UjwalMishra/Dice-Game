import React from 'react'

const TotalScore = ({score}) => {

  return (
    <div >
        <div className="flex flex-col justify-center items-center max-w-[200px]">
        <h1 className="text-[100px] font-[200px] leading-[100px] ">

        {score}

        </h1>
        <p className="font-[500] text-[24px] ">Total Score</p>
      </div>

      
    </div>
  )
}

export default TotalScore