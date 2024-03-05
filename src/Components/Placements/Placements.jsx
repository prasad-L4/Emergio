import React, { useState } from 'react'
import placementheader from '../Images/placementheader.png'
import circle from '../Images/circle.png'
import {placements} from '../Datas/Datas'
const Placements = () => {
    const [placement, setplacement] = useState(placements)
  return (
   <>

    <section className="relative">
    <img className='w-full sm:h-auto h-[200px]' src={placementheader} alt="" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
      <h2 className="text-[18px] sm:text-4xl font-semibold">Where Futures Begin!</h2>
      <h3 className=" text-[15px] sm:text-2xl bg-gradient-to-r from-orange-500 to-yellow-400 mt-4">Our Placements</h3>
    </div>
  </section>
  <section className='bg-slate-950 w-[100%] flex  justify-center gap-7 flex-wrap '>
  <div className="flex w-[100%] justify-between  ">
          <img className="sm:w-[120px] rotate- sm:h-[120px] w-[80px] h-[80px] " src={circle} alt="" />
          <img
            className="w-[0] invisible rotate- h-[0] flex align-bottom   "
            src={circle}
            alt=""
          />
        </div >
        {
            placement.map((data,index)=>((
                <div className='flex justify-center mb-[5rem]  '>
                <img className='h-[400px] sm:w-[400px] w-[90%]  rounded-md transition-transform duration-300 transform hover:scale-105' src={data.img} alt="" />
            </div>
            )))

        }
    
  </section>
  </>
  )
}

export default Placements
