import React, { useState } from "react";
import circle from "../Images/circle.png";
import { latestcards } from "../Datas/Datas";
import "./AboutCards.css";
const AboutCards = () => {
  const [latestCards, setlatestCards] = useState(latestcards);
  return (
    <>
      <section  className="main-cards w-full flex flex-col  justify-center items-center">
        <div className="flex w-[100%] justify-between">
          <img className="w-[160px] rotate- h-[200px]  " src={circle} alt="" />
          <img
            className="w-[0] invisible rotate- h-[250px] flex align-bottom   "
            src={circle}
            alt=""
          />
        </div>
        <div className="text-center flex flex-col   mt-[-10rem] justify-center items-center">
          <h2    className="abt-title text-[white]  text-[32px]">
            Dive into the Ultimate Gaming <br /> Universe
          </h2>
          <p className=" abt-text  mt-[2rem]  w-[53%]">
            With Emergio, you can bring amazing real-time experiences to life
            using the world’s most <br /> advanced real-time 3D creation
            tool.From first projects to the most demanding challenges, our br
            free and accessible resources and inspirational community empower
            everyone to realize their ambitions.
          </p>
          <div   className="w-[100%]  mt-[4rem] mb-5 gap-8 flex flex-wrap justify-center  sm:justify-evenly items-center ">
            <div className="mt-3 sm:flex sm:justify-start sm:flex-col">
              <div className="line w-[100%] sm:w-[320px] h-[4px] shadow-xl bg-gradient-to-r from-blue-700 to-blue-400"></div>
              <h3 className=" mt-[3rem] text-center md:text-start">
                Learn from Emergio
              </h3>
              <p className="text-white text-[12px] md:text-[18px] mt-[2rem] text-center md:text-start flex flex-wrap">
                With hundreds of hours of free online learning <br /> content,
                an extensive library of webinars, and <br /> options for
                instructor-led training, we have a <br /> way to learn that's
                right for you.
              </p>
              <button className="w-[187px] h-[59px] mt-[2rem] border-blue-800 border-4 text-white items-start">Join Now</button>
            </div>
            <div  className="  mt-3 sm:flex sm:justify-start sm:flex-col">
              <div className="line w-[100%] sm:w-[320px] h-[4px] shadow-xl bg-gradient-to-r from-blue-700 to-blue-400"></div>
              <h3 className=" mt-[3rem] text-center md:text-start">
                Learn from Emergio
              </h3>
              <p className="text-white text-[12px] md:text-[18px] mt-[2rem] text-center md:text-start flex flex-wrap">
                With hundreds of hours of free online learning <br /> content,
                an extensive library of webinars, and <br /> options for
                instructor-led training, we have a <br /> way to learn that's
                right for you.
              </p>
              <button className="w-[187px] h-[59px] mt-[2rem] border-blue-800 border-4 text-white items-start">Join Now</button>
            </div>
            <div className="mt-1 sm:flex sm:justify-start sm:flex-col">
              <div className="line w-[100%] sm:w-[320px] h-[4px] shadow-xl bg-gradient-to-r from-blue-700 to-blue-400"></div>
              <h3 className=" mt-[3rem] text-center md:text-start">
                Learn from Emergio
              </h3>
              <p className="text-white text-[12px] md:text-[18px] mt-[2rem] text-center md:text-start flex flex-wrap">
                With hundreds of hours of free online learning <br /> content,
                an extensive library of webinars, and <br /> options for
                instructor-led training, we have a <br /> way to learn that's
                right for you.
              </p>
              <button className="w-[187px] h-[59px]  mt-[2rem] border-blue-800 border-4 text-white items-start">Join Now</button>
            </div>
          </div>
        </div>
        <div className="flex w-[100%] justify-between">
          <img
            className="w-[0] invisible  rotate-180 h-[250px]  "
            src={circle}
            alt=""
          />
          <img
            className="w-[180px] mt-[4.2rem]  rotate-180 h-[180px]  flex align-bottom   "
            src={circle}
            alt=""
          />
        </div>
      </section>
      <section className="w-[100%] px-14 bg-white">
        <h4 className="md:text-start  text-center  mt-[2rem]">
          The latest from Emergio
        </h4>
        <hr className="w-[90%] mt-3 " />
        <div   className="flex justify-around  flex-wrap">
          {latestCards.map((data, index) => (
            <div className="w-[430px] shadow-xl  mb-14  mt-[2rem] transition-transform duration-300 transform hover:scale-105">
              <img className="w-[410px] px-4 py-6  transition-transform duration-300 transform hover:scale-105 h-[246px]" src={data.img} alt="" />
              <p className="mt-3 px-4 font-semibold">News</p>
              <h4 className="mt-3 px-4 ">Emergio 5.3 is now available!</h4>
              <p className="text mt-3 pb-4 px-4  ">
                This release brings numerous wide-ranging improvements, together
                with some exciting new Experimental features, as we continue to
                expand UE5’s functionality and potential for game developers and
                creators across industries. Find out what’s new. 
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutCards;
