import React from "react";
import s from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#D4D4D4] pb-16">
          <div className="flex flex-col text-right gap-4">
            <h4 className="text-brand-dark text-3xl font-bold font-rob">
              Contact Us
            </h4>
            <div className="">
              <p className=" font-bold text-xl text-brand-dark">Email</p>
              <p className="text-[#525C60] font-light text-lg">
                needhelp@Organic.com
              </p>
            </div>
            <div className="">
              <p className=" font-bold text-xl text-brand-dark">Phone</p>
              <p className="text-[#404547] font-light text-lg">666 888 888</p>
            </div>
            <div className="">
              <p className=" font-bold text-xl text-brand-dark">Address</p>
              <p className="text-[#3f474b] font-light text-lg">
                88 road, borklyn street, USA
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-8 border-x border-[#D4D4D4] px-10">
            <Link to={"/"} className=" flex items-center gap-3">
              <img src="/Logo.svg" alt="" />
              <span className="text-brand-dark text-3xl font-black font-rob">
                Organick
              </span>
            </Link>
            <p className="text-brand-dark text-lg  font-light">
              Simply dummy text of the printing and typesetting industry. <br />
              Lorem Ipsum simply dummy text of the printing{" "}
            </p>
            <div className="flex gap-4">
              <div className="bg-[#EFF6F1] p-4 rounded-full text-brand-dark hover:bg-brand-green hover:text-white cursor-pointer">
                <img src="/insta.svg" alt="" />
              </div>
              <div className="bg-[#EFF6F1] p-4 rounded-full text-brand-dark hover:bg-brand-green hover:text-white cursor-pointer">
                <img src="/facebook.svg" alt="" />
              </div>
              <div className="bg-[#EFF6F1] p-4 rounded-full text-brand-dark hover:bg-brand-green hover:text-white cursor-pointer">
                <img src="/twitter.svg" alt="" />
              </div>
              <div className="bg-[#EFF6F1] p-4 rounded-full text-brand-dark hover:bg-brand-green hover:text-white cursor-pointer">
                <img src="/xd.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="text-left flex flex-col gap-6">
            <h4 className=" text-brand-dark  text-3xl font-black font-rob">
              Utility Pages
            </h4>
            <div className="flex flex-col gap-4 text-[#525C60]">
              <Link
                to={"/"}
                className="hover:text-brand-green font-light text-lg"
              >
                Style Guide
              </Link>
              <Link
                to={"/"}
                className="hover:text-brand-green font-light text-lg"
              >
                404 Not Found
              </Link>
              <Link
                to={"/"}
                className="hover:text-brand-green font-light text-lg"
              >
                Password Protection
              </Link>
              <Link
                to={"/"}
                className="hover:text-brand-green font-light text-lg"
              >
                Licences
              </Link>
              <Link
                to={"/"}
                className="hover:text-brand-green font-light text-lg"
              >
                Changelog
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-8 text-[#535C60]">
        <p>
          Copyright © <span className="font-bold ">Organick</span> | Designed by{" "}
          <span className="font-bold">VictorFlow</span> Templates - Powered by{" "}
          <span className="font-bold"> Webflow</span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
