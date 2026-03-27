import React from "react";
import s from "./Hero.module.scss";
import { Button } from "../../ui";
import { useNavigate } from "react-router-dom";
import Newletter from "../Newletter";

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
        <div className="container max-w-[565px] ml-0 lg:ml-[100px] z-10 mx-auto px-4">
          <div>
            <span className=" text-brand-green font-yellow text-3xl sm:text-4xl mb-2">
              100% Natural Food
            </span>

            <h1 className=" text-brand-dark  text-4xl sm:text-5xl md:text-6xl font-black font-rob leading-tight mb-10">
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
              <div className="absolute inset-0 flex flex-col justify-center pl-6 sm:pl-12 pointer-events-none">
                <h4 className="text-white text-2xl font-yellow italic mb-2">
                  Natural!!
                </h4>
                <h2 className="text-white text-4xl font-black leading-tight">
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
              <div className="absolute inset-0 flex flex-col justify-center pl-6 sm:pl-12 pointer-events-none">
                <h4 className="text-brand-green text-2xl font-yellow italic mb-2">
                  Offer!!
                </h4>
                <h2 className="text-brand-dark text-4xl font-black leading-tight">
                  Get 10% off on Vegetables
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 mb-16 md:mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
            <div className="w-full lg:w-1/2">
              <img src="/Photo (5).svg" alt="" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <span className="text-brand-green font-yellow text-3xl sm:text-4xl mb-2">
                About Us
              </span>
              <h2 className=" text-brand-dark text-3xl sm:text-4xl lg:text-5xl font-black font-rob mb-6 leading-tight">
                We Believe in Working Accredited Farmers
              </h2>
              <p className="text-[#525C60] font-semibold text-lg mb-8 leading-relaxed">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industru's standard dummy text ever
                since the 1500s.
              </p>

                <div className="mb-10 flex flex-col gap-4 w-full">
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                    <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm shrink-0">
                      <img
                        src="/Icon (10).svg"
                        className="w-12 h-12 sm:w-14 sm:h-14"
                        alt=""
                      />
                    </div>
                    <div className=" flex flex-col gap-1">
                      <h4 className="text-brand-dark font-black text-lg sm:text-xl leading-snug">
                        Modern Agriculture Equipment
                      </h4>
                      <p className="text-[#525C60] text-sm sm:text-base leading-relaxed">
                        Simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start sm:items-center gap-4">
                    <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm shrink-0">
                      <img
                        src="/Icon (11).svg"
                        className="w-12 h-12 sm:w-14 sm:h-14"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-brand-dark font-black text-lg sm:text-xl leading-snug">
                        Quality Standards
                      </h4>
                      <p className="text-[#525C60] text-sm sm:text-base leading-relaxed">
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
      <Newletter />
    </>
  );
};

export default Hero;
