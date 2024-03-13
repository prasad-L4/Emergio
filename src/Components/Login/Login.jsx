import React, { useState } from "react";
import loginbg from "../Images/loginbg.png";
import logincircle from "../Images/logincircle.png";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [signin, setsignin] = useState(false);
  const [show, setshow] = useState(false);
  return (
    <>
      {signin ? (
        <section className="relative">
          <div>
            <img className="w-full h-[100vh]" src={loginbg} alt="" />
          </div>
          <div className="absolute hidden md:block top-0 left-1/4">
            <img src={logincircle} alt="" />
          </div>

          <div className="absolute inset-0 mb-4 flex justify-center items-center ">
            <div className="log-form bg-transparent filter mt-[rem] w-[90%] sm:w-[600px] md:px-10 sm:h-auto p-8">
              <form>
                <h2 className="text-[32px] text-white ">Sign In</h2>
                <p className="text-[16px] text-white mt-4 ">
                  Please enter your credentials to access your account.
                </p>
                <div className="flex ">
                  <div>
                    <p className="text-[16px] text-white mt-4">First Name</p>
                    <input
                      className="w-[90%] h-[40px] mt-4 rounded-lg text-gray-400 bg-transparent px-3 border-[1px] focus:border-gray-400 border-gray-400 text-[14px]"
                      placeholder="Enter Your First Name"
                      type="type"
                    />
                  </div>
                  <div>
                    <p className="text-[16px] text-white mt-4">Last Name</p>
                    <input
                      className="w-[90%] h-[40px] mt-4 rounded-lg text-gray-400 bg-transparent px-3 border-[1px] focus:border-gray-400 border-gray-400 text-[14px]"
                      placeholder="Enter Your Last Name"
                      type="type"
                    />
                  </div>
                </div>
                <div className="">
                  <p className=" flex justify-start items-start text-start text-[16px] text-white mt-3">
                    Email
                  </p>
                  <input
                    className="w-[90%] h-[40px] mt-3 rounded-lg text-gray-400 bg-transparent px-3 border-[1px] focus:border-gray-400 border-gray-400 text-[14px]"
                    placeholder="Enter Your Email id"
                    type="email"
                  />
                  <p className="text-[16px] mt-3 text-white">Password:</p>
                  <input
                    className="w-[90%] h-[40px] mt-3 rounded-lg text-gray-400 bg-transparent px-3 border-[1px] focus:border-gray-400 border-gray-400 text-[14px]"
                    placeholder="Enter Your Password"
                    type={show ? "text" : "password"}
                  />
                </div>
                <div className="flex justify-between mt-4 ">
                  <div className="flex gap-2">
                    <input
                      onChange={() => setshow(!show)}
                      checked={show}
                      className="bg-transparent"
                      type="checkbox"
                    />
                    <label className="text-white">Show Password</label>
                  </div>
                  <div>
                    <a className="underline text-blue-950 text-[16px] ">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="">
                  <p className="text-[16px] mt-3 text-white">
                    Confirm Password:
                  </p>
                  <input
                    className="w-[90%] h-[40px] mt-3 rounded-lg text-gray-400 bg-transparent px-3 border-[1px] focus:border-gray-400 border-gray-400 text-[14px]"
                    placeholder="Enter Your Password"
                    type="password"
                  />
                </div>
                <div className="flex flex-col mt-5  align-middle">
                  <button className="w-[90%] h-[45px] text-[24px] text-white rounded-2xl bg-orange-600 hover:shadow-none">
                    <Link to="/home">Sign Up</Link>
                  </button>
                  <div className="mt-3  ">
                    <p className="text-white flex gap-3">
                      Already have an account?
                      <span
                        onClick={() => setsignin(false)}
                        className="text-orange-700 cursor-pointer"
                      >
                        Sign in
                      </span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      ) : (
        <section className="relative">
          <div>
            <img className="w-full h-[100vh]" src={loginbg} alt="" />
          </div>
          <div className="absolute hidden md:block top-0 left-1/4">
            <img src={logincircle} alt="" />
          </div>

          <div className="absolute inset-0 flex justify-center items-center">
            <div className="log-form bg-transparent filter mt-[-2rem] w-[90%] sm:w-[500px] sm:h-[525px] p-8">
              <form>
                <h2 className="text-[32px] text-white">Welcome Back!</h2>
                <p className="text-[16px] text-white mt-4">
                  Please enter your credentials to access your account.
                </p>
                <div>
                  <p className="text-[16px] text-white mt-4">Email</p>
                  <input
                    className="w-[90%] h-[50px] mt-4 rounded-lg text-gray-400 bg-transparent px-3 border-[1px] focus:border-gray-400 border-gray-400 text-[16px]"
                    placeholder="Enter Your Email id"
                    type="email"
                  />
                </div>
                <div>
                  <p className="text-[16px] mt-4 text-white">Password:</p>
                  <input
                    className="w-[90%] h-[50px] mt-4 rounded-lg text-gray-400 bg-transparent px-3 border-[1px] focus:border-gray-400 border-gray-400 text-[16px]"
                    placeholder="Enter Your Password"
                    type={show ? "text" : "password"}
                  />
                </div>
                <div className="flex justify-between mt-5 ">
                  <div className="flex gap-2">
                    <input   onChange={() => setshow(!show)}
                      checked={show} className="bg-transparent" type="checkbox" />
                    <label className="text-white">Show Password</label>
                  </div>
                  <div>
                    <a className="underline text-blue-950 text-[16px] px-6">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="flex flex-col mt-6 justify-center align-middle items-center">
                  <button className="w-[80%] h-[53px] text-[24px] text-white rounded-2xl bg-orange-600 hover:shadow-none">
                  <Link to="/home">Sign In </Link> 
                  </button>
                  <div className="mt-4  ">
                    <p className="text-white flex gap-3">
                      Don't have an account?
                      <span
                        onClick={() => setsignin(true)}
                        className="text-orange-700 cursor-pointer"
                      >
                       
                        Sign up
                      </span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
