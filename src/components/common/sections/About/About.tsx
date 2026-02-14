import React from "react";
import Newletter from "../Newletter";

const About = () => {
  return (
    <>
      <section id="about" className=" bg-white">
        <div
          className="h-100 flex items-center justify-center"
          style={{
            backgroundImage: `url("/Image (1).svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className=" flex items-center justify-center text-brand-dark text-4xl font-extrabold">
            About Us
          </h1>
        </div>
        <div className="container mx-auto px-4 flex-col lg:flex-row items-center gap-12">
          <div className=" lg:flex-row flex items-center gap-16">
            <div className=" lg:w-1/2">
              <img src="/Image (2).svg" alt="" />
            </div>
            <div className=" lg:w-1/2 flex flex-col items-start">
              <span className="text-brand-green font-yellow text-4xl mb-2">
                About Us
              </span>
              <h2 className=" text-brand-dark text-5xl font-black font-rob mb-6 leading-tight">
                We Believe in Working Accredited Farmers
              </h2>
              <p className="text-[#525C60] font-semibold text-lg mb-8 leading-relaxed">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industru's standard dummy text ever
                since the 1500s.
              </p>

              <div className=" mb-10 flex items-center gap-4">
                <div className=" flex items-center gap-5">
                  <div className=" bg-white p-4 rounded-xl shadow-sm">
                    <img src="/Icon.svg" className=" w-10 h-10" alt="" />
                  </div>
                  <div className=" flex flex-col">
                    <h4 className=" text-brand-dark font-black text-xl">
                      Modern Agriculture Equipment
                    </h4>
                  </div>
                </div>

                <div className=" flex items-center gap-4">
                  <div className=" bg-white p-4 rounded-xl shadow-sm">
                    <img src="/Icon (1).svg" className=" w-10 h-10" alt="" />
                  </div>
                  <h4 className=" text-brand-dark font-black text-xl">
                    No growth hormones are used
                  </h4>
                </div>
              </div>

              <button className=" bg-brand-dark text-white px-10 py-6 rounded-2xl font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all">
                Shop Now
                <div className="bg-[#335B6B] rounded-full w-10 h-10 flex items-center justify-center text-[10px]">
                  ➔
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F8F8]">
        <div className="container mx-auto p-20 flex-col lg:flex-row items-center gap-12">
          <div className=" flex justify-center">
            <div className=" flex items-center gap-30  ">
              <div className=" flex flex-col max-w-100">
                <span className=" text-brand-green font-yellow text-4xl mb-2">
                  Why Choose us?
                </span>
                <h3 className=" text-brand-dark text-5xl font-black font-rob mb-6 leading-tight">
                  We do not buy from the open market & traders.
                </h3>
                <p className=" text-[#525C60] font-semibold text-lg mb-8 leading-relaxed">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard the 1500s,
                  when an unknown
                </p>

                <div className=" flex flex-col gap-8 mt-10">
                  <div className=" flex flex-col gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center mb-4 gap-4 shrink-0">
                      <img src="/Icon (2).svg" alt="" />
                      <h3 className="text-brand-dark text-xl font-bold ">
                        100% Natural Product
                      </h3>
                    </div>

                    <p className="text-[#525C60] ml-9 text-base mb-6">
                      Simply dummy text of the printing and typesetting industry
                      Lorem Ipsum
                    </p>
                  </div>
                </div>
                <div className=" flex flex-col gap-2">
                  <div className="flex flex-col gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center mb-4 gap-4 shrink-0">
                      <img src="/Icon (2).svg" alt="" />
                      <h3 className="text-brand-dark text-xl font-bold">
                        Increases resistence
                      </h3>
                    </div>

                    <p className="text-[#525C60] ml-9 text-base">
                      Filling, and temptingly healthy, our Biona Organic Granola
                      with Wild Berries is just the thing
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <img src="/Image (3).svg" alt="" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {[
              {
                img: "/Icon (3).svg",
                title: "Return Policy",
                desc: "Simply dummy text of the printintypesetting industry.",
              },
              {
                img: "/Icon (4).svg",
                title: "100% Fresh",
                desc: "Simply dummy text of the printintypesetting industry.",
              },
              {
                img: "/Icon (5).svg",
                title: "Support 24/7",
                desc: "Simply dummy text of the printintypesetting industry.",
              },
              {
                img: "/Icon (6).svg",
                title: "Secured Payment",
                desc: "Simply dummy text of the printintypesetting industry.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-4xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#F9F8F8] p-4 rounded-2xl mb-4">
                  <img src={item.img} alt="" className="w-12 h-12" />
                </div>
                <h6 className="text-brand-dark font-black text-xl mb-4">
                  {item.title}
                </h6>
                <p className="text-[#525C60] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container mx-auto pt-30 px-4">
          <div className=" flex flex-col items-center text-center mb-12">
            <div className=" flex flex-col text-center ">
              <div className=" flex flex-col text-center">
                <span className=" text-brand-green font-yellow text-4xl mb-2">
                  Team
                </span>
                <h4 className=" text-brand-dark text-4xl font-black font-rob mb-6 leading-tight">
                  Our Organic Experts
                </h4>
              </div>
              <p className="text-[#525C60] text-center max-w-250 font-semibold text-lg mb-8 leading-relaxed">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {[
                {
                  name: "Giovani Bacardo",
                  role: "Farmer",
                  img: "/Image (4).svg",
                },
                {
                  name: "Marianne Loreno",
                  role: "Designer",
                  img: "/Image (5).svg",
                },
                { name: "Riga Peloro", role: "Farmer", img: "/Image (6).svg" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F8F8] rounded-3xl overflow-hidden hover:shadow-xl transition-all group"
                >
                  <img
                    src={item.img}
                    className="w-full h-100 object-cover"
                    alt=""
                  />
                  <div className="p-9 flex justify-between items-center">
                    <div>
                      <h5 className="text-brand-dark text-2xl font-black">
                        {item.name}
                      </h5>
                      <p className="text-brand-green font-yellow text-xl">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#274C5B]">
        <div className="container mx-auto pt-30 px-4">
          <div className=" flex flex-col items-center text-center mb-12">
            <div className=" flex flex-col text-center ">
              <div className=" flex flex-col text-center">
                <span className=" text-brand-green font-yellow text-4xl mb-2">
                  About Us
                </span>
                <h4 className="text-white text-4xl font-black font-rob mb-6 leading-tight">
                  What We Offer for You
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 pb-30">
              {[
                {
                  name: "Spicy",
                  img: "/Image (7).svg",
                },
                {
                  name: "Nuts & Feesd",
                  img: "/Image (8).svg",
                },
                {
                  name: "Fruits",
                  img: "/Image (9).svg",
                },
                {
                  name: "Vegetable",
                  img: "/Image (10).svg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl overflow-hidden hover:shadow-xl transition-all group"
                >
                  <img src={item.img} className="bg-white rounded-2xl" alt="" />
                  <div className="p-5 flex justify-between items-center">
                    <div>
                      <h5 className="text-white text-2xl font-rob">
                        {item.name}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Newletter />
    </>
  );
};

export default About;
