import React, { useState } from "react";
import circle from "../Images/circle.png";
import mission from "../Images/mission.png";
import aboutimg from "../Images/aboutimg.png";
import { OurTeam } from "../Datas/Datas";
import "./AboutPage.css";
const AboutPage = () => {
  const [team, setteam] = useState(OurTeam);
  return (
    <>
      <main className="bg-black">
        <section>
          <div className="relative">
            <img
              className="w-[320px] h-[300px] left-[0%] ml-[-15rem]"
              src={circle}
              alt=""
            />
          </div>
          <div className="w-[100%] mt-[-4rem] flex justify-center">
            <div className="flex flex-wrap justify-center sm:justify-between  w-[88%] mt-[-3rem] sm:mt-[2rem] ">
              <div className="  flex flex-col flex-wrap w-[90%] lg:w-[40%]">
                <h2 className="text-white text-[39px] md:text-[54px] font-[700]">
                  About Us
                </h2>
                <p className="text-white text-[13px] sm:text-[16px] mt-3">
                  "Who we are Being one of the leading institutes with a vast
                  experience of many more years in game development, we offer
                  the best talents to this industry who successfully complete
                  our well-structured game development courses every year.Unity
                  is the most popular game engine which widely used in the
                  industry and our training program makes the candidate capable
                  of understanding the workflow in detail thereby creating
                  exciting games."
                </p>
              </div>
              <div>
                <img className="lg:mt-[-3rem]" src={aboutimg} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[100%] flex flex-col items-center justify-center">
            <hr className="bg-white w-[90%] sm:mt-[5rem]" />

            <div className="flex justify-center flex-wrap w-[88%] mt-[6rem] ">
              <div>
                {" "}
                <img
                  className="w-[100%] h-[300px] sm:w-[630px] sm:h-[396px] mt-[-4rem] transition-transform duration-300 transform hover:scale-105"
                  src={mission}
                  alt=""
                />
              </div>
              <div className=" flex flex-col flex-wrap w-[90%] lg:w-[40%]">
                <h2 className="text-white text-[39px] md:text-[54px] font-[700]">
                  Our Mission
                </h2>
                <p className="text-white text-[16px] mt-3">
                  "Who we are Being one of the leading institutes with a vast
                  experience of many more years in game development, we offer
                  the best talents to this industry who successfully complete
                  our well-structured game development courses every year.Unity
                  is the most popular game engine which widely used in the
                  industry and our training program makes the candidate capable
                  of understanding the workflow in detail thereby creating
                  exciting games."
                </p>
              </div>
            </div>
          </div>

          {/* our team */}

          <div className="team w-[100%] ">
       
           
            <h2 className="px-16 pt-[3rem] text-[40px] sm:text-[54px] font-[700] text-white">Meet Our Team</h2>
           
            <div className="w-[100%] flex flex-col justify-center items-center">
            <div className="w-[90%] mt-[3rem] flex justify-center gap-16 flex-wrap">
              {team.map((data, index) => (
                <div className="flex flex-wrap mb-10">
                  <div className="flex flex-col justify-center items-center">
                    <img className="transition-transform duration-300 transform hover:scale-105" src={data.img} alt="" />
                    <h4 className="mt-3 text-white text-[22px] font-[600]">{data.name}</h4>
                    <h5 className="text-[20px] text-white font-[600]">{data.job}</h5>
                  </div>
                </div>
              ))}
            </div>
            </div>
          
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
