import React from "react";
import Shade from "../../assets/shade.png";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

function FirstContent() {
  return (
    <div className="grid md:grid-cols-2 w-[80%] mx-auto mt-[7%] gap-x-16">
      <LeftSide />
      <RightSide />
    </div>
  );
}

const LeftSide = () => {
  return (
    <div className="col-span-1 flex flex-col justify-around sm:text-center sm:items-center sm:h-56">
      <span className="text-[1.8rem] font-[700]">VIRTUAL TRY-ON</span>
      <span className="text-[1.4rem]">
        NEVER BUY THE WRONG <br /> SHADE AGAIN!
      </span>
      <span className="text-[1.4rem] font-[700]">
        Try Now!
        <img src={Shade} alt="Splash Design" className="w-36" />
      </span>
    </div>
  );
};

const RightSide = () => {
  const FIRST_IMAGE = {
    imageUrl: Before,
  };
  const SECOND_IMAGE = {
    imageUrl: After,
  };
  return (
    <div className="col-span-1">
      <ReactBeforeSliderComponent firstImage={FIRST_IMAGE} secondImage={SECOND_IMAGE} />
    </div>
  );
};
export default FirstContent;
