import React, { useState } from "react";

import { casinogames } from "../Datas/Datas";
import circle from "../Images/circle.png";
import  Form from './Form'
const EntertainmentPage = () => {
  const [entertainmentCard, setentertainmentCard] =
    useState(casinogames);
    const [showMdal, setshowModal] = useState(false)
    const modalclosed=()=>{
        setshowModal(false)
      }
  return (
    <>
      <main className="bg-black ">
        <section>
          <div className="relative">
            <img
              className="w-[320px] h-[300px] left-[0%] ml-[-15rem]"
              src={circle}
              alt=""
            />
          </div>
          <div className="w-[100%] mt-[-10rem] sm:mt-[-4rem] flex justify-center">
            <div className="flex flex-wrap justify-center sm:justify-between  w-[88%] mt-[-3rem] sm:mt-[2rem] ">
              <div className="  flex flex-col flex-wrap w-[90%] lg:w-[40%]">
                <h2 className="text-white text-[39px] md:text-[54px] font-[700]">
                  Entertainment
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
            <div className="w-[100%] flex justify-center mt-[3rem]">
            <h2 id="casino" className="text-[#21C8ED] w-[90%] text-[39px] font-[700]">Casino Games</h2>
            </div>
          <div className=" gap-3 flex flex-wrap justify-evenly sm:mt-[3rem]  ">
            {entertainmentCard.map((data, index) => (
              <div key={index} className=" flex flex-wrap">
                <div className="ent-card-slider relative h-[342px] sm:w-[426px] w-[100%] mt-[10rem]">
                  <img
                    className="mt-[-5rem] sm:mt-[-9.5rem]"
                    src={data.img}
                    alt=""
                  />
                  <button onClick={()=>setshowModal(true)} className="w-[177px] h-[66px] text-white absolute sm:top-[40%] top-[40%] left-[25%] sm:left-[30%]">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
             {
                showMdal&&<Form close={modalclosed}/>
              }
          </div>

          <div className="w-[100%] flex justify-center mt-[3rem]">
            <h2 id="retro" className="text-[#21C8ED] w-[90%] text-[39px] font-[700]">Retro Games</h2>
            </div>
          <div className=" gap-3 flex flex-wrap justify-evenly sm:mt-[3rem]  ">
            {entertainmentCard.map((data, index) => (
              <div key={index} className=" flex flex-wrap">
                <div className="ent-card-slider relative h-[342px] sm:w-[426px] w-[100%] mt-[10rem]">
                  <img
                    className="mt-[-5rem] sm:mt-[-9.5rem]"
                    src={data.img}
                    alt=""
                  />
                  <button onClick={()=>setshowModal(true)} className="w-[177px] h-[66px] text-white absolute sm:top-[40%] top-[40%] left-[25%] sm:left-[30%]">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
             {
                showMdal&&<Form close={modalclosed}/>
              }
          </div>
          <div className="w-[100%] flex justify-center mt-[3rem]">
            <h2 id="casual" className="text-[#21C8ED] w-[90%] text-[39px] font-[700]">Casual Games </h2>
            </div>
          <div className=" gap-3 flex flex-wrap justify-evenly sm:mt-[3rem]  ">
            {entertainmentCard.map((data, index) => (
              <div key={index} className=" flex flex-wrap">
                <div className="ent-card-slider relative h-[342px] sm:w-[426px] w-[100%] mt-[10rem]">
                  <img
                    className="mt-[-5rem] sm:mt-[-9.5rem]"
                    src={data.img}
                    alt=""
                  />
                  <button onClick={()=>setshowModal(true)} className="w-[177px] h-[66px] text-white absolute sm:top-[40%] top-[40%] left-[25%] sm:left-[30%]">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
             {
                showMdal&&<Form close={modalclosed}/>
              }
          </div>
          <div className="w-[100%] flex justify-center mt-[3rem]">
            <h2 id="strategy" className="text-[#21C8ED] w-[90%] text-[39px] font-[700]">Strategy Games </h2>
            </div>
          <div className=" gap-3 flex flex-wrap justify-evenly sm:mt-[3rem]  ">
            {entertainmentCard.map((data, index) => (
              <div key={index} className=" flex flex-wrap">
                <div className="ent-card-slider relative h-[342px] sm:w-[426px] w-[100%] mt-[10rem]">
                  <img
                    className="mt-[-5rem] sm:mt-[-9.5rem]"
                    src={data.img}
                    alt=""
                  />
                  <button onClick={()=>setshowModal(true)} className="w-[177px] h-[66px] text-white absolute sm:top-[40%] top-[40%] left-[25%] sm:left-[30%]">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
             {
                showMdal&&<Form close={modalclosed}/>
              }
          </div>
        </section>
      </main>
    </>
  );
};

export default EntertainmentPage;
