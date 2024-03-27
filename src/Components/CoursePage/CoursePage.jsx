import { useState } from "react";
import { coursecardpage } from "../Datas/Datas";
import "./CoursePage.css";
const CoursePage = () => {
  const [cards, setcards] = useState(coursecardpage);
  return (
    <>
      <main className="bg-black w-[100%] flex justify-center items-center">
        <section className="">
            <div className="w-[100%] flex justify-center">
            <div className="flex w-[88%] mt-[6rem] ">
            <div className=" flex flex-col flex-wrap w-[90%] md:w-[40%]">
              <h2 className="text-white text-[39px] md:text-[54px] font-[700]">Our Courses</h2>
              <p className="text-white text-[16px] mt-3">
                Unlock your potential with our expert-led courses. Dive into the
                world of game development,designing, programming through
                hands-on learning and industry insights. From beginners to
                advanced learners, we're here to fuel your creativity and skill
                advancement.
              </p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
            </div>
         

          {/* course cards */}
          <div className="w-[100%] flex justify-center mt-[3rem]">

       
          <div className=" w-[98%] flex justify-center md:justify-around flex-wrap flex-row mb-[6rem]">
            {cards.map((data, index) => (
              <div className=" px-5 w-[100%] sm:w-[395px] mt-[4rem] crs-cards text-start flex flex-wrap  justify-center items-center">
                <img
                  className="crs-img w-[90%]  sm:w-[329px] h-[250px] relative"
                  src={data.img}
                  alt=""
                />
                <img
                  className="sm:w-[80px] w-[50px] sm:h-[80px] absolute sm:mt-0 "
                  src={data.icon}
                  alt=""
                />
                <div className="sm:px-0 px-3">
                  <h4 className="text-white text-[20px] font-[700] pt-[3rem]  ">
                    {data.title}
                  </h4>
                  <p className=" mt-3">{data.text}</p>
                  <button className="vdo-icon bg-transparent w-[140px] h-[50px]  text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4">
                    SYLLABUS
                  </button>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CoursePage;
