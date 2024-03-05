import React from "react";
import logofooter from "../Images/logofooter.png";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/login") {
    return null; 
  }
  return (
    <>
      <footer className="w-[100%] bg-indigo-950">
        <div className="flex justify-around items-center flex-wrap gap-4  text-white py-5">
          <div>
            <img src={logofooter} alt="" />
          </div>
          <div className="text-white flex flex-col gap-3 ">
            <h4 className="text-white text-[16px] ">NAVIGATION</h4>
            <p className="text-[14px] text-gray-300 hover:text-orange-600">Learning</p>
            <p className="text-[14px] text-gray-300 hover:text-orange-600 ">Placements</p>
            <p className="text-[14px] text-gray-300 hover:text-orange-600">Hire from Emergio</p>
            <p className="text-[14px] text-gray-300 hover:text-orange-600">Login</p>
          </div>
          <div className=" flex flex-col gap-3">
            <h4 className="text-white text-[16px] ">CONTACT US</h4>
            <div className="flex items-center gap-3">
              <span className="text-[14px] text-gray-300"><FaLocationDot /></span>
              <p className="text-[14px] text-gray-300 hover:text-orange-600">
                Address: Emergio Games <br />
                Ernakulam, Kerala
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-[14px] text-gray-300"><BsTelephoneFill /></span>
              <div className="text-[14px] text-gray-300">
                <p className="hover:text-orange-600">+(91) 1234567890 </p>
                <p className="hover:text-orange-600">+(91) 1234567890 </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-[14px] text-gray-300"><IoMail /></span>
              <p className="hover:text-orange-600"> Email: emergio@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-[16px] ">About Emergio Games</h4>
            <p className="text-[14px] text-gray-300 hover:text-orange-600">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,{" "}
              <br /> sed do Lorem ipsum dolor <br /> sit amet, consectetur{" "}
              <br /> adipiscing elit, sed do
            </p>
          </div>
          <hr className="w-[80%] mt-5 text-gray-700" />
          <p className=" mt-3 text-[14px]">© Copyright 2024, All Rights Reserved by Emergio Games</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
