import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg2 from '../assets/CarouselHome.png';
import bg3 from '../assets/CarouselHome.png';
import bg4 from '../assets/CarouselHome.png';
import bg5 from '../assets/CarouselHome.png';

const CarouselHome = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const slideContent = [
    { bg: bg2, text: "Empower Your Network!\nConnect with the best and brightest.\nAt Altruisty, we bridge the gap between ambition and achievement. Build lasting connections with mentors, peers, and industry leaders." },
    { bg: bg3, text: "Empower Your Network!\nConnect with the best and brightest.\nAt Altruisty, we bridge the gap between ambition and achievement. Build lasting connections with mentors, peers, and industry leaders." },
    { bg: bg4, text: "Empower Your Network!\nConnect with the best and brightest.\nAt Altruisty, we bridge the gap between ambition and achievement. Build lasting connections with mentors, peers, and industry leaders." },
    { bg: bg5, text: "Empower Your Network!\nConnect with the best and brightest.\nAt Altruisty, we bridge the gap between ambition and achievement. Build lasting connections with mentors, peers, and industry leaders." },
  ];

  return (
    <Slider {...settings}>
      {slideContent.map((slide, index) => (
        <div key={index} className="relative h-96">
          <img src={slide.bg} alt="carousel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5">
            <div className="text-center text-white text-lg md:text-2xl lg:text-3xl font-semibold space-y-4">
              {slide.text.split('\n').map((line, idx) => (
                <p key={idx} className="">{line}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

// Custom arrow components to bring arrows inside the image
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{ ...style, display: "block", right: "10px", top: "calc(50% - 20px)" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{ ...style, display: "block", left: "10px", top: "calc(50% - 20px)" }}
      onClick={onClick}
    />
  );
};

export default CarouselHome;
