import React from "react";
import circle from "../Images/circle.png";
import "./AboutCards.css";
const AboutCards = () => {
  return (
    <>
      <section className="main-cards w-full  flex  justify-center items-center">
        <img
          className="w-[260px] h-[250px] mt-[-50rem] md:mt-[-25rem] ml-[-6rem]"
          src={circle}
          alt=""
        />
        <div className="text-center flex flex-col ml-[-6rem] mt-[3rem] justify-center items-center">
          <h2 className="abt-title text-[white]  text-[32px]">
            Dive into the Ultimate Gaming <br /> Universe
          </h2>
          <p className=" abt-text  mt-[2rem]  w-[53%]">
            With Emergio, you can bring amazing real-time experiences to life
            using the world’s most <br /> advanced real-time 3D creation
            tool.From first projects to the most demanding challenges, our br
            free and accessible resources and inspirational community empower
            everyone to realize their ambitions.
          </p>
          <div className="line sm:ml-[0] ml-[-1.5rem] w-[100%] mt-[5rem] flex justify-evenly">
            <div className=" w-[100%] sm:w-[150] lg:w-[320px] h-[4px] shadow-xl bg-gradient-to-r from-blue-700 to-blue-400"></div>
            <div className=" w-[150px]hidden sm:block lg:w-[320px] h-[4px] bg-gradient-to-r from-blue-700 to-blue-400"></div>
            <div className=" w-[150px] hidden sm:block lg:w-[320px] h-[4px] bg-gradient-to-r from-blue-700 to-blue-400"></div>
          </div>
          <div className="w-[100%] sm:ml-0 ml-[-1.5rem] flex flex-wrap justify-evenly">
            <div className="mt-[3rem] ">
            <h3 className="">Learn from Emergio</h3>
            <p className="text-white mt-[2rem]">With hundreds of hours of free online learning <br /> content, an extensive library of webinars, and <br /> options for instructor-led training, we have a <br /> way to learn that's right for you.</p>
            </div>
            <div className="mt-[3rem]">
                <h3 >Join the Community</h3>
                <p className="text-white mt-[2rem]">Unreal creators are the true power behind <br /> Unreal Engine. Be part of a community that <br /> builds cutting-edge experiences, and supports <br /> each other along the way.</p>
            </div>
            <div className="mt-[3rem] ">
                <h3>Get Support</h3>
                <p className="text-white mt-[2rem]">Explore comprehensive reference <br /> documentation, instructional guides, <br /> community-based support, and options for <br /> dedicated professional support.</p>
            </div>
          

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCards;
