import React from "react";
import PageBanner from "../../sections/PageBanner";
import Newletter from "../../sections/Newletter";

const Changelog = () => {
  return (
    <>
      <section>
        <div className="bg-[#f5f5f5]">
          <PageBanner title="Changelog" bgImage="/Image (13).svg" />
        </div>

        <div className="container mx-auto px-4 py-20 max-w-200">
          <div className="flex items-center gap-5 justify-center shadow-2xl p-10 rounded-3xl border border-gray-100 ">
            <img src="/Image (15).svg" alt="" />
            <div className="flex items-center gap-4">
              <h1 className="text-[#274C5B] font-black text-2xl">V.1</h1>
              <p className="text-[#525C60]">
                Initial Organick Webflow Template Release
              </p>
            </div>
          </div>
        </div>
      </section>
      <Newletter />
    </>
  );
};

export default Changelog;
