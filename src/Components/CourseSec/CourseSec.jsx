import React, { useState } from "react";
import pc from "../Images/pc.png";
import { coursecard } from "../Datas/Datas";

import "./CourseSec.css";

const CourseSec = () => {
  const [course, setcourse] = useState(coursecard);
  return (
    <>
      <section className="relative z-0 flex flex-col justify-center">
        <img className="w-full sm:h-auto h-[400px] relative" src={pc} alt="" />
        <div className="absolute left-1/2 top-1/2 flex-col justify-center items-center mt-[-3rem] sm:mt-[-3rem] md:mt-[-2rem] lg:mt-[-3rem] transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2  className="text-4xl font-bold mb-4 text-[13px] md:text-[20px] lg:text-[30px]">
            Play, Learn, and Build Games <br />- All in One Place
          </h2>
          <p  className="text-[9px] mb-6 mt-[-1rem] md:mt-[3rem] md:text-[15px]">
            Creators and developers around the world hone their real-time skills
            in remarkable, groundbreaking ways. Check out some of our favorite
            recent projects from real Unreal Engine users across industries.
          </p>
          <button className="btn md:w-[187px] mt-[1rem] md:mt-[3rem] sm:h-[59px] w-[90px] h-[40px] text-[10px] text-center bg-slate-950 border-blue-800 border-4 text-white font-bold py-2 px-4 rounded">
            Join Now
          </button>
        </div>
        <div className="crs-cards"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950 pointer-events-none"></div>
      </section>
      <div  className=" bg-indigo-950  flex flex-col justify-center">
        <div className=" flex  justify-center lg:mt-[rem] gap-5 items-center flex-wrap w-[100%] ">
          {course.map((data, index) => (
            <div className=" flex justify-center items-center flex-col ">
              <img
                className="crs-img w-[300px] h-[320px] md:w-[373px] md:h-[376px]"
                src={data.img}
                alt=""
              />
              <h4 className="text-white text-[28px] mb-[2rem]">{data.title}</h4>
            </div>
          ))}
        </div>
        <div className="flex justify-center align-middle items-center">
          <button className="btn md:w-[187px] mt-[1rem] md:mt-[2rem] mb-6 sm:h-[59px] w-[100px] h-[40px] text-[14px] text-center bg-slate-950 border-blue-800 border-4 text-white font-bold py-2 px-4 rounded">
            Join Now
          </button>
        </div>
      </div>
      <section className="cnct w-[100%]   ">
        <div className="flex gap-6  py-[10rem] justify-around flex-wrap">
          <div className="flex flex-col  mb-[3rem] ">
            <h4 className="text-[40px] sm:text-[50px] text-white">
              Free download— <br /> includes <br /> every feature!
            </h4>
            <p className="text-white mt-5">
              Emergio comes fully loaded and <br />
              production-ready out of the box, with <br />
              every feature and full source code <br />
              access included.
            </p>
          </div>
          <div className=" px-7 flex flex-wrap  flex-col border-white text-white hover:bg-white transition-colors duration-300 hover:text-black border-4 sm:w-[372px] sm:h-[418px] w-[90%]  h-auto">
            <p className="text-[16px] mt-3">Get Emergio</p>
            <p className="text-[28px] mt-7">Get Started Now</p>
            <p className="text-[18px] mt-8  ">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore Ut enim ad minim{" "}
              <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo con Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatu
            </p>
          </div>
          <div className="px-7 flex flex-wrap flex-col text-white border-white border-4 sm:w-[372px] sm:h-[418px] w-[90%] h-auto transition-colors duration-300 hover:bg-white hover:text-black">
  <p className="text-[16px] mt-3  hover:text-black">Get Emergio</p>
  <p className="text-[28px]  mt-7">Get Started Now</p>
  <p className="text-[18px] mt-8 ">
    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
  </p>
</div>
        </div>
      </section>
    </>
  );
};

export default CourseSec;
