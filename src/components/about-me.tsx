import React from 'react'

const HeroMe = () => {
  return (
    <div className="bg-white flex flex-col items-center w-full md:min-h-[800px] xl:min-h-[750px] overflow-hidden">
      <div className="flex flex-col items-center md:items-start m-5 md:max-w-[1045px] w-full relative xl:px-0 px-6">
        <h2 className="font-sans font font-bold text-3xl md:text-5xl text-textBlack pb-4">
          I am <span className="text-brandOrange">#OneofFAME</span>
        </h2>
        <div className="flex flex-col items-center md:items-start md:flex-row">
          <section className="flex item-col items-center md:min-w-[298px] md:absolute left-[33px] xl:left-0 top-[120px] z-10">
            <div>
              <div className="flex flex-col items-center">
                <img
                  src="../../images/victoria.jpg"
                  className=" w-[200px] h-[305px] md:w-[298px] md:h-[466px]"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-sans font-bold text-xl md:text-2xl text-brandOrange">
                  Viktoria Karoleva ,CFA
                </span>
                <span className="font-sans font-bold text-lg md:text-xl text-textBlack mb-4">
                  Founder
                </span>
              </div>
            </div>
          </section>
          <section
            style={{ clipPath: 'inset(0 -100vmax)' }}
            className="font-sans font-normal text-lg md:text-base text-textBlack pt-5 md:p-6 bg-lightOrange md:absolute  max-w-[1045px] xl:max-w-[1145px] w-full md:pr-[250px] lg:pr-[200px] left-[161px] top-[85px] z-0 md:pl-[200px] xl:pl-[250px] shadow-[0_0_0_100vmax_#FDF7ED] clip xl:shadow-none"
          >
            <p className="pt-4 pb-4">
              With a family background deeply rooted in finance, I naturally
              gravitated toward investments, entrepreneurship and innovations.{' '}
              <span className="font-bold"></span>
            </p>
            <p className="pt-2 pb-4">
              My professional journey in the financial sector began with
              hands-on experience in asset management and insurance brokerage at
              Karoll Financial Group. To deepen my expertise, I worked
              at two of the leading asset management firms -
              Schroders in Milan and Lazard Frères Gestion in Paris. Returning to
              Bulgaria in 2018, I joined EY as part of the Strategy and
              Transactions team, where I gained invaluable real-world experience
              by participating in various business valuation, due diligence, M&A
              and strategy consulting projects across different sectors.
            </p>
            <p className="pt-4 pb-4">
              I hold a bachelor’s degree in Management with
              entrepreneurship from the UK. I am also a member of the CFA
              Institute, holding the CFA Charterholder.
            </p>
            <p className="pt-4 pb-4">
              Currently, I am interested in angel investing, startup advising
              and community building.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default HeroMe
