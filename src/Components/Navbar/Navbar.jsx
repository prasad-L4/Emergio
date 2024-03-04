import React, { useState } from "react";
import logo from "../Images/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import "./Navbar.css";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className=" flex justify-center h-16 w-[100%] bg-black">
        <nav className=" flex items-center w-[90%] md:w-[80%] text-white text-[18px] justify-between md:justify-around">
          <Link to='/learning'>
          <a className="md:block hidden cursor-pointer  hover:text-orange-600">Learning</a>
          </Link>
          
          <a className="md:block hidden cursor-pointer hover:text-orange-600">Placements</a>
         <Link to='/'> <img className="w-[150px] h-[35px] " src={logo} alt="" /></Link>
          <RiMenu3Fill onClick={openModal} className=" md:hidden" />
          <a className="md:block hidden cursor-pointer hover:text-orange-600">Hire from Emergio</a>
          <a className="md:block hidden cursor-pointer hover:text-orange-600">Login / Register</a>
        </nav>

        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className=" flex flex-col text-[20px] justify-center items-start px-[2rem] ">
              <a  className="text-white  mt-[]  hover:text-orange-600 ">Learning</a>
              <a className="text-white mt-[3rem]  hover:text-orange-600">Placements</a>
              <a className="text-white mt-[3rem]  hover:text-orange-600">Hire from Emergio</a>
              <a className="text-white mt-[3rem]  hover:text-orange-600">Login / Register</a>
            </div>
          </Modal>
        )}
      </header>
    </>
  );
};

export default Navbar;
