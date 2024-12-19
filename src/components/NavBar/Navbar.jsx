import React, { useState } from "react";
import "../../index.css";
import logo from "../../assets/logo.ico";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import openImage from "../../assets/nav.png"
import closeImage from "../../assets/navClose.png";
import searchImg from "../../assets/search.png"
import userImg from "../../assets/user.png"
const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const handleClick = () => {
    let id = document.getElementById("id");
    if (!visible) {
      id.className = "visible ";
      setVisible(!visible);
    } else {
      id.className = "hidden";

      setVisible(!visible);
    }
  };
  return (
    <>
      <div className="fixed top-0 w-full h-20 bg-gray-300 md:hidden">
        <img
          src={logo}
          alt="logo"
          className="fixed top-0 w-16 h-16 m-1 md:invisible"
        />
        <div className="invisible " id="id">
          <div className="fixed top-0 right-0 flex-col justify-around w-1/3 h-full text-2xl text-center align-middle z-1 bg-slate-100 ">
            <div className="flex-col justify-center mt-20 align-middle">
              <div className="p-3">
                <Link
                  to="/"
                  className=" hover:text-red-500"
                >
                  Home
                </Link>
              </div>
              <div className="p-3 ">
                <Link to="/about" className="hover:text-red-500">
                  About
                </Link>
              </div>
              <div className="p-3 ">
                <Link to="/services" className="hover:text-red-500">
                  Service
                </Link>
              </div>
            </div>
            <div className="flex-col p-3 ">
              <button className="p-2 pl-3 pr-3 mr-4 rounded-lg bg-slate-300 hover:text-red-500">
                <Link to="/login">Login</Link>
              </button>
              </div>
              <div>
              <button className="p-2 pl-3 pr-3 rounded-lg bg-slate-300 hover:text-red-500">
                <Link to="/signup">SignUp</Link>
              </button>
            </div>
          </div>
        </div>
        <button
            className="fixed top-0 right-0 m-2 md:hidden"
            onClick={handleClick}
          >
            {visible ? <img src={closeImage} alt="navImg" className="w-10 h-10 m-2"/> : <img src={openImage} alt="navImg" className="w-16 h-16"/>}
            {/* <img src={!visible ? openImage : closeImage } alt="NavImg" className="w-16 h-16 m-3"  /> */}
          </button>
          <div className=" mt-20 h-[60rem] text-center md:hidden flex justify-center align-middle text-2xl">
            <div className="w-full h-full bg-slate-400">
              <h1>it is in development mode for responsive design</h1>
            </div>
          </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------ */}
      <div className="fixed flex justify-around w-full p-4 font-serif text-xl shadow-lg bg-slate-100 -top-20 md:top-0 z-52">
        <div>
          <img src={logo} alt="logo" className="w-12 h-12" />
        </div>
        <div className="mt-2">
          <ul className="flex align-middle">
            <li className="pl-10 pr-10 hover:text-red-500 ">
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li className="pl-10 pr-10 hover:text-red-500">
              <Link to="/about">About</Link>
            </li>
            <li className="pl-10 pr-10 hover:text-red-500">
              <Link to="/services">Service</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-around align-middle ">
          <button className="pl-3 pr-3 mr-4 rounded-lg bg-slate-300 hover:text-red-500">
            <Link to="/login">Login</Link>
          </button>
          <button className="pl-3 pr-3 rounded-lg bg-slate-300 hover:text-red-500">
            <Link to="/signup">SignUp</Link>
          </button>
          <div className="flex justify-center">
          <input type="text" className="p-2 ml-5 mr-2 rounded-md w-36" placeholder="search by id"/>
          <button className=""><img src={searchImg} alt="" className="w-8 h-8 font-bold"/></button>
          </div>
          <div className="fixed top-5 right-10">
            <button>

            <img src={userImg} alt="" className="w-10 h-10"/>
            </button>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
