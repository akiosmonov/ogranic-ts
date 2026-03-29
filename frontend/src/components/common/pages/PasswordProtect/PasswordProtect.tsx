import React, { useState } from "react";
import PageBanner from "../../sections/PageBanner";
import { Button } from "../../ui";
import Newletter from "../../sections/Newletter";

const PasswordProtect = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Проверка пароля:", password);
  };
  return (
    <>
      <section className="bg-white min-h-[70vh]">
        <div className="bg-[#f5f5f5] mb-20 md:mb-30">
          <PageBanner title="Password Protection" bgImage="/Image (13).svg" />
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-10 shadow-2xl p-6 md:p-10 rounded-3xl border border-gray-100 max-w-4xl w-full"
            >
              <div className="shrink">
                <img
                  src="/Image (14).svg"
                  alt="Protected"
                  className="w-full md:w-auto rounded-2xl object-cover"
                />
              </div>

              <div className="flex flex-col justify-center gap-6 w-full">
                <div className="flex flex-col gap-4">
                  <h4 className="text-[#274C5B] font-black text-2xl">
                    Password
                  </h4>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                    className="p-5 border rounded-2xl border-[#ABABAB] text-[#274C5B] focus:outline-none focus:border-[#7EB693] transition-colors w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="py-5 px-10 text-xl shadow-lg self-start"
                >
                  Send Now
                  <span className="ml-2">➔</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Newletter />
    </>
  );
};

export default PasswordProtect;
