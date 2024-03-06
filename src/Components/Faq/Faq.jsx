import React, { useState } from "react";
import yellowcircle from "../Images/yellowcircle.png";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

const Faq = () => {
  const [icon, setIcon] = useState(false);
  return (
    <>
      <section className="w-[100%] bg-black flex justify-center">
        <div className="w-[80%] mt-[-6rem] bg-white   flex justify-center flex-col items-center">
          <div className="flex justify-between w-[100%]">
            <img className="w-[130px] h-[130px]" src={yellowcircle} alt="" />
            <img className="w-[0] h-0 invisible" src={yellowcircle} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h5 className=" text-black text-[18px] mt-[2rem]">
              Our Newsletter
            </h5>
            <h4 className="text-blue-900 text-center mt-[2rem]">
              Connect with us: Reach out, share your thoughts, <br /> and let's
              start a conversation!
            </h4>
            <button className=" mt-[2rem] mb-[2rem] border-blue-900 border-4 md:w-[340px] md:h-[60px] md:text-[24px]">
              Sign In to Subscribe
            </button>
          </div>
          <div className="flex justify-between w-[100%]">
            <img className="w-0 h-0 invisible" src={yellowcircle} alt="" />
            <img
              className="w-[130px] h-[130px] rotate-180"
              src={yellowcircle}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center bg-black w-[100%]">
        <div className="flex flex-col justify-center w-[100%] mt-[3rem]">
          <h5 className="text-white text-[17px] text-center">FAQ</h5>
          <h5 className="text-white text-[19px] text-center mt-3">
            Got Questions? We've Got Answers!
          </h5>
        </div>
        <div className="w-[70%] mt-[3rem] flex justify-between px-4 items-center border-[white] border-4 md:h-[60px] h-auto mb-[3rem]">
          <h6 className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod?
          </h6>
          <span
            onClick={() => setIcon(!icon)}
            className="text-white text-[20px] cursor-pointer"
          >
            {icon ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
          </span>
        </div>

        {icon && (
          <div className="drop w-[70%] mt-[-2.8rem] mb-[3rem] flex justify-between px-4 items-center border-[white] border-2 h-auto transition-all duration-600">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod? Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod? Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod? Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod? Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod? Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod?
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Faq;
