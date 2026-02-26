import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      className="min-h-screen flex items-center"
      style={{
        backgroundImage: `url("/Image (11).svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 flex justify-center md:justify-end">
        <div className="max-w-lg flex flex-col items-start gap-4">
          <img src="/404.svg" alt="404" className="w-full max-w-150" />
          
          <h1 className="text-[#274C5B] font-black text-6xl md:text-8xl leading-tight">
            Page not found
          </h1>
          
          <p className="text-[#525C60] text-lg font-medium mb-4">
            The page you are looking for doesn't exist or has been moved
          </p>

          <Link 
            to="/" 
            className="bg-[#274C5B] text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#335B6B] transition-all transform hover:scale-105"
          >
            Go to Homepage
            <span className="bg-[#335B6B] rounded-full w-6 h-6 flex items-center justify-center text-[10px]">
              ➔
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;