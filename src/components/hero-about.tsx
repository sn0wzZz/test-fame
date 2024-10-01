import React from 'react'

const HeroAbout = () => {
  return (
    <div className="flex flex-col items-center pt-4 pb-4">
      <h1 className="font-sans font-bold text-textBlack text-3xl md:text-6xl">
        Hi. We&rsquo;re <span className="text-brandOrange">F.A.M.E</span>
      </h1>
      <p className="font-sans font-normal text-textBlack text-lg md:text-xl max-w-3xl text-center m-6 lg:m-4">
        F.A.M.E is registered as a foundation with the mission to create a
        thriving ecosystem by promoting{' '}
        <span className="text-brandOrange font-bold">
          entrepreneurial & investment
        </span>{' '}
        activities among women and providing them with access to {' '}
        <span className="text-brandOrange font-bold">
          capital, mentorship, network & resources.
        </span>
      </p>
      <img
        src="../../images/hero-about2.png"
        className="md:w-[946px] md:h-[343px] w-[270px] h-[98px]"
      />
    </div>
  )
}

export default HeroAbout
