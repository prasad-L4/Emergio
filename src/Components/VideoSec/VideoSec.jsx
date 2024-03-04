import React, { useEffect, useState } from "react";
import video from "../Videos/video.mp4";
import './VideoSec.css'
const VideoSec = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="relative">
      <video autoPlay loop muted className="video w-full relative z-0" style={{ transform: `scale(${1 - scrollY * 0.001})` }}>
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute top-1/4 px-14 z-10 text-white">
        <h2 className="vdo-title text-[28px] lg:text-[42px] font-bold mb-4">Join Us on the Journey to <br /> Gaming Excellence</h2>
        <p className="mb-6 mt-[2rem] lg:mt-[3rem] lg:text-[24px]">
          Ready for gaming thrills? Dive in now! Discover <br /> adventures, puzzles,
          and challenges awaiting your <br /> play.
        </p>
        <button className="bg-orange-500 rounded-[8px] border-[2px] border-cyan-700 mt-[2rem] hover:bg-blue-600 text-white font-thin py-2 px-4">GET A QUOTE</button>
      </div>
    </section>
  );
};

export default VideoSec;
