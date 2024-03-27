import { useEffect, useRef, useState } from "react";
import circle from "../Images/circle.png";
import kid from "../Images/kid.png";
import wannabg from "../Images/wannabg.png";
import wannaimg from "../Images/wannaimg.png";
import casino from "../Images/casino.png";
import casinobg from "../Images/casinobg.png";
import casinobg2 from "../Images/casinobg2.png";
import shortsimg from '../Images/shortsimg.png'
import { coursecard } from "../Datas/Datas";
import { entertainmentCards } from "../Datas/Datas"; 
import { shorts } from "../Datas/Datas";

import Swiper from "swiper";
import "swiper/swiper-bundle.css";

import "./HomePage.css";

const HomePage = () => {
  const [courseCards, setcourseCards] = useState(coursecard);
  const [videos, setvideos] = useState(shorts)
  const [entertainmentCard, setentertainmentCard] =
    useState(entertainmentCards);
    

  useEffect(() => {
    const newsCards = document.querySelectorAll(".news-card");
    newsCards.forEach((card, index) => {
      const delay = index * 200;
      card.style.animationDelay = `${delay}ms`;
    });
  }, []);
  const swiperContainer = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    swiperInstance.current = new Swiper(swiperContainer.current, {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 0,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      swiperInstance.current.destroy();
    };
  }, []);

  return (
    <>
      {/* news section */}
      <main className="main w-[100%]">
        <section className="w-[100%] text-white  flex justify-center items-center">
          <div className="w-[90%] mt-[5rem] flex flex-wrap justify-around gap-3">
            <div className="flex flex-wrap flex-col pt-3 ">
              <div className="news-card w-[296px] h-[212px] px-3 pt-3  flex flex-wrap flex-col ">
                <h3>News#1</h3>
                <p className=" pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </div>
              <div className="news-card w-[296px] h-[212px] px-3 pt-3 mt-[3rem]  flex flex-wrap flex-col">
                <h3>News#1</h3>
                <p className="pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                className="mt-[-1rem] sm:h-[400px]  md:h-[500px] md:w-[500px] lg:h-[594px] lg:w-[608px]"
                src={circle}
                alt=""
              />
              <img
                className="absolute top-[0%] left-[20%] h-[250px] sm:h-[320px] md:top-[0%] md:left-[20%]  md:h-[395px] lg:h-[483px] lg:w-[377px]"
                src={kid}
                alt=""
              />
            </div>
            <div className="flex flex-wrap flex-col pt-3 ">
              <div className="news-card w-[296px] h-[212px] px-3 pt-3  flex flex-wrap flex-col ">
                <h3>News#1</h3>
                <p className=" pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </div>
              <div className="news-card w-[296px] h-[212px] px-3 pt-3 mt-[3rem]  flex flex-wrap flex-col">
                <h3>News#1</h3>
                <p className="pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* trending course */}
        <section className="w-[100%] flex flex-col justify-center items-center mt-[3rem]">
          <div className="w-[90%]">
            <h2 className="text-white text-[39px] font-[700]">
              Discover the Latest Trends
            </h2>
            <h5 className="text-white text-[24px]">Our Courses</h5>
          </div>
          <div></div>

          {/* course cards */}
          <div className=" w-[93%] flex justify-center md:justify-between flex-wrap flex-row">
            {courseCards.map((data, index) => (
              <div className=" px-5 w-[345px] mt-[3rem] crs-cards text-start flex flex-wrap  justify-center items-center">
                <img
                  className="crs-img w-[329px] h-[250px] relative"
                  src={data.img}
                  alt=""
                />
                <img
                  className="w-[80px] h-[80px] absolute mt-[rem]"
                  src={data.icon}
                  alt=""
                />
                <div>
                  <h4 className="text-white text-[20px] font-[700] pt-[3rem]  ">
                    {data.title}
                  </h4>
                  <p className=" mt-3">{data.text}</p>
                  <button className="vdo-icon bg-transparent w-[140px] h-[50px] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4">
                    SYLLABUS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* wanna play or wanna develop section */}
        <section>
          <div className="flex justify-center mt-[10rem] relative">
            <img className=" object-cover" src={wannabg} alt="" />
            <div className="absolute text-white  flex flex-wrap  left-[15%] ">
              <div className="flex flex-wrap items-start  justify-around mt-[3rem] gap-10 ">
                <div className="w-[376px] ">
                  <h2>WANNA PLAY A GAME</h2>
                  <p>
                    Ready for gaming thrills? Dive in now! Discover adventures,
                    puzzles, and challenges awaiting your play.
                  </p>
                  <button className="vdo-icon bg-transparent w-[140px] h-[50px] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4">
                    CONTACT US
                  </button>
                </div>
                <div className="h-[200px] w-[5px] rounded-md bg-white mt-3"></div>
                <div className="w-[376px] flex flex-col  ">
                  <h2>WANNA DEVELOP A GAME</h2>
                  <p>
                    Turn your game ideas into reality! Join our game development
                    courses and create captivating worlds.
                  </p>
                  <button className="vdo-icon bg-transparent w-[140px] h-[50px] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4">
                    CONTACT US
                  </button>
                </div>
                <img className="mt-[-11rem]" src={wannaimg} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* entertainments */}
        <section className="w-[100%] flex justify-center">
          <div className="w-[90%] mt-[6rem]">
            <h2 className="text-white text-[39px] font-[700]">
              Welcome to World of Entertainments
            </h2>
            <p className="text-white text-[24px] mt-3">Let’s Play</p>
          </div>
        </section>
        {/* entertainment cards slider */}
        <section>
          {/* slider */}
          <div className="swiper-container" ref={swiperContainer}>
            <div className="swiper-wrapper flex justify-center items-center">
              {entertainmentCard.map((data, index) => (
                <div key={index} className="swiper-slide">
                  <div className="ent-card-slider relative h-[342px] w-[496px] mt-[10rem]">
                    <img className="mt-[-9.5rem]" src={data.img} alt="" />
                    <button className="w-[177px] h-[66px] text-white absolute top-[50%] left-[30%]">
                      Play Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* catagory */}
          <section className="flex flex-col justify-center items-center w-[100%]">
            <div className="w-[90%]">
              <div className="px-7 mt-[4rem]">
                <div className=" flex mt-[3rem]">
                  <div className=" flex justify-between items-center mt-5">
                    <div className="relative">
                      <img src={casinobg} alt="" />
                    </div>
                    <div className="game-card absolute w-[100%] left-[10%]">
                      <div className="flex flex-wrap  ">
                        <div className="w-[360px]">
                          <img
                            className="mt-[-4rem] w-[361px] h-[438px]"
                            src={casino}
                            alt=""
                          />
                        </div>
                        <div className="w-[500px] px-4 mt-3">
                          <h2 className="text-[39px] font-[700]">
                            Casino Games
                          </h2>
                          <p className="text-white mt-3 text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex
                          </p>
                          <button className="vdo-icon bg-transparent w-[140px] h-[50px] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4">
                            VIEW MORE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-10    mt-[4rem]">
                <div className=" flex mt-[3rem]">
                  <div className=" flex justify-between items-center mt-5">
                    <div className="relative">
                      <img src={casinobg2} alt="" />
                    </div>
                    <div className="game-card absolute w-[100%] left-[30%]">
                      <div className="flex flex-wrap  ">
                        <div className="w-[500px] px-4 mt-3">
                          <h2 className="text-[39px] font-[700]">
                            Casino Games
                          </h2>
                          <p className="text-white mt-3 text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex
                          </p>
                          <button className="vdo-icon bg-transparent w-[140px] h-[50px] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4">
                            VIEW MORE
                          </button>
                        </div>
                        <div className="w-[360px]">
                          <img
                            className="mt-[-4rem] w-[361px] h-[438px]"
                            src={casino}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-7 mt-[4rem]">
                <div className=" flex mt-[3rem]">
                  <div className=" flex justify-between items-center mt-5">
                    <div className="relative">
                      <img src={casinobg} alt="" />
                    </div>
                    <div className="game-card absolute w-[100%] left-[10%]">
                      <div className="flex flex-wrap  ">
                        <div className="w-[360px]">
                          <img
                            className="mt-[-4rem] w-[361px] h-[438px]"
                            src={casino}
                            alt=""
                          />
                        </div>
                        <div className="w-[500px] px-4 mt-3">
                          <h2 className="text-[39px] font-[700]">
                            Casino Games
                          </h2>
                          <p className="text-white mt-3 text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex
                          </p>
                          <button className="vdo-icon bg-transparent w-[140px] h-[50px] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4">
                            VIEW MORE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-10  mt-[4rem]">
                <div className=" flex mt-[3rem]">
                  <div className=" flex justify-between items-center mt-5">
                    <div className="relative">
                      <img src={casinobg2} alt="" />
                    </div>
                    <div className="game-card absolute w-[100%] left-[30%]">
                      <div className="flex flex-wrap  ">
                        <div className="w-[500px] px-4 mt-3">
                          <h2 className="text-[39px] font-[700]">
                            Casino Games
                          </h2>
                          <p className="text-white mt-3 text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex
                          </p>
                          <button className="vdo-icon bg-transparent w-[140px] h-[50px] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4">
                            VIEW MORE
                          </button>
                        </div>
                        <div className="w-[360px]">
                          <img
                            className="mt-[-4rem] w-[361px] h-[438px]"
                            src={casino}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/*  shorts */}
        <section>
          <div className="mt-[3rem] px-10">
            <h1 className="text-white text-[39px] font-[700]">
              Captivating Experience
            </h1>
            <h5 className="text-[24px] mt-3 text-white">Our Stories</h5>
          </div>
          <div className="flex justify-center flex-col items-center mt-[5rem]">
            <div className="flex flex-wrap justify-center gap-3">
             {
              videos.map((data,index)=>((
                <img className={`${data.margin}`} src={data.img} alt="" />
              )))
             }
     
            </div>
            <button className="vdo-icon bg-transparent w-[140px] h-[50px] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[3rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4">
              VIEW MORE
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
