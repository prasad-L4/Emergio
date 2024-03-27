import React, { useEffect, useState } from "react";
import videos from "../Videos/videos.mp4";
import "./VideoSec.css";
import Navbar from "../Navbar/Navbar";
const VideoSec = () => {
  const [scrollY, setScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("transparent");
  const [textTransform, setTextTransform] = useState(0);
  const [videoScale, setVideoScale] = useState(1);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollY(scrolled);

      const calculatedScale = 1 - scrolled * 0.001;
      setVideoScale(calculatedScale);

      if (scrolled > 0) {
        setBgColor("#050A16");
      } else {
        setBgColor("transparent");
      }

      const calculatedTextTransform = -scrolled * 5.5;
      setTextTransform(
        calculatedTextTransform > 0 ? 0 : calculatedTextTransform
      );
    };

    const interval = setInterval(() => {
      setShowText((prevShowText) => !prevShowText);
    }, 4000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="video-sec relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      
     
      <div
        className={`absolute top-1/4 px-14 z-10 text-white transition-opacity ${
          showText ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translateY(${textTransform}px)`,
          transition: "opacity 1s ease-in-out, transform 0.5s ease-in-out",
        }}
      >
        <div className="first">
          <h2 className="vdo-title text-[17px] sm:mt-0 mt-[-1.7rem] sm:text-[25px] md:text-[28px] lg:text-[54px] font-bold mb-4">
          Play, Learn,
and Build Games <br />
- All in One Place
          </h2>
          <p className="mb-6  mt-[-1rem] sm:mt-[2rem] lg:mt-[3rem]  text-[11px] sm:text-[14px] md:text-[20px] lg:text-[22px]">
          Play your favorite titles, discover new ones, learn the craft of game development, <br />
and build your own games—all conveniently accessible under one digital roof.
          </p>
          <button className="vdo-icon bg-transparent w-[140px] h-[50px] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4">
          CONTACT US
          </button>
        </div>
      </div>

      <div
        className={`absolute top-1/4 px-14 z-10 text-white transition-opacity ${
          showText ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transform: `translateY(${textTransform}px)`,
          transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
        }}
      >
        <div className="scnd">
          <h2 className="vdo-title text-[17px] sm:mt-0 mt-[-1.7rem] sm:text-[25px] md:text-[28px] lg:text-[54px] font-bold mb-4">
          Dive into the 
Ultimate Gaming <br />
Universe
          </h2>
          <p className="mb-6  mt-[-1rem] sm:mt-[2rem] lg:mt-[3rem]  text-[11px] sm:text-[14px] md:text-[20px] lg:text-[22px]">
          Explore a universe filled with immersive worlds, gripping stories, and limitless <br />
possibilities.Engage, compete, and collaborate in a realm made for gamers.
          </p>
          <button className="vdo-icon bg-transparent w-[140px] h-[50px] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4">
          CONTACT US
          </button>
        </div>
      </div>

      {/* video section */}
      <video
        autoPlay
        loop
        muted
        className="video w-full relative z-0"
        style={{ transform: `scale(${videoScale})` }}
      >
        <source src={videos} type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoSec;
