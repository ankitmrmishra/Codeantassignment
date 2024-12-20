import React, { useState } from "react";

import Signupimage from "../../../public/SignupIMG.png";

import { RiArrowDropDownLine, RiMenuFill } from "react-icons/ri";
import { BiHome } from "react-icons/bi";
import {
  IoCallOutline,
  IoCloudOutline,
  IoCodeSlash,
  IoMenuSharp,
  IoSearchOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const navigate = useNavigate();
  const handlemenubar = () => setmenuOpen(!menuOpen);
  return (
    <div className="">
      <div className="bg-gray-100 py-6 md:w-[242px] w-full p-4 fixed md:h-screen border-r border-x-gray-300 flex md:flex-col  justify-between align-middle md:items-start items-center">
        {/* Logo Thngyy Goes Here */}
        <div className="flex flex-col justify-center align-middle items-center gap-4">
          <div className="logo_thingy_here flex justify-center align-middle items-center text-[30px] font-normal gap-2">
            <img
              className="w-9 h-10"
              src={Signupimage}
              alt="display_image_signup_page"
            />
            <span>CodeAnt AI</span>
          </div>

          {/*  Now the Actual Stuffs Starts here */}

          <div className="username_dropdown hidden md:block">
            <button className="flex justify-between align-middle items-center md:w-[202px] h-[40px] gap-2 border rounded-lg px-3 py-2">
              <span className="md:w-[156px] truncate">
                ankitmrmishrauiwbdfbfbefbbuywbfuibef
              </span>{" "}
              <RiArrowDropDownLine className="size-7" />
            </button>
          </div>
          <div className="repositories_button hidden md:block">
            <button className="md:w-[210px] w-[160px]  h-[44px] text-base px-4 gap-2 font-semibold  rounded-md  transition duration-200 ease-linear bg-[#1570EF] shadow-[0_6px_20px_rgba(0,118,255,23%)] text-white flex justify-start align-middle items-center">
              <BiHome className="w-6 h-6" /> Repositories
            </button>
          </div>
          {/* This is Code review */}
          <div className="md:w-[210px] hidden  md:h-[44px] font-semibold text-base text-[#414651] md:flex justify-start gap-2 align-middle items-center px-4 py-1">
            <IoCodeSlash className="w-6 h-6" /> Ai Code Review
          </div>
          {/* This is Cloud Security */}
          <div className="md:w-[210px] md:h-[44px] font-semibold text-base text-[#414651] md:flex hidden justify-start gap-2 align-middle items-center px-4 py-1">
            <IoCloudOutline className="w-6 h-6" /> Cloud Security
          </div>
          {/* This is how to Use */}
          <div className="md:w-[210px] md:h-[44px] font-semibold text-base text-[#414651] md:flex hidden justify-start gap-2 align-middle items-center px-4 py-1">
            <FaBook className="w-6 h-6" /> How to Use
          </div>
          {/* This is Settings */}
          <div className="md:w-[210px] md:h-[44px] font-semibold text-base text-[#414651] md:flex hidden justify-start gap-2 align-middle items-center px-4 py-1">
            <IoSettingsOutline className="w-6 h-6" /> Settings
          </div>
        </div>
        <div className="bottomitem">
          <div className="md:w-[210px] md:h-[44px] font-semibold text-base text-[#414651] md:flex hidden justify-start gap-2 align-middle items-center px-4 py-1">
            <IoCallOutline className="w-6 h-6" /> Support
          </div>
          <div
            onClick={() => navigate("/")}
            className="md:w-[210px] md:h-[44px] font-semibold text-base text-[#414651] md:flex hidden justify-start gap-2 align-middle items-center px-4 py-1 hover:cursor-pointer"
          >
            <LuLogOut className="w-6 h-6" /> Logout
          </div>
        </div>

        {/* thisn is mobile view */}
        <div onClick={handlemenubar} className="md:hidden block ">
          <div className="">
            {menuOpen ? <RxCross2 size={25} /> : <RiMenuFill size={25} />}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="bg-gray-400/50  w-full top-20 h-screen fixed md:hidden">
          <div className="bg-white py-3 px-4 flex flex-col gap-5">
            <div className="username_dropdown px-4">
              <button className="flex justify-between align-middle items-center md:w-[202px] h-[40px] gap-2 border rounded-lg md:px-3 px-1 py-2">
                <span className="md:w-[156px] truncate">
                  ankitmrmishrauiwbdfbfbefbbuywbfuibef
                </span>{" "}
                <RiArrowDropDownLine className="size-7" />
              </button>
            </div>
            <div className="md:w-[210px]  md:h-[44px] font-semibold text-base text-[#414651] flex justify-start gap-2 align-middle items-center px-4 py-1">
              <BiHome className="w-6 h-6" /> Repositories
            </div>
            <div className="md:w-[210px]  md:h-[44px] font-semibold text-base text-[#414651] flex justify-start gap-2 align-middle items-center px-4 py-1">
              <IoCodeSlash className="w-6 h-6" /> Ai Code Review
            </div>
            {/* This is Cloud Security */}
            <div className="md:w-[210px] md:h-[44px] font-semibold text-base text-[#414651] flex  justify-start gap-2 align-middle items-center px-4 py-1">
              <IoCloudOutline className="w-6 h-6" /> Cloud Security
            </div>
            {/* This is how to Use */}
            <div className="md:w-[210px] md:h-[44px] font-semibold text-base text-[#414651] flex  justify-start gap-2 align-middle items-center px-4 py-1">
              <FaBook className="w-6 h-6" /> How to Use
            </div>
            {/* This is Settings */}
            <div className="md:w-[210px] md:h-[44px] font-semibold text-base text-[#414651] flex  justify-start gap-2 align-middle items-center px-4 py-1">
              <IoSettingsOutline className="w-6 h-6" /> Settings
            </div>
            <div className="md:w-[210px] md:h-[44px] font-semibold text-base text-[#414651] flex justify-start gap-2 align-middle items-center px-4 py-1">
              <IoCallOutline className="w-6 h-6" /> Support
            </div>
            <div
              onClick={() => navigate("/")}
              className="md:w-[210px] md:h-[44px] font-semibold text-base text-[#414651] flex  justify-start gap-2 align-middle items-center px-4 py-1"
            >
              <LuLogOut className="w-6 h-6" /> Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
