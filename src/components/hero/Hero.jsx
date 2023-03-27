import React from "react";
import "./Hero.css";
import HeroImg from "../../assets/Hero.png";
import { BsHandbagFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

// Hero Component
function Hero() {
  return (
    <div className="hero grid md:grid-cols-4 sm:grid-cols-2  h-auto sm:mt-[4%]">
      <LeftPart />
      <CenterPart />
      <RightPart />
    </div>
  );
}

// Left Part
const LeftPart = () => {
  return (
    <div className="grid col-span-1 left gap-y-24 md:pl-8 md:pt-4 sm:pl-[10%] box-border sm:pr-[14%]">
      <div className="row-span-1 md:font-[600] md:leading-10 md:text-[1.6rem] sm:text-[.8rem] sm:font-[600] text-black">
        <span>
          SKIN
          <br />
          PROTECTION
          <br />
          CREAM
        </span>
      </div>
      <div className="row-span-2">
        <span className="md:font-[800] md:text-[2.6rem] md:leading-normal sm:leading-8 sm:font-[700] sm:text-[1.4rem] text-black">
          Trendy <br /> Collection
        </span>
        <br />
        <span className="text-black md:text-[1.1rem] text-[1rem]">Seedily say has suitable aliposal and boy. Exercise joy man children rejoiced.</span>
      </div>
    </div>
  );
};

// Center Part
const CenterPart = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 649px)" });
  return (
    <div className="flex col-span-2 md:col-span-2 center relative justify-center">
      <motion.div
        initial={{ bottom: "5rem" }}
        whileInView={{ bottom: isMobile ? "4rem" : "3.2rem" }}
        transition={{
          type: "spring",
          duration: 3,
        }}
        className=" bg-cyan-400 md:w-[30rem] md:h-[30rem] sm:w-[15rem] sm:h-[15rem] rounded-full absolute -z-10 sm:right-[7%]"
      ></motion.div>
      <motion.img
        initial={{ bottom: isMobile ? "-4rem" : "-1rem" }}
        whileInView={{ bottom: isMobile ? "-3.7rem" : "2rem" }}
        transition={{
          type: "spring",
          stiffness: 3,
          duration: 0.7,
        }}
        src={HeroImg}
        alt="Model Image"
        className="md:w-[32rem] sm:h-[14rem] sm:right-[10%] relative"
      />
      <div className="bg-white flex rounded-full md:w-14 md:h-14 sm:w-10 sm:h-10 sm:border-[4px] absolute z-20 items-center justify-center border-[6px] border-gray-800 md:bottom-[30%] md:right-[25%] sm:bottom-[0] sm:right-[90%]">
        <BsHandbagFill className="md:text-[1.7rem] sm:text-[1.1rem] relative" />
      </div>
      <div className="bg-white flex rounded-[15px] absolute h-12 z-20 items-center justify-around md:bottom-[31%] md:right-[1%] md:p-[1.7%] sm:p-[10px] sm:bottom-[0]">
        <span className="text-[.7rem]">
          Best Product <br /> Offers
        </span>
        <div className="border-cyan-400 border-2 rounded-full p-2 ml-4">
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

// Right Part
const RightPart = () => {
  return (
    <div className="sm:flex right sm:col-span-3 grid justify-around md:ml-[28%] md:pt-4 sm:pt-[5%] md:mr-[20%]">
      <div className="row-span-1 md:text-end">
        <span className="md:font-[800] md:text-[2.6rem] md:leading-normal sm:font-[700] sm:text-[1.9rem] text-black">1.5m</span>
        <br />
        <span className="text-black md:text-[1.1rem] text-sm">Monthly Traffic</span>
      </div>
      <div className="row-span-1 md:text-end">
        <span className="md:font-[800] md:text-[2.6rem] md:leading-normal sm:font-[700] sm:text-[1.9rem] text-black">100k</span>
        <br />
        <span className="text-black md:text-[1.1rem] text-sm">Happy Customers</span>
      </div>
    </div>
  );
};
export default Hero;
