import React from "react";
import s from "./Hero.module.scss";
import { Button } from "../../ui";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
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
           variant="yellow" className="px-10 py-7 text-xl shadow-lg">
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
