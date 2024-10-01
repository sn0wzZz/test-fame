import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class FooterSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
    }

    const img = [
      '../../images/founder.png',
      '../../images/angel.png',
      '../../images/mentor.png',
      '../../images/explorer.png',
    ]
    return (
      <div className="w-full mb-8 flex flex-col items-center ">
        <Slider
          className="w-full max-w-[300px]  h-[300px] lg:max-w-[545px] lg:h-[545px] flex flex-col items-center "
          {...settings}
        >
          {img?.map((img) => (
            <img
              key={img}
              src={img}
              alt="sliderimage"
              className="flex flex-col items-center w-full max-w-[300px] h-[300px] lg:max-w-[545px] object-cover lg:h-[545px]"
            />
          ))}
        </Slider>
      </div>
    )
  }
}
