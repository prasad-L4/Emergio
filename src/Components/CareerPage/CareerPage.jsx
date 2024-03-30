import React, { useState } from "react";
import careerhead from "../Images/careerhead.png";
import circle from "../Images/circle.png";
import { careercard } from "../Datas/Datas";
import careerbanner from "../Images/careerbanner.png";
import { openpositions } from "../Datas/Datas";
import Form from "./Form";
import "./CareerPage.css";
const CareerPage = () => {
  const [positions, setpositions] = useState(openpositions);
  const [career, setcareer] = useState(careercard);
  const [showMdal, setshowModal] = useState(false)
  const modalclosed=()=>{
      setshowModal(false)
    }
  return (
    <>
      <main className="bg-black">
        <section >
          <div>
            <img
              className="w-[100%] sm:h-auto h-[200px] relative"
              src={careerhead}
              alt=""
            />
            <h2 className="absolute top-[20%] sm:top-[20%] md:top-[20%] lg:top-[30%] left-[15%] text-white text-[30px] sm:text-[40px] md:text-[50px] lg:text-[54px] font-[700]">
              Join Our Team: Where Careers Flourish!
            </h2>
          </div>
          <h2 className="px-16 mt-[3rem] text-[30px] sm:text-[45px] text-white font-[700] ">
            Why Join Us ?
          </h2>
          <div>
            <img
              className="w-[200px] relative ml-[-6rem]"
              src={circle}
              alt=""
            />
          </div>
          <div className="flex flex-wrap justify-center mt-[-8rem]  gap-5 sm:t-[-6rem]">
            {career.map((data, index) => (
              <div className="career-card w-[90%] h-[290px] z-10 sm:w-[417px] sm:h-[260px] flex flex-col justify-center items-center">
                <img className="w-[48px] h-[48px]" src={data.img} alt="" />
                <h3 className="text-[20px] font-[700] text-white mt-3">
                  {data.title}
                </h3>
                <p className="text-white text-[16px] px-3 text-center mt-3">
                  {data.text}
                </p>
              </div>
            ))}
          </div>
          <img className="w-[100%] mt-[6rem]" src={careerbanner} alt="" />
          <div className="w-[100%] flex flex-col justify-center items-center ">
            <div className="sm:w-[52%] w-[85%] mt-[3rem]">
              <h1 className="text-white text-[35px] sm:text-[44px] font-[700] ">
                Open positions
              </h1>
            </div>
            
            {positions.map((data, index) => (
                
              <div className=" flex flex-col w-[100%] sm:w-[70%] mt-[3rem] mb-[3rem] justify-center items-center">
                <div className="position-card flex justify-between w-[70%]">
                  <div className="flex flex-col">
                    <h2 className="text-white sm:text-[26px] font-[500]">{data.role}</h2>
                    <h5 className="text-white sm:text-[18px] font-[500] mt-3">{data.exp}</h5>
                  </div>
                  <div>
                    <button onClick={()=>setshowModal(true)} className="text-white sm:w-[110px] w-[100px] h-[28px] sm:h-[30px]">Apply Now</button>
                  </div>
                </div>
                <div className="w-[70%] bg-white h-[.5px] mt-3"></div>
           
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

export default CareerPage;
