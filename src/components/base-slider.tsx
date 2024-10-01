import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const NextArrow = (props: any) => {
  return (
    <button
      {...props}
      className={`${props?.className} !hidden md:!flex items-center justify-center before:hidden w-[24px] h-[24px] min-w-[24px] min-h-[24px] md:w-[46px] md:h-[46px] md:min-h-[46px] md:min-w-[46px] !right-[-50px] md:!right-[-100px]`}
    >
      <img
        src="/images/arrow-right.svg"
        className="w-[24px] h-[24px] min-w-[24px] min-h-[24px] md:w-[46px] md:h-[46px] md:min-h-[46px] md:min-w-[46px]"
      />
    </button>
  )
}

const PrevArrow = (props: any) => {
  return (
    <button
      {...props}
      className={`${props?.className} !hidden md:!flex items-center justify-center before:hidden w-[24px] h-[24px] min-w-[24px] min-h-[24px] md:w-[46px] md:h-[46px] md:min-h-[46px] md:min-w-[46px] !left-[-50px] md:!left-[-100px]`}
    >
      <img
        src="/images/arrow-right.svg"
        className="w-[24px] h-[24px] min-w-[24px] min-h-[24px] md:w-[46px] md:h-[46px] md:min-h-[46px] md:min-w-[46px] rotate-180"
      />
    </button>
  )
}

export default function BaseSlider() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  const items = [
    {
      title: 'ACCELERATE',
      desc: 'Foster an entrepreneurial\nand leadership mindset in women',
      img: '../../images/r1.png',
    },
    {
      title: 'INSPIRE',
      desc: ' Showcase success stories\nand good practices',
      img: '../../images/r2.png',
    },
    {
      title: 'EDUCATE',
      desc: ' Maximize female potential through\nknowledge and education',
      img: '../../images/r3.png',
    },
    {
      title: 'CONNECT',
      desc: 'Provide more opportunities\nto network and connect',
      img: '../../images/r4.png',
    },
    {
      title: 'ACCESS',
      desc: ' Provide equal access to mentors,\nmarkets, talent and capital',
      img: '../../images/r5.png',
    },
    {
      title: 'INVEST',
      desc: 'Close the financial gender gap and\nincrease investment activity among women',
      img: '../../images/r6.png',
    },
  ]

  return (
    <div className="w-full mb-8 flex flex-col items-center ">
      <Slider
        className=" w-[300px] h-[300px] md:w-[535px] md:h-[535px] flex flex-col justify-center items-center bg-bgoval bg-cover [&_.slick-slide>div]:h-full "
        {...settings}
      >
        {items?.map((slide) => {
          return (
            <div className="h-full">
              <div className="flex flex-col items-center w-full h-[300px] md:h-[535px] justify-center text-center mx-auto ">
                <span className="font-bold text-brandOrange text-xl lg:text-4xl text-center justify-center ">
                  {slide?.title}
                </span>
                <p className="font-normal text-sm lg:text-lg text-center justify-center whitespace-pre-wrap">
                  {slide?.desc}
                </p>
                <img
                  src={slide?.img}
                  className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-contain  mx-auto justify-center"
                />
              </div>
            </div>
          )
        })}
        {/* <div className="h-full">
          <div className="flex flex-col items-center w-full h-[300px] md:h-[535px] justify-center text-center mx-auto ">
            <span className="font-bold text-brandOrange text-xl text-center justify-center ">
              ACCELERATE
            </span>
            <p className="font-normal text-sm text-center justify-center">
              Foster an entrepreneurial <br />
              and leadership mindset in women
            </p>
            <img
              src="../../images/r1.png"
              className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-contain  mx-auto justify-center"
            />
          </div>
        </div>

        <div className="h-full">
          <div className="flex flex-col items-center w-full h-[300px] md:h-[535px] justify-center text-center mx-auto ">
            <span className="font-bold text-brandOrange text-xl text-center justify-center ">
              INSPIRE
            </span>
            <p className="font-normal text-sm text-center justify-center">
              Showcase success stories <br /> and good practices
            </p>
            <img
              src="../../images/r2.png"
              className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-contain  mx-auto justify-center"
            />
          </div>
        </div>

        <div className="h-full">
          <div className="flex flex-col items-center w-full h-[300px] md:h-[535px] justify-center text-center mx-auto ">
            <span className="font-bold text-brandOrange text-xl text-center justify-center ">
              EDUCATE
            </span>
            <p className="font-normal text-sm text-center justify-center">
              Maximize female potential through
              <br />
              knowledge and education
            </p>
            <img
              src="../../images/r3.png"
              className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-contain  mx-auto justify-center"
            />
          </div>
        </div>
        <div className="h-full">
          <div className="flex flex-col items-center w-full h-[300px] md:h-[535px] justify-center text-center mx-auto ">
            <span className="font-bold text-brandOrange text-xl text-center justify-center ">
              CONNECT
            </span>
            <p className="font-normal text-sm text-center justify-center">
              Provide more opportunities
              <br />
              to network and connect
            </p>
            <img
              src="../../images/r4.png"
              className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-contain  mx-auto justify-center"
            />
          </div>
        </div>
        <div className="h-full">
          <div className="flex flex-col items-center w-full h-[300px] md:h-[535px] justify-center text-center mx-auto ">
            <span className="font-bold text-brandOrange text-xl text-center justify-center ">
              ACCESS
            </span>
            <p className="font-normal text-sm text-center justify-center">
              Provide equal access to mentors,
              <br /> markets, talent and capital
            </p>
            <img
              src="../../images/r5.png"
              className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-contain  mx-auto justify-center"
            />
          </div>
        </div>
        <div className="h-full">
          <div className="flex flex-col items-center w-full h-[300px] md:h-[535px] justify-center text-center mx-auto ">
            <span className="font-bold text-brandOrange text-xl text-center justify-center ">
              INVEST
            </span>
            <p className="font-normal text-sm text-center justify-center">
              Close the financial gender gap and
              <br /> increase investment activity among women
            </p>
            <img
              src="../../images/r6.png"
              className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-contain  mx-auto justify-center"
            />
          </div>
        </div> */}
      </Slider>
    </div>
  )
}
