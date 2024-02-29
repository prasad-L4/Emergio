import React, { useState } from "react";
import logo from "../Images/logo.png";
import { RiMenu3Fill } from "react-icons/ri";

import "./Navbar.css";
import Modal from "./Modal";

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
          <button className="md:block hidden">Learning</button>
          <button className="md:block hidden">Placements</button>
          <img className="w-[150px] h-[35px] " src={logo} alt="" />
          <RiMenu3Fill onClick={openModal} className=" md:hidden" />
          <button className="md:block hidden">Hire from Emergio</button>
          <button className="md:block hidden">Login / Register</button>
        </nav>

        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className=" flex flex-col text-[20px] justify-center items-start px-[2rem] ">
              <button  className="text-white  mt-[] ">Learning</button>
              <button className="text-white mt-[3rem]">Placements</button>
              <button className="text-white mt-[3rem]">Hire from Emergio</button>
              <button className="text-white mt-[3rem]">Login / Register</button>
            </div>
          </Modal>
        )}
      </header>
    </>
  );
};

export default Navbar;
