import React from "react";

const Loading = () => {
  return (
    <div className="absolute top-0 bg-black/40 w-full min-h-screen flex flex-col items-center justify-around text-gray-200">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex justify-center items-center gap-10 md:gap-20">
          <p className="animate-pulse">LOADING...</p>
        </div>
      </div>
      <div className="relative w-[350px] h-[150px] text-center">
        <div className="absolute top-0 bg-gray-400/50 w-full h-full rounded p-4 ">
          <p className="animate-pulse">LOADING...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
