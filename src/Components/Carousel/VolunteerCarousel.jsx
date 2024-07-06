import React from 'react';
import Slider from 'react-slick';
import Card from '../Cards/VolunteerCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VolunteerCarousel = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="carousel-card">
          <Card image={slide.image} title={slide.title} date={slide.date} location={slide.location} description={slide.description} register={slide.register} />
        </div>
      ))}
    </Slider>
  );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} z-10`}
        style={{ ...style, display: "block", right: "10px", top: "calc(50% - 20px)", backgroundColor: "black", borderRadius: "100%",  }}
        onClick={onClick}
      />
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} z-10 text-black`}
        style={{ ...style, display: "block", left: "10px", top: "calc(50% - 20px)", backgroundColor: "black", borderRadius: "100%"}}
        onClick={onClick}
      />
    );
  };

export default VolunteerCarousel;