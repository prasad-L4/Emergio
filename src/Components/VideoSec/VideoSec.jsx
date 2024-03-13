import React, { useEffect, useState } from "react";
import videos from "../Videos/videos.mp4";
import "./VideoSec.css";
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
      className="relative overflow-hidden"
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
          <h2 className="vdo-title text-[17px] sm:mt-0 mt-[-1.7rem] sm:text-[25px] md:text-[28px] lg:text-[42px] font-bold mb-4">
            Join Us on the Journey to <br /> Gaming Excellence
          </h2>
          <p className="mb-6  mt-[-1rem] sm:mt-[2rem] lg:mt-[3rem]  text-[11px] sm:text-[14px] md:text-[20px] lg:text-[24px]">
            Ready for gaming thrills? Dive in now! Discover <br /> adventures,
            puzzles, and challenges awaiting your <br /> play.
          </p>
          <button className="bg-orange-500 hidden md:block rounded-[8px] border-[2px] border-cyan-700 mt-[2rem] hover:bg-blue-600 transition-colors duration-500 text-white font-thin py-2 px-4">
            GET A QUOTE
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
          <h2 className="vdo-title text-[17px] sm:mt-0 mt-[-1.7rem] sm:text-[25px] md:text-[28px] lg:text-[42px] font-bold mb-4">
            Jokgdfkjghkfj <br /> Gfhdkjgfgkjf
          </h2>
          <p className="mb-6  mt-[-1rem] sm:mt-[2rem] lg:mt-[3rem]  text-[11px] sm:text-[14px] md:text-[20px] lg:text-[24px]">
            Ready fkjsfkdgjhfgDiscover <br /> adventures, puzzles,r <br /> play.
          </p>
          <button className="bg-orange-500 hidden md:block rounded-[8px] border-[2px] border-cyan-700 mt-[2rem] hover:bg-blue-600 transition-colors duration-500 text-white font-thin py-2 px-4">
            GET A QUOTE
          </button>
        </div>
      </div>

      {/* video section */}
      <video
        autoPlay
        loop
        className="video w-full relative z-0"
        style={{ transform: `scale(${videoScale})` }}
      >
        <source src={videos} type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoSec;
