import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import { LuRefreshCcw } from "react-icons/lu";
import RepositorySkeleton from "./RepositorySkeleton";

const Repository = () => {
  return (
    <div className="bg-white rounded-lg md:mt-0 mt-20 flex flex-col gap-1">
      <div className=" flex md:flex-row flex-col justify-between align-middle md:items-center items-start md:px-10 px-3 py-3 gap-2">
        {/* Reposoitories Here */}
        <div className="flex flex-col justify-center align-middle items-start">
          <span className="text-[24px] font-semibold text-[#181D27]">
            Repositories
          </span>
          <span className="text-[14px]">33 total repositories</span>
        </div>
        <div className="flex justify-between align-middle items-center gap-3">
          {/* referesh button here */}
          <button className="md:w-[127px] md:h-[40px] border text-[14px] border-gray-300 px-[14px] py-[10px] rounded-lg flex justify-center align-middle items-center gap-2">
            <LuRefreshCcw /> Refresh All
          </button>
          <button className="md:w-[158px] text-[14px] md:h-[40px] bg-[#1570EF] text-white rounded-lg px-[14px] py-[10px] flex justify-center align-middle items-center gap-2">
            <FaPlus /> Add Respository
          </button>
        </div>
      </div>
      {/* This is Search Bar */}
      <div className="md:px-10 px-3 py-4">
        <div className="md:w-[366px] py-[10px] px-[14px] border border-gray-300 rounded-lg focus:outline-none flex justify-start align-middle items-center gap-1  ">
          <IoSearchOutline className="w-[24px] h-[24px]" />
          <input
            type="search"
            name="Search Repositories"
            id=""
            placeholder="Search Repositories"
            className="text-lg  w-full  rounded-lg focus:outline-none px-3"
          />
        </div>
      </div>
      {/* /  Here we will display all the repositories  */}
      <div className="">
        {repodatas.map((repodata, index) => (
          <RepositorySkeleton key={index} {...repodata} />
        ))}
      </div>
    </div>
  );
};

export default Repository;

const repodatas = [
  {
    repoName: "design-system",
    repoType: "Public",
    technology: "React",
    size: "7320 KB",
    updatedDaysAgo: 1,
  },
  {
    repoName: "codeant-ci-app",
    repoType: "Private",
    technology: "JavaScript",
    size: "5871 KB",
    updatedDaysAgo: 2,
  },
  {
    repoName: "analytics-dashboard",
    repoType: "Private",
    technology: "Python",
    size: "4521 KB",
    updatedDaysAgo: 5,
  },
  {
    repoName: "mobile-app",
    repoType: "Public",
    technology: "Swift",
    size: "3096 KB",
    updatedDaysAgo: 3,
  },
  {
    repoName: "e-commerce-platform",
    repoType: "Private",
    technology: "Java",
    size: "6210 KB",
    updatedDaysAgo: 6,
  },
  {
    repoName: "blog-website",
    repoType: "Public",
    technology: "HTML/CSS",
    size: "1876 KB",
    updatedDaysAgo: 4,
  },
  {
    repoName: "social-network",
    repoType: "Private",
    technology: "PHP",
    size: "5432 KB",
    updatedDaysAgo: 7,
  },
];
