import React from "react";
import Sidebar from "./ui/Sidebar";
import Repository from "./ui/Repository";

const RepoScreen = () => {
  return (
    <div className="md:grid flex flex-col md:grid-cols-6  gap-0 bg-gray-300 ">
      <div className="md:col-span-1 ">
        <Sidebar />
      </div>
      <div className="md:col-span-5   md:p-10 min-h-screen">
        <Repository />
      </div>
    </div>
  );
};

export default RepoScreen;
