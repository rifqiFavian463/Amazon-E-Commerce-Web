import React from "react";
import Logo from "../../assets/logo.png";
import { SiGooglemaps } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdGroup } from "react-icons/md";
import { BiLink } from "react-icons/bi";

function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-5 sm:grid-cols-2 mt-36 px-10 gap-x-12 sm:gap-y-10 border-t-2 border-white pt-10">
        <div className="flex col-span-1 sm:hidden">
          <img src={Logo} className="imgLogo h-10" alt="Flowbite Logo" />
          <span className=" whitespace-nowrap dark:text-white brandName ml-4 sm:text-sm">Amazon</span>
        </div>
        <div className="flex flex-col col-span-1 gap-y-4">
          <span className="text-[1.2rem] font-[500]">Contact</span>
          <span className="flex text-[.8rem] gap-x-3">
            <SiGooglemaps className="text-[1.4rem]" /> 111 north avenue Orlando, FL 32801
          </span>
          <span className="flex text-[.8rem] gap-x-3">
            <BsFillTelephoneFill className="text-[1.1rem]" /> 325-306-4415
          </span>
          <span className="flex text-[.8rem] gap-x-3">
            <AiFillMail className="text-[1.3rem]" /> 325-306-4415
          </span>
        </div>
        <div className="flex flex-col col-span-1 gap-y-4">
          <span className="text-[1.2rem] font-[500]">Account</span>
          <span className="flex text-[.8rem] gap-x-3">
            <RiLoginBoxFill className="text-[1.4rem]" />
            Sign In
          </span>
        </div>
        <div className="flex flex-col col-span-1 gap-y-4">
          <span className="text-[1.2rem] font-[500]">Account</span>
          <span className="flex text-[.8rem] gap-x-3">
            <MdGroup className="text-[1.4rem]" />
            About Us
          </span>
        </div>
        <div className="flex flex-col col-span-1 gap-y-4">
          <span className="text-[1.2rem] font-[500]">Account</span>
          <span className="flex text-[.8rem] gap-x-3">
            <BiLink className="sm:text-[2.2rem] text-[1.4rem]" />
            Safety Privacy & Terms
          </span>
        </div>
      </div>
      <span className="mt-12 mb-10 sm:text-center">Copyright ©2022 by Amazon, Inc. All rights reserved.</span>
    </div>
  );
}

export default Footer;
