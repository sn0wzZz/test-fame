import React from 'react'
import FooterSlider from '@/components/footer-slder'

const JoinUs = () => {
  return (
    <section className="relative xl:pb-[33px]">
      <img
        src="/images/join-us.png"
        className="mx-auto xl:block hidden !object-fill  h-[464px]"
      />
      <div
        style={{ clipPath: 'inset(0 -100vmax)' }}
        className="flex flex-col-reverse md:flex-row justify-center items-center rounded-lg pb-20 md:pb-2 max-w-[1045px] w-full mx-auto xl:absolute inset-0 bg-lightBrown xl:bg-transparent shadow-[0_0_0_100vmax_#FFF3DE] clip xl:shadow-none"
      >
        <div className="flex flex-col  items-center md:items-start md:pt-10 md:mt-10 md:mb-10 pr-[33px] md:pr-0 pl-[33px]">
          <h6 className="font-sans font-bold text-textBlack text-2xl md:whitespace-nowrap leading-tighter md:text-4xl xl:text-5xl mb-[28px] text-center mx-auto">
            Are you ready to join us?
          </h6>
          {/* <p className="font-sans font-normal opacity-60 text-textBlack text-base md:text-lg text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy{' '}
          </p> */}
          <a
            href="/#whoareyou"
            className="text-white bg-brandOrange rounded-3xl font-bold  text-base md:text-lg py-2  px-2 md:px-6 md:py-4 text-center w-[240px] mt-6 mx-auto"
          >
            Be one of us
          </a>
        </div>
        <div className="flex flex-col items-center">
          <FooterSlider />
        </div>
      </div>
    </section>
  )
}

export default JoinUs
