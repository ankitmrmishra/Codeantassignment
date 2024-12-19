import React, { useState } from "react";
import { RiPieChartFill } from "react-icons/ri";
import { FaLongArrowAltUp } from "react-icons/fa";
import Signupimage from "../../public/SignupIMG.png";
import { BsGithub, BsGitlab } from "react-icons/bs";
import { FaBitbucket } from "react-icons/fa6";
import { VscAzureDevops } from "react-icons/vsc";
import { IoKeyOutline } from "react-icons/io5";

const Signup = () => {
  const [activeButton, setActiveButton] = useState("SAAS");

  const handleClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-screen w-screen bg-black">
      {/* Left Signup Section */}
      <div className="md:flex justify-center hidden items-center relative bg-white border-r border-gray-300">
        {/* Background Image */}
        <div className="absolute bottom-0 left-0">
          <img src={Signupimage} alt="display_image_signup_page" />
        </div>

        {/* Center Signup Card */}
        <div className="relative z-10">
          <div className="bg-white shadow-lg rounded-2xl w-[447px] h-[170px] p-5">
            <div className="flex items-center gap-2 border-b-3 border-gray-200 pb-4">
              <img
                className="w-7 h-8"
                src={Signupimage}
                alt="signup_page_logo"
              />
              <span className="text-gray-800 font-bold text-sm">
                AI to Detect & Autofix Bad Code
              </span>
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="flex flex-col items-center">
                <span className="font-bold text-lg">30+</span>
                <span className="text-gray-600 text-sm">Language Support</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-lg">10K+</span>
                <span className="text-gray-600 text-sm">Developers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-lg">100K+</span>
                <span className="text-gray-600 text-sm">Hours Saved</span>
              </div>
            </div>
          </div>

          {/* Absolute Center Card */}
          <div className=" absolute left-[200px] top-[140px] bg-white shadow-lg rounded-2xl w-[270px] h-[164px] flex flex-col items-start px-10 py-3 justify-center align-middle">
            <div className="flex justify-between w-full items-center gap-2">
              <div className="bg-purple-200 w-14 h-14 rounded-full flex items-center justify-center">
                <RiPieChartFill className="text-purple-600 w-7 h-7" />
              </div>
              <div className="flex flex-col items-start  text-[#0049C6] font-bold text-sm">
                <div className="flex  items-center">
                  <FaLongArrowAltUp className="" />
                  <span>14%</span>
                </div>

                <span className="text-black font-normal">This Week</span>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start align-middle">
              <span>issues Fixed</span>
              <span className="text-3xl font-bold">500K+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Signup Section */}
      <div className="bg-gray-100 flex flex-col justify-end align-middle items-center p-4  ">
        {/* This is Signup Section */}
        <div className="bg-white md:w-[672px] w-full h-[276px] py-7 flex flex-col justify-between align-middle items-center rounded-t-lg border border-gray-200">
          <div className="logo_thingy_here flex justify-center align-middle items-center text-[30px] font-normal gap-2">
            <img
              className="w-9 h-10"
              src={Signupimage}
              alt="display_image_signup_page"
            />
            <span>CodeAnt AI</span>
          </div>
          <div className="font-bold text-3xl">Welcome to CodeAnt AI</div>
          <div className="font-semibold">
            <button
              onClick={() => handleClick("SAAS")}
              className={`md:w-[311px] w-[187px]  h-[60px]   px-8 py-2 rounded-md  transition duration-200 ease-linear ${
                activeButton === "SAAS"
                  ? "bg-[#1570EF] shadow-[0_6px_20px_rgba(0,118,255,23%)] text-white"
                  : "bg-[#FAFAFA] text-gray-600"
              }`}
            >
              SAAS
            </button>
            <button
              onClick={() => handleClick("Self Hosted")}
              className={`md:w-[311px] w-[187px] h-[60px] px-8 py-2 rounded-md  transition duration-200 ease-linear ${
                activeButton === "Self Hosted"
                  ? "bg-[#1570EF] shadow-[0_6px_20px_rgba(0,118,255,23%)] text-white"
                  : "bg-[#FAFAFA] text-gray-600"
              }`}
            >
              Self Hosted
            </button>
          </div>
        </div>
        <div className="md:w-[672px] w-full h-[327px] bg-white rounded-b-lg border-t border-gray-200">
          {activeButton == "SAAS" ? <SassComponent /> : <SelfHostedComponent />}
        </div>
        <div className="py-10">
          By signing up you agree to the{" "}
          <span className="font-medium">Privacy Policy.</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;

function SassComponent() {
  return (
    <div className="w-full h-full justify-center align-middle items-center flex flex-col gap-2  font-semibold">
      <button className="md:w-[446px] w-[376px] h-[58px]  rounded-md border flex justify-center items-center align-middle gap-3">
        <BsGithub className="w-6 h-6" />
        Sign In with Github
      </button>
      <button className="md:w-[446px] w-[376px] h-[58px]  rounded-md border  flex justify-center items-center align-middle gap-3">
        <FaBitbucket className="w-6 h-6 text-[#2784FE]" />
        Sign In with BitBucket
      </button>
      <button className="md:w-[446px] w-[376px] h-[58px]  rounded-md border  flex justify-center items-center align-middle gap-3">
        <VscAzureDevops className="w-6 h-6 text-[#0074D1]" />
        Sign In with Azure Devops
      </button>
      <button className="md:w-[446px] w-[376px] h-[58px]  rounded-md border  flex justify-center items-center align-middle gap-3">
        <BsGitlab className="w-6 h-6 text-[#FD6C26]" />
        Sign In with GitLab
      </button>
    </div>
  );
}

function SelfHostedComponent() {
  return (
    <div className="w-full h-full justify-start py-10 align-middle items-center flex flex-col gap-2  font-semibold">
      <button className="md:w-[446px] w-[376px] h-[58px]  rounded-md border  flex justify-center items-center align-middle gap-3">
        <BsGitlab className="w-6 h-6 text-[#FD6C26]" />
        Self Hosted With GitLab
      </button>
      <button className="md:w-[446px] w-[376px] h-[58px]  rounded-md border  flex justify-center items-center align-middle gap-3">
        <IoKeyOutline className="w-6 h-6" />
        Sign In with SSO
      </button>
    </div>
  );
}
