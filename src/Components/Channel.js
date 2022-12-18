import React from "react";

const Channel = ({ profile, name, playing, viewers }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center ">
        <div className="w-[2.4rem] h-[2.4rem] flex">
          <img src={profile} alt="" className="rounded-full h-full w-full" />
        </div>
        <div className="hidden lg:flex flex-col text-[14px] pl-2 ">
          <p className="font-semibold ">{name}</p>
          <p className="text-[12px]">{playing}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <div className="w-2 h-2 bg-red-600 rounded-full mr-1"></div>
        <p className="text-[14px]">{viewers}</p>
      </div>
    </div>
  );
};

export default Channel;
