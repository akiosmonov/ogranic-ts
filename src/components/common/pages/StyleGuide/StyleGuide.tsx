import React from "react";
import PageBanner from "../../sections/PageBanner";
import Newletter from "../../sections/Newletter";

const colors = [
  { name: "Blue Berry", hex: "#274C5B", text: "white" },
  { name: "Green Leaf", hex: "#7EB693", text: "white" },
  { name: "Yellow Sun", hex: "#EFD372", text: "#274C5B" },
  { name: "Grey Cloud", hex: "#D4D4D4", text: "#274C5B" },
  { name: "White", hex: "#EFF6F1", text: "black" },
  { name: "White Snow", hex: "#F9F8F8", text: "#274C5B" },
  { name: "Dark Night", hex: "#525C60", text: "white" },
];

const StyleGuide = () => {
  return (
    <>
      <section className="py-20">
        <div className="bg-[#f5f5f5]">
          <PageBanner title="Style Guide" bgImage="/Image (13).svg" />
        </div>
        <div className="container flex flex-col gap-50 mx-auto px-4">
          <h2 className="text-[#274C5B] text-4xl font-black mb-10">Color</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {colors.map((color) => (
              <div key={color.hex} className="flex flex-col gap-4">
                <div
                  className="h-32 w-full rounded-2xl shadow-sm border border-black/5 flex items-center justify-center transition-transform hover:scale-105"
                  style={{ backgroundColor: color.hex }}
                >
                  <span
                    className="font-bold text-sm uppercase tracking-widest"
                    style={{ color: color.text }}
                  >
                    {color.hex}
                  </span>
                </div>

                <div className="text-center md:text-left">
                  <p className="text-[#274C5B] font-black text-xl">
                    {color.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-50">
            <h1 className="text-[#274C5B] font-bold text-2xl">Text Styles</h1>

            <div className="flex flex-col gap-10">
              <h1 className="text-[#274C5B] text-6xl font-black">
                Display H1 Text
              </h1>
              <h2 className="text-[#274C5B] text-5xl font-black">
                Heading H2 Text
              </h2>
              <h3 className="text-[#274C5B] text-4xl font-black">
                Heading H3 Text
              </h3>
              <h4 className="text-[#274C5B] text-3xl font-black">
                Heading H4 Text
              </h4>
              <h5 className="text-[#274C5B] text-2xl font-black">
                Heading H5 Text
              </h5>
              <h6 className="text-[#274C5B] text-xl font-black">
                Heading H6 Text
              </h6>
            </div>
          </div>

          <div className="flex gap-50 ">
            <h1 className="text-[#274C5B] font-bold text-2xl">Paragraph</h1>
            <p className="text-[#525C60]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.established fact
              that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed.
            </p>
          </div>

          <div className="flex gap-70 ">
            <h1 className="font-bold text-[#274C5B] text-2xl">List</h1>
            <div className="flex flex-col gap-10">
              <ol className="list-decimal list-inside flex flex-col gap-4 text-[#525C60]">
                <li>Publishing packages and web page...</li>
                <li>Content here, content here...</li>
                <li>Packages and web page...</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Newletter />
    </>
  );
};

export default StyleGuide;
