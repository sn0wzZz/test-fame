import React from 'react'

const InfoBox = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col m-6 ">
        <h3 className="font-sans font-bold text-textBlack text-3xl lg:text-4xl pt-4 pb-4 lg:text-left text-center">
          Why? <span className="text-brandOrange">The inspiration</span>
        </h3>
        <div className="font-sans font-normal text-lg text-textBlack max-w-[1045px] leading-[32px] lg:leading-9">
          <p className="mt-2">
            Coming from a company led by a woman, I was surprised to discover
            that{' '}
            <span className="text-brandOrange font-bold">
              female-founded startups receive just 2% of VC capital in the CEE
              region.
            </span>{' '}
            Interestingly, they often generate more revenue, earn higher
            profits, and exit at faster rates with higher valuations compared to
            their male counterparts, as reported by the European Women in VC.
            This made me wonder:{' '}
            <span className="text-brandOrange font-bold">
              "Why not invest in ventures that perform better economically?
              Isn't this a missed opportunity?
            </span>
          </p>
          <p className="mt-4 mb-10 lg:mb-4">
            As I dived deeper into the topic of female entrepreneurship, I
            realized that the funding gap is not primarily driven by gender
            stereotypes, but rather by people’s tendency to like and invest in
            similarities. In the venture funding world, where the majority of
            investors and decision-makers are male, another question arose:{' '}
            <span className="text-brandOrange font-bold">
              Why not stimulate more women to invest and support new ventures?
            </span>
          </p>
          <section className="relative">
            <div
              style={{
                boxShadow: '0 0 0 100vmax #FFF3DE',
                clipPath: 'inset(0 -100vmax)',
              }}
              className="bg-lightBrown my-5 p-5 md:my-10 md:p-10 rounded-lg relative"
            >
              <p className="font-sans font-semibold text-textBlack text-lg md:text-xl text-center  leading-7">
                The lack of infrastructure represents one side of the story, but
                the other side – <br />
                <span className="text-brandOrange font-bold">
                  the stories of female entrepreneurs
                </span>{' '}
                - was even more intriguing.
              </p>
            </div>
            <img
              className="w-[40px] lg:w-[82px] top-0 left-[0px] lg:left-[75px] translate-y-[-50%]  absolute"
              src="/images/quote.svg"
            />
            <img
              className="w-[40px] lg:w-[82px] bottom-0 right-[0px] lg:right-[75px] translate-y-[50%] rotate-180 absolute"
              src="/images/quote.svg"
            />
          </section>
          <p className="pt-2">
            So, I embarked on a journey to meet with numerous inspiring women,
            each with promising businesses and compelling stories. What I
            discovered was a common thread among them:{' '}
            <span className="text-brandOrange font-bold">
              most of these women are drawn into entrepreneurship by necessity
              and practical motivations
            </span>
            - a child's allergy, a desire to solve a social problem, or the
            recognition of an unmet need in their everyday lives.
          </p>
          <p className="mt-4">
            Furthermore, women entrepreneurs often exhibit a more cautious
            nature, leading to more operationally efficient businesses. They
            also prioritize building companies with the goal of achieving
            positive social impact beyond pure financial benefits. All of these
            factors contribute to{' '}
            <span className="text-brandOrange font-bold">
              the creation of sustainable business models in the long term.
            </span>
          </p>
          <p className="mt-4 mb-4">
            It was intriguing to discover that despite their diverse backgrounds
            and businesses, these women shared similar challenges that went
            beyond the lack of funding.{' '}
            <span className="text-brandOrange font-bold">
              This realization gives birth to F.A.M.E.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default InfoBox
