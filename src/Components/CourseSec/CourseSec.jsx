import React from "react";
import pc from "../Images/pc.png";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import "./CourseSec.css";

const CourseSec = () => {
  return (
    <>
      <section className="relative">
        <img className="w-full sm:h-auto h-[400px]" src={pc} alt="" />
        <div className="absolute top-1/2 left-1/2   transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-4xl font-bold mb-4 text-[13px] md:mt-[0] mt-[3rem] md:text-[39px]">
            Play, Learn, and Build Games <br />- All in One Place
          </h2>
          <p className="text-[9px] mb-6 mt-[-1rem] md:mt-[3rem] md:text-[15px]">
            Creators and developers around the world hone their real-time skills
            in remarkable, groundbreaking ways. Check out some of our favorite
            recent projects from real Unreal Engine users across industries.
          </p>
          <button className="btn md:w-[187px] sm:h-[59px] w-[90px] h-[40px] text-[10px] text-center  bg-slate-950 border-blue-800 border-4  text-white font-bold py-2 px-4 md:mt-[2rem] rounded">
            Join Now
          </button>
        </div>
        <div className="  flex absolute w-[100%] justify-center flex-col ">
          <div className="crs-cards   flex justify-around flex-wrap  items-center mt-[-17.8rem] md:mt-[-15rem] lg:mt-[13.5]  w-[100%] h-[auto] z-10">
            <div className=" mt-[15rem] lg:mt-[13rem] md:mt-[15rem]">
              <img src={card1} alt="" />
              <h2 className="text-center text-white text-[15px] sm:text-[28px] mt-1">
                Game Developement
              </h2>
            </div>
            <div className=" mt-3 lg:mt-[13rem] md:mt-[15rem]">
              <img src={card2} alt="" />
              <h2 className="text-center text-white text-[15px] sm:text-[28px] mt-1">
                UIUX
              </h2>
            </div>
            <div className=" mt-3 lg:mt-[13rem] md:mt-[4rem]">
              <img src={card3} alt="" />
              <h2 className="text-center text-white text-[15px] sm:text-[28px] mt-1">
                Digital Marketing
              </h2>
            </div>
          </div>
          <div>
            <button className="btn absolute   left-1/2 md:w-[187px] flex justify-center items-center  sm:h-[59px] w-[90px] h-[40px] text-[15px] text-center  bg-slate-950 border-blue-800 border-4  text-white font-normal py-2 px-4 md:mt-[3rem] rounded">
              View Course
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseSec;
