import React from 'react'
import learninghead from '../Images/learninghead.png'
import learningcard from '../Images/learningcard.png'
import { IoStar ,IoStarOutline } from "react-icons/io5";
import './Learning.css'

const Learning = () => {
  return (
    <>
 <section className="relative">
      <img className='w-full' src={learninghead} alt="" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h2 className="text-[18px] sm:text-4xl font-semibold">Learn From Emergio!</h2>
        <h3 className=" text-[15px] sm:text-2xl bg-gradient-to-r from-orange-500 to-yellow-400 mt-4">Our Courses</h3>
      </div>
    </section>
    <section className='bg-black w-[100%] flex justify-center flex-wrap'>

        <div className='L-cards flex flex-col justify-center items-center mt-[2rem] w-[90%] md:w-[575px] md:h-[457px] mb-3 '>

         <img className='w-[90%] md:w-[517px] mt-7 ' src={learningcard} alt="" />
         <h3 className='text-[26px] mt-3 text-center'>Human Resource Management</h3>
         <p className=' mt-4 text-center text-[17px] text-white'>Nurturing organizational talent. Explore our courses for insights into recruitment, employee management, performance optimization, and compliance strategies.</p>
         <div className='L-cards flex mt-[2rem] mb-3'>
         <IoStar className=' text-yellow-500' />
         <IoStar className=' text-yellow-500'/>
         <IoStar className=' text-yellow-500'/>
         <IoStar className=' text-yellow-500'/>
         <IoStar className=' text-white'/>
         
         </div>
        </div>
    </section>
      
    </>
  )
}

export default Learning
