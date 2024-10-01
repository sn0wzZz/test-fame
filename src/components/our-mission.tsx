import React from 'react'
import BaseSlider from '@/components/base-slider'

const OurMission = () => {
  return (
    <div className="flex flex-col items-center bg-bgcc pt-4">
      <h4 className="font-sans font-bold text-3xl md:text-5xl text-textBlack">
        Our <span className="text-brandOrange">Mission</span>
      </h4>
      <span className="font-sans font-normal text-textBlack text-xl md:text-2xl">
        A BOLD NEW WAY TO:
      </span>
      <div className="flex flex-col items-center w-full pt-4">
        <BaseSlider />
      </div>
    </div>
  )
}

export default OurMission
