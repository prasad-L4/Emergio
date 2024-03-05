import React, { useEffect, useState } from "react";
import video from "../Videos/video.mp4";
import "./VideoSec.css";
const VideoSec = () => {
  const [scrollY, setScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("transparent");
  const [textTransform, setTextTransform] = useState(0);
  const [videoScale, setVideoScale] = useState(1);

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

      const calculatedTextTransform = -scrolled * 2.5;
      setTextTransform(
        calculatedTextTransform > 0 ? 0 : calculatedTextTransform
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: bgColor }}>
      <div
        className="absolute top-1/4 px-14 z-10 text-white"
        style={{ transform: `translateY(${textTransform}px)` }}
      >
        <h2 className="vdo-title text-[20px] md:text-[28px] lg:text-[42px] font-bold mb-4">
          Join Us on the Journey to <br /> Gaming Excellence
        </h2>
        <p className="mb-6 mt-[2rem] lg:mt-[3rem] text-[14px] md:text-[20px] lg:text-[24px]">
          Ready for gaming thrills? Dive in now! Discover <br /> adventures,
          puzzles, and challenges awaiting your <br /> play.
        </p>
        <button className="bg-orange-500 hidden md:block rounded-[8px] border-[2px] border-cyan-700 mt-[2rem] hover:bg-blue-600 text-white font-thin py-2 px-4">
          GET A QUOTE
        </button>
      </div>
      <video
        autoPlay
        loop
        muted
        className="video w-full relative z-0"
        style={{ transform: `scale(${videoScale})` }}
      >
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoSec;
