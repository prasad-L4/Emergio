import React, { useState } from "react";
import hireheader from "../Images/hireheader.png";
import circle from "../Images/circle.png";
import { hireCards } from "../Datas/Datas";
const Hire = () => {
  const [cards, setcards] = useState(hireCards);
  return (
    <>
      <section className="relative">
        <img className="w-full sm:h-auto h-[200px]" src={hireheader} alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-[18px] sm:text-4xl font-semibold">
            Hire from Emergio
          </h2>
          <h3 className=" text-[15px] sm:text-2xl bg-gradient-to-r from-orange-500 to-yellow-400 mt-4">
            Careers
          </h3>
        </div>
      </section>
      <section className="bg-slate-950">
        <div className="flex w-[100%] justify-between ">
          <img
            className="sm:w-[120px] rotate- sm:h-[120px] w-[80px] h-[80px] "
            src={circle}
            alt=""
          />
          <img
            className="w-[0] invisible rotate- h-[0] flex align-bottom   "
            src={circle}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center flex-wrap gap-5 ">
          <div className=" w-[90%] sm:w-[561px] h-[368px] bg-white"></div>
          <div className="  w-[500px] flex flex-wrap  text-white sm:px-0 px-6">
            <h5 className="text-[42px]">About Emergio</h5>
            <p className="">
              Our students aren't just proficient in all domains – they're
              masters of it. We understand that in the fast-paced world of tech,
              the ability to adapt and learn quickly is essential. That's why we
              focus not only on providing high-quality learning material but
              also on building our students' critical thinking, problem-solving,
              and learning agility. With these skills, Brocampians are ready to
              take on any challenge and excel in any role. Despite having only 7
              months of training, our candidates are equipped with the skills
              and experience equivalent to that of a professional developer with
              1 year of experience.
            </p>
          </div>
          <p className="text-orange-600 w-[600px] flex justify-center items-center text-center mt-[3rem]">
            If you're looking for top-tier talent to take your team to the next
            level, look no further than Brocamp. With our expertise and
            commitment to excellence, we're the perfect partner to help you
            build the high-performing team you need to succeed in today's
            ever-evolving digital landscape.
          </p>
        </div>
        <div className="flex justify-center items-center text-center mt-[3rem]">
          <h5 className="text-orange-600 text-[40px]">
            <span className="text-white text-[40px]">why</span> Emergio?
          </h5>
        </div>
        <div className="flex flex-wrap justify-center gap-5 items-center mt-[3rem]">
          {cards.map((data, index) => (
            <div className=" w-[90%] sm:w-[411px] h-[392px] flex justify-center flex-col items-center bg-white rounded-md">
              <img className="mt-[-3rem]" src={data.img} alt="" />
              <h5 className="text-blue-800 text-[25px] sm:text-[28px] mt-5">{data.title}</h5>
              <p className="text-center mt-5 px-6">{data.text}</p>
            </div>
          ))}

          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Hire;
