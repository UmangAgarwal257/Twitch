import React from "react";
import logo from "../assets/Logo.png";
import { BsThreeDotsVertical, BsFillInboxFill, BsPerson } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
function Navbar() {
  return (
    <div className="sticky top-[0rem] bg-white py-2 px-4 lg:px-8 flex items-center justify-between z-20 w-full">
      {/* LeftSide */}
      <div className="flex items-center gap-5">
        <img src={logo} alt="" className="w-10 h-10" />
        <div className="">
          <p className="font-semibold text-[#9147ff]">Explore</p>
        </div>
        <BsThreeDotsVertical className=" text -[20px]" />
      </div>
      {/* MiddleSide */}
      <div className="sm:flex items-center relative hidden">
        <input
          type="search"
          placeholder="Search"
          className="outline-0 bg-[#e9e9e9] p-1.5
           rounded-full pl-8 sm:w-[10 rem] md:w-[20 rem] lg: w-[30 rem]"
        />
        <FiSearch className="absolute left-2" />
      </div>
      {/* RightSide */}
      <div className="flex items-center gap-5">
        <div className="relative pr-2">
          <BsFillInboxFill className="text-[25px]" />
          <div className="absolute -top-2 left-2 w-7 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <p className="text-white font-bold text-[12px]">60</p>
          </div>
        </div>
        <div className="bg-[#f7f7f8] py-1 px-2 rounded-[0.4rem]">
          <button className="font-semibold">Log in</button>
        </div>
        <div className="bg-[#9147ff] py-1 px-2 rounded-[0.4rem]">
          <button className=" text-[white] font-semibold">Sign up</button>
        </div>
        <BsPerson className="text-[18px]" />
      </div>
    </div>
  );
}

export default Navbar;
