import React from 'react'
import { Link } from "react-router-dom";
const Form = ({ close }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex">
      <div className="relative p-8 bg-white w-[90%] md:w-[60%] mt-[9rem] m-auto rounded-lg">
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-800"
          onClick={close}
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.707 11.293a1 1 0 0 1 1.414 1.414L11.414 14l2.707 2.707a1 1 0 1 1-1.414 1.414L10 15.414l-2.707 2.707a1 1 0 0 1-1.414-1.414L8.586 14 5.879 11.293a1 1 0 0 1 1.414-1.414L10 12.586l2.707-2.707a1 1 0 0 1 1.414 1.414L11.414 14l2.293 2.293a.997.997 0 0 1 0 1.414.999.999 0 0 1-1.414 0L10 15.414l-2.293 2.293a.999.999 0 0 1-1.414 0 .997.997 0 0 1 0-1.414L8.586 14 6.879 11.293A.999.999 0 0 1 8.293 9.88L10 11.586l1.707-1.707a.999.999 0 1 1 1.414 1.414L11.414 14l2.293 2.293a.999.999 0 0 1 0 1.414.997.997 0 0 1-1.414 0L10 15.414l-1.707 1.707a.999.999 0 0 1-1.414 0 .997.997 0 0 1 0-1.414L8.586 14l-1.707-1.707a.999.999 0 0 1 0-1.414 1 1 0 0 1 1.414 0L10 12.586l1.707-1.707a1 1 0 0 1 1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2 className=" px-8  mb-4 text-[#21C8ED] text-[25px] md:text-[34px] font-[700]">
          Welcome to Emergio Games!
        </h2>
        <ul className='list-disc'>
            <li>Experience :1-2 Year</li>
            <li>   Fulltime</li>
            <p>Candidate Requirement:</p>
            <li>Female candidates who have prior experience working in web development company</li>
            <li>Should be able to communicate with both local and international customers</li>
            <li>
Responsible for handling both inbound and outbound calls and regular follow up</li>
<li>Generating leads through various online platforms and achieve the targeted sales numbers & value, set quality parameters</li>
<li>Capture the insights from customer interactions and share it with the internal team</li>
<li>Preparing proposals and regular follow up</li>
<li>Cool-tempered and able to handle rejection</li>
<li>Outstanding negotiation skills with the ability to resolve issues and address complaints</li>
        </ul>

        <form>
          <div className="flex justify-center gap-5 mt-3 flex-wrap ">
            <div className="">
              <input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                className="w-[100%] md:w-[350px] px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="">
         
              <input placeholder="Phone No:"
              
                type="tel"
                id="phone"
                name="phone"
                className="w-[100%] md:w-[350px] px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-[3rem] flex-wrap ">
            <div className="">
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                className="w-[100%] md:w-[350px] px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="">

              <input placeholder="Place"

                type="file"
                id="place"
                name="place"
                className="w-[100%] md:w-[350px] px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

        <Link to='/'>  <button
             type="submit"
            className="w-[195px] h-[56px] bg-[#21C8ED]  text-white px-4 text-[21px] font-[700] mt-[3rem] py-2  hover:bg-blue-600 transition-colors float-end"
          >
            Submit
          </button></Link>
        </form>
      </div>
    </div>
      
    </>
  )
}

export default Form
