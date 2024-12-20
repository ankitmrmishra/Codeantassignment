import React from "react";
import { GoDatabase } from "react-icons/go";

const RepositorySkeleton = ({ repoName, repoType, technology, size, days }) => {
  return (
    <div className="border-t border-b border-t-gray-300 border-b-gray-300 w-full py-[24px] md:px-10 px-3 hover:bg-gray-100 hover:cursor-pointer md:text-[16px] text-[14px] ">
      <div className="Repos_detail flex justify-start items-center align-middle gap-2">
        <div className="text-[20px] font-medium ">{repoName}</div>
        <div className="bg-[#b2deffb4] rounded-full w-[60px] flex justify-center align-middle items-center text-[#175CD3]">
          {repoType}
        </div>
      </div>
      <div className="flex justify-between max-w-[20rem]  align-middle items-center">
        <div className="flex justify-start align-middle items-center gap-2">
          {technology}
          <div className="w-[8px] h-[8px] rounded-full bg-[#1570EF]"></div>
        </div>
        <div className="database_size flex justify-start align-middle items-center gap-2">
          <GoDatabase /> {size}
        </div>
        <div className="database_size flex justify-start align-middle items-center gap-2">
          Updated {days} days ago
        </div>
      </div>
    </div>
  );
};

export default RepositorySkeleton;
