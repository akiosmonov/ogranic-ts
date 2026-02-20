import React from "react";
import PageBanner from "../PageBanner";
import Newletter from "../Newletter";

const servicesData = [
  {
    id: 1,
    title: "Dairy Products",
    img: "/IconS.svg",
    desc: "Fresh and organic milk right from the farm.",
  },
  {
    id: 2,
    title: "Store Services",
    img: "/Icon (7).svg",
    desc: "Wide range of organic products in our local stores.",
  },
  {
    id: 3,
    title: "Online Delivery",
    img: "/Icon (8).svg",
    desc: "Fast and reliable delivery to your doorstep.",
  },
  {
    id: 4,
    title: "Agricultural Services",
    img: "/Icon (9).svg",
    desc: "Professional help for your own organic garden.",
  },
];

const Service = () => {
  return (
    <>
      <PageBanner title="Service" bgImage="/Banner Image (1).svg" />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-brand-green font-yellow text-4xl">
              What we do
            </span>
            <h2 className="text-brand-dark text-5xl font-black mt-2">
              Services We Provide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {servicesData.map((item) => (
              <div key={item.id} className="flex items-center gap-6 p-6">
                <img src={item.img} className="w-20 h-20" alt="" />
                <div>
                  <h3 className="text-brand-dark text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-[#525C60] mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-center py-28"
        style={{ backgroundImage: `url("/Background Image.svg")` }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-200 mx-auto">
            <span className="text-brand-green font-yellow text-4xl mb-2">
              Organic Only
            </span>
            <h2 className="text-brand-dark text-5xl font-black font-rob mb-6">
              Everyday Fresh & Clean
            </h2>
            <p className="text-[#525C60] font-semibold text-lg mb-8 leading-relaxed">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
