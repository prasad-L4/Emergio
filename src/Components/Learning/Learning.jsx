import React, { useState } from 'react'
import learninghead from '../Images/learninghead.png'
import { IoStar ,IoStarOutline } from "react-icons/io5";
import { learningCards } from '../Datas/Datas';
import circle from '../Images/circle.png'
import './Learning.css'

const Learning = () => {
  const [cards, setcards] = useState(learningCards)
  return (
    <>
 <section className="relative">
      <img className='w-full sm:h-auto h-[200px]' src={learninghead} alt="" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h2 className="text-[18px] sm:text-4xl font-semibold">Learn From Emergio!</h2>
        <h3 className=" text-[15px] sm:text-2xl bg-gradient-to-r from-orange-500 to-yellow-400 mt-4">Our Courses</h3>
      </div>
    </section>
    <section className='bg-black w-[100%] flex  justify-center gap-9 flex-wrap'>
    <div className="flex w-[100%] justify-between">
          <img className="w-[120px] rotate- h-[120px]  " src={circle} alt="" />
          <img
            className="w-[0] invisible rotate- h-[0] flex align-bottom   "
            src={circle}
            alt=""
          />
        </div>
      {
        cards.map((data,index)=>((
          <div className='L-cards flex flex-col  justify-center items-center   w-[90%] md:w-[575px] md:h-[457px] mb-[4rem] '>

          <img className='w-[90%] md:w-[517px] mt-7 transition-transform duration-300 transform hover:scale-105 ' src={data.img} alt="" />
          <h3 className='text-[26px] mt-3 text-center'>{data.title}</h3>
          <p className=' mt-4 text-center text-[17px] text-white px-3'>{data.text}</p>
          <div className='L-cards flex mt-[2rem] mb-3 w-[100px] justify-center items-center border-blue-900 border-4 h-[25px]'>
          <IoStar className=' text-yellow-500' />
          <IoStar className=' text-yellow-500'/>
          <IoStar className=' text-yellow-500'/>
          <IoStar className=' text-yellow-500'/>
          <IoStar className=' text-white'/>
          
          </div>
         </div>
        )))
      }

     
    </section>
      
    </>
  )
}

export default Learning
