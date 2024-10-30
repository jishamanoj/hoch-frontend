import React from 'react'

function Section() {
  return (
    <div className="w-full">
    <div className="w-full  relative">
      <img src="/section1.svg" />

      <div className="w-full h-full bg-[#0000005b] absolute top-0 left-0"></div>
      <div className="w-[550px] xl:w-[660px] px-20 lg:p-0 h-[252px] absolute top-[70px] lg:top-[180px] xl:top-[200px] left-[160px]">
        <p className="text-white text-[30px] lg:text-[40px] xl:text-[58px]  leading-[10px] md:leading-[50px] xl:leading-[84px]">
        Your Reliable Partner 
for Global Education And 
Career Opportunities.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Section