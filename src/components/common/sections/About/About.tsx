import React from "react";

const About = () => {
  return (
    <section id="about" className=" bg-[#F9F8F8]">
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
              We Believe in Working Accredired Farmers
            </h2>
            <p className="text-[#525C60] font-semibold text-lg mb-8 leading-relaxed">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industru's standard dummy text ever since
              the 1500s.
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
  );
};

export default About;
