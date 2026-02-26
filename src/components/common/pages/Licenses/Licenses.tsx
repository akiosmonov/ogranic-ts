import React from "react";
import PageBanner from "../../sections/PageBanner";
import Newletter from "../../sections/Newletter";

const Licenses = () => {
  return (
    <div>
      <div className="bg-[#f5f5f5]">
        <PageBanner title="Licenses" bgImage="/Background Patterns (1).svg" />
      </div>

      <div className="container mx-auto py-20 px-4 space-y-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <h2 className="text-[#274C5B] text-4xl font-extrabold min-w-70">
            Icon & Graphics
          </h2>
          <div className="space-y-6 text-[#525C60] text-lg leading-relaxed">
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

        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <h2 className="text-[#274C5B] text-4xl font-extrabold min-w-70">
            Photography
          </h2>
          <div className="space-y-8">
            <p className="text-[#525C60] text-lg">
              All images used in the Organick Webflow Template are licensed...
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[#274C5B] text-2xl font-bold mb-2">
                  Unsplash
                </h3>
                <p className="text-[#525C60]">Image 1, Image 2, ... Image 25</p>
              </div>
              <div>
                <h3 className="text-[#274C5B] text-2xl font-bold mb-2">
                  Pexels
                </h3>
                <p className="text-[#525C60]">Image 1, Image 2, ... Image 17</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-270">
          <h1 className="text-[#274C5B] text-4xl min-w-90 font-bold">Font</h1>
          <p>
            Organick template uses free licensed Google Fonts. Please check {" "}
            <span className="font-bold text-black">
              Roboto, Yellowtail
            </span> {" "} and {" "} <span className="font-bold text-black">Open Sans</span>.
          </p>
        </div>
      </div>
      <Newletter />
    </div>
  );
};

export default Licenses;
