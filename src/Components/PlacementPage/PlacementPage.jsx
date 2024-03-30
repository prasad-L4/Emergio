import React, { useState } from "react";
import circle from "../Images/circle.png";
import placementcard from "../Images/placementcard.png";
import { placements } from "../Datas/Datas";
import "./PlacementPage.css";
const PlacementPage = () => {
  const [placementcards, setplacementcards] = useState(placements);

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
          <div className="w-[100%] mt-[-4rem] flex justify-center ">
            <div className="flex flex-wrap justify-center sm:justify-between  w-[88%] mt-[-3rem] sm:mt-[2rem] transition-transform duration-300 transform hover:scale-105 ">
              <div className="  flex flex-col flex-wrap w-[90%] lg:w-[40%]">
                <h2 className="text-white text-[39px] md:text-[54px] font-[700]">
                  Placements
                </h2>
                <p className="text-white text-[13px] sm:text-[16px] mt-3">
                  Unlock your potential with our expert-led courses. Dive into
                  the world of game development,designing, programming through
                  hands-on learning and industry insights. From beginners to
                  advanced learners, we're here to fuel your creativity and
                  skill advancement.
                </p>
              </div>
            </div>
          </div>
         
          <div className=" flex flex-wrap justify-center items-center align-middle ml-4  mt-[6rem]">
            {
              placementcards.map((data,index)=>((
                <div className="main-card flex justify-between sm:w-[600px] h-[340px] mt-[-rem] w-[100%] sm:mt-[3rem]">
                <div className="place-card flex transition-transform duration-300 transform hover:scale-105">
                  <div>
                    <img className="w-[300px] md:h-[430px]  md:mt-[-7rem]" src={data.img} alt="" />
                  </div>
                  <div className="mt-[3rem] text-white">
                    <h2 className="text-black font-[700] text-[35px] ">{data.name}</h2>
                    <h3 className="text-[22px] font-[700] ml-6">{data.qlfc}</h3>
                    <h5 className="mt-[3rem] font-[700]">
                      <span className="font-[500]">Placed As:</span>{data.placed}
                    </h5>
                    <h5 className=" font-[700]">
                      <span className="font-[500]">Placed At:</span>
                      {data.at}
                    </h5>
                  </div>
                </div>
              </div>
              )))
            }

          </div>
        </section>
      </main>
    </>
  );
};

export default PlacementPage;
