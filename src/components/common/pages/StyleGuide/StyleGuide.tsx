import React from "react";
import PageBanner from "../../sections/PageBanner";

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
    <section className="py-20">
      <div className="bg-[#f5f5f5]">
        <PageBanner title="Style Guide" bgImage="/Image (13).svg" />
      </div>
      <div className="container mx-auto px-4">
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

              {/* Описание под квадратом */}
              <div className="text-center md:text-left">
                <p className="text-[#274C5B] font-black text-xl">
                  {color.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleGuide;
