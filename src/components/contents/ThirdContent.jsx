import React from "react";
import TestimonialHero from "../../assets/TestimonialHero.png";
function ThirdContent() {
  return (
    <div className="grid grid-cols-4 w-[95%] sm:w-[80%] mx-auto mt-[5%] sm:mt-10 sm:grid-cols-1">
      <div className="LeftSide col-span-1 flex flex-col justify-end sm:items-center sm:text-center">
        <span className="text-[1.8rem] font-[700]">TOP RATED</span>
        <span className="text-[0.8rem] mt-[.7rem]">SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY EXCERCISE JOY MAN CHILDREN REJOICED</span>
      </div>
      <div className="Center col-span-2 flex justify-center">
        <img src={TestimonialHero} alt="Testimonial Hero" className="w-[27rem]" />
      </div>
      <div className="RightSide col-span-1 flex flex-col justify-end items-end sm:items-center sm:text-center">
        <span className="text-[1.8rem] font-[700]">100K</span>
        <span className="text-[.8rem] mt-[.7rem]">HAPPY CUSTOMERS WITH US</span>
      </div>
    </div>
  );
}

export default ThirdContent;
