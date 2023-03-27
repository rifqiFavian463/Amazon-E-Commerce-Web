import React from "react";
import Slider from "react-slick";
import { TestimonialsData } from "../../data/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reviews() {
  return (
    <div className="w-[80%] mt-[5%] mx-auto text-center">
      <span className="text-[1.8rem] font-[700]">Reviews</span>
      <SliderReviews />
    </div>
  );
}

const SliderReviews = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {TestimonialsData.map((testi) => {
        return (
          <div key={testi.name} className="mt-8">
            <div className="h-56 bg-white rounded-lg md:ml-4 flex justify-center">
              <img src={testi.image} alt="Profile Images" className="border-1 border-white absolute top-2" />
              <div className="flex flex-col justify-evenly mt-14 px-5">
                <p className="text-[.8rem] border-b-2 border-gray-400 pb-4">{testi.comment}</p>
                <span className="font-[600]">{testi.name}</span>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
export default Reviews;
