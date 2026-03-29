import React from "react";
import PageBanner from "../../sections/PageBanner";
import Newletter from "../../sections/Newletter";

const Licenses = () => {
  return (
    <div>
      <div className="bg-[#f5f5f5]">
        <PageBanner title="Licenses" bgImage="/Background Patterns (1).svg" />
      </div>

      <div className="container mx-auto py-16 md:py-20 px-4 space-y-16 md:space-y-24">
        <div className="flex flex-col md:flex-row gap-6 md:gap-20">
          <h2 className="text-[#274C5B] text-3xl md:text-4xl font-extrabold md:w-1/3">
            Icon & Graphics
          </h2>
          <div className="space-y-4 md:space-y-6 text-[#525C60] text-base md:text-lg leading-relaxed md:w-2/3">
            <p>
              Icons and Graphics are manually designed by the VictorFlow
              Templates team...
            </p>
            <p>
              Upon purchasing Software UI Kit Template our team grants you a
              nonexclusive, worldwide copyright license...
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-20">
          <h2 className="text-[#274C5B] text-3xl md:text-4xl font-extrabold md:w-1/3">
            Photography
          </h2>
          <div className="space-y-6 md:space-y-8 md:w-2/3">
            <p className="text-[#525C60] text-base md:text-lg leading-relaxed">
              All images used in the Organick Webflow Template are licensed...
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-[#274C5B] text-xl md:text-2xl font-bold mb-2">
                  Unsplash
                </h3>
                <p className="text-[#525C60] text-sm md:text-base">
                  Image 1, Image 2, ... Image 25
                </p>
              </div>
              <div>
                <h3 className="text-[#274C5B] text-xl md:text-2xl font-bold mb-2">
                  Pexels
                </h3>
                <p className="text-[#525C60] text-sm md:text-base">
                  Image 1, Image 2, ... Image 17
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-start">
          <h2 className="text-[#274C5B] text-3xl md:text-4xl font-extrabold md:w-1/3">
            Font
          </h2>
          <p className="text-[#525C60] text-base md:text-lg leading-relaxed md:w-2/3">
            Organick template uses free licensed Google Fonts. Please check{" "}
            <span className="font-bold text-black">Roboto, Yellowtail</span> and{" "}
            <span className="font-bold text-black">Open Sans</span>.
          </p>
        </div>
      </div>
      <Newletter />
    </div>
  );
};

export default Licenses;
