import React from "react";
import logofooter from "../Images/logofooter.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }
  return (
    <>
      <footer className="footer-sec bg-[#19292E] w-[100%] ">
        <div className="flex justify-around items-center flex-wrap gap-4  text-white py-5">
          <div>
            <img src={logofooter} alt="" />
          </div>
          <div className="text-white flex flex-col gap-3 ">
            <h4 className="text-white text-[16px] ">NAVIGATION</h4>
            <p className="text-[14px] text-gray-300 hover:text-[#21C8ED] cursor-pointer">
              <Link to="/">Home</Link>
            </p>
            <p className="text-[14px] text-gray-300 hover:text-[#21C8ED] cursor-pointer">
              <Link to="/">Courses</Link>
            </p>
            <p className="text-[14px] text-gray-300 hover:text-[#21C8ED] cursor-pointer">
              <Link to="/placement"> Placements </Link>
            </p>
            <p className="text-[14px] text-gray-300 hover:text-[#21C8ED] cursor-pointer">
              <Link to="/hirefrom"> Hire from Emergio </Link>
            </p>
            <p className="text-[14px] text-gray-300 hover:text-[#21C8ED] cursor-pointer">
              <Link to="/entertainment"> Entertainment </Link>
            </p>
            <p className="text-[14px] text-gray-300 hover:text-[#21C8ED] cursor-pointer">
              <Link to="/about">About Us </Link>
            </p>
            <p className="text-[14px] text-gray-300 hover:text-[#21C8ED] cursor-pointer">
              <Link to="/career">Career </Link>
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h4 className="text-white text-[16px] ">CONTACT US</h4>
            <div className="flex items-center gap-3">
              <span className="text-[14px] text-gray-300">
                <FaLocationDot />
              </span>
              <p className="text-[14px] text-gray-300 hover:text-[#21C8ED] cursor-pointer">
                Address: Emergio Games <br />
                Ernakulam, Kerala
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-[14px] text-gray-300">
                <BsTelephoneFill />
              </span>
              <div className="text-[14px] text-gray-300">
                <p className="hover:text-[#21C8ED] cursor-pointer">
                  +(91) 1234567890{" "}
                </p>
                <p className="hover:text-[#21C8ED] cursor-pointer">
                  +(91) 1234567890{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-[14px] text-gray-300">
                <IoMail />
              </span>
              <p className="hover:text-[#21C8ED] cursor-pointer">
                {" "}
                Email: emergio@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-[16px] ">About Emergio Games</h4>
            <p className=" text-[14px] text-gray-300 hover:text-[#21C8ED] cursor-pointer">
              "Who we are Being one of the leading <br /> institutes with a vast
              experience of <br /> many more years in game development,<br /> we offer the
              best talents to this industry <br /> who successfully complete our
              well- <br />structured game development courses <br /> every year.
            </p>
            <div className="flex gap-5  mt-5">
              <a href="tel:+918606332522">
                {" "}
                <IoLogoWhatsapp className="hover:text-[#21C8ED] transition-all text-[28px]" />
              </a>
              <a href="https://www.linkedin.com/company/emergiogames/">
                {" "}
                <ImLinkedin className="hover:text-[#21C8ED] transition-all text-[27px]" />
              </a>
              <a href="https://www.instagram.com/emergio_games?igsh=dGVpenBzNG9lOWpz">
                {" "}
                <AiFillInstagram className="hover:text-[#21C8ED] transition-all text-[28px]" />
              </a>
              <a href="https://www.youtube.com/@emergioedutech">
                <IoLogoYoutube className="hover:text-[#21C8ED] transition-all text-[28px]" />
              </a>
            </div>
          </div>
          <hr className="w-[80%] mt-5 text-gray-700" />
          <p className=" mt-3 text-[14px]">
            © Copyright 2024, All Rights Reserved by Emergio Games
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
