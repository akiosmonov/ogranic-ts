import React from "react";

const PageBanner = ({ title, bgImage }: { title: string; bgImage: string }) => {
  return (
    <div
      className=" relative h-100 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url("${bgImage}")` }}
    >
      <h1 className=" relative text-5xl font-extrabold text-[#274C5B] z-10">
        {title}
      </h1>
    </div>
  );
};

export default PageBanner;
