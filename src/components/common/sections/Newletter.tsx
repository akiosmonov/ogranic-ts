import React from "react";

const Newletter = () => {
  return (
    <section className=" mt-30">
      <div
        className="container rounded-3xl mx-auto"
        style={{
          backgroundImage: `url("/Background (1).svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex py-20 items-center justify-around">
          <div className="lg:w-1/2">
            <h2 className="text-white text-5xl font-black  font-rob leading-tight">
              Subscribe to <br /> our Newsletter
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto items-center">
            <input
              type="email"
              placeholder="Yout Email Address"
              className="w-full sm:w-100 px-8 py-6 rounded-2xl bg-white italic outline-none text-brand-dark"
            />
            <button className="w-full sm:w-auto bg-brand-dark text-white px-12 pt-6 pb-6 rounded-2xl font-bold hover:opacity-90 transition-all">
              Subscibe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newletter;
