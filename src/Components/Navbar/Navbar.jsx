import React, { useState } from "react";
import logo from "../Images/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const location = useLocation();

  if (location.pathname === "/login") {
    return null; 
  }
  

  return (
    <>
      <header className="navbar z-50 flex justify-center h-[117px] w-[100%]   bg-black">
   
        <nav className=" flex items-center w-[90%] md:w-[100%] text-white text-[16px] font-[600] justify-between md:justify-around">
        <Link to='/'> <img className="w-[150px] h-[35px] " src={logo} alt=""  />  </Link>
          <a className="md:block hidden cursor-pointer  hover:text-orange-600">
          <Link to='/course'>Courses </Link>
          </a>
         
        
      
          <a className="md:block hidden cursor-pointer hover:text-orange-600">  <Link to='/placement'>Placements </Link></a>   
          
          <RiMenu3Fill onClick={openModal} className=" md:hidden" />
          <a className="md:block hidden cursor-pointer hover:text-orange-600"><Link to='/hirefrom'>Hire from Emergio </Link></a>
          <a className="md:block hidden cursor-pointer hover:text-orange-600"><Link to='/entertainment'>Entertainment</Link></a> 
          <a className="md:block hidden cursor-pointer hover:text-orange-600"><Link to='/about'>About Us</Link></a> 
          <a className="md:block hidden cursor-pointer hover:text-orange-600"><Link to='/career'>Career</Link></a> 
 

        </nav>
     
       


        {/* sidebar */}

        
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className=" flex flex-col fixed bg-[#0F0D0D7A] h-[100vh] w-[80%] top-[-0%] text-[20px] justify-center items-start px-[2rem] ">
            <a className="text-white mt-[3rem] cursor-pointer  hover:text-orange-600">
          <Link to='/course'>Courses </Link>
          </a>
              <a className="text-white mt-[3rem]  hover:text-orange-600"><Link to='/placement'>Placements</Link></a>
              <a className=" cursor-pointer hover:text-orange-600"><Link to='/hirefrom'>Hire from Emergio </Link></a>
              <a className="text-white mt-[3rem]  cursor-pointer hover:text-orange-600"><Link to='/entertainment'>Entertainment</Link></a> 
              <a className="text-white mt-[3rem]  cursor-pointer hover:text-orange-600"><Link to='/about'>About Us</Link></a> 
              <a className="text-white mt-[3rem] cursor-pointer hover:text-orange-600"><Link to='/career'>Career</Link></a> 
            </div>
          </Modal>
        )}
      </header>
    </>
  );
};

export default Navbar;
