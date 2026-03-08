import React from "react";
import s from "./Hero.module.scss";
import { Button } from "../../ui";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className={s.hero}>
        <div className="absolute inset-0 z-0">
          <img
            src="/Image.svg"
            className="w-full h-full object-cover object-right lg:object-center"
            alt=""
          />
        </div>
        <div className="container z-10 mx-auto px-4 h-full flex flex-col justify-center items-start">
          <div className="max-w-150">
            <span className=" text-brand-green font-yellow text-4xl mb-2">
              100% Natural Food
            </span>

            <h1 className=" text-brand-dark  text-6xl font-black font-rob leading-tight mb-10">
              Choose the best healthier way of life
            </h1>

            <Button
              onClick={() => navigate("/service")}
              variant="yellow"
              className="px-10 py-7 text-xl shadow-lg"
            >
              Explore Now
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src="/Image (16).svg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Fruits"
              />
              <div className="absolute inset-0 flex flex-col justify-center pl-12 pointer-events-none">
                <h4 className="text-white text-2xl font-yellow italic mb-2">
                  Natural!!
                </h4>
                <h2 className="text-white text-4xl font-black max-w-70 leading-tight">
                  Get Garden Fresh Fruits
                </h2>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src="/Image (17).svg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Vegetables"
              />
              <div className="absolute inset-0 flex flex-col justify-center pl-12 pointer-events-none">
                <h4 className="text-brand-green text-2xl font-yellow italic mb-2">
                  Offer!!
                </h4>
                <h2 className="text-brand-dark text-4xl font-black max-w-100 leading-tight">
                  Get 10% off on Vegetables
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 flex-col lg:flex-row items-center gap-12">
          <div className=" lg:flex-row flex items-center gap-16">
            <div className=" lg:w-1/2">
              <img src="/Photo (5).svg" alt="" />
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

                <div className=" mb-10 flex flex-col items-center gap-4">
                  <div className=" flex items-center gap-5">
                    <div className=" bg-white p-4 rounded-xl shadow-sm">
                      <img src="/Icon (10).svg" className=" w-14 h-14" alt="" />
                    </div>
                    <div className=" flex flex-col gap-1">
                      <h4 className=" text-brand-dark font-black text-xl">
                        Modern Agriculture Equipment
                      </h4>
                      <p>
                        Simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                      </p>
                    </div>
                  </div>

                  <div className=" flex items-center gap-4">
                    <div className=" bg-white p-4 rounded-xl shadow-sm">
                      <img src="/Icon (11).svg" className=" w-14 h-14" alt="" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className=" text-brand-dark font-black text-xl">
                        Quality Standards
                      </h4>
                      <p>
                        Simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>

              <Button
                onClick={() => navigate("/shop")}
                className=" bg-brand-dark text-white px-10 py-6 rounded-2xl font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
