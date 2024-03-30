import { useState } from "react";
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed bg-[#0F0D0D7A] inset-0 z-50 flex items-center justify-end overflow-x-hidden overflow-y-auto transition-opacity duration-300 ease-in opacity-100  ">
      <div className="inset-0 transition-opacity" onClick={onClose}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-50 w-[70%] h-full flex justify-start  max-w-lg  m bg-black rounded-lg shadow-xl">
        <button
          className="absolute z-50  top-0 right-0 m-4 text-white    transition-transform transform rotate-0 hover:rotate-45"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {children}
      </div>
    </div>
    </>
  );
};

export default Modal;
