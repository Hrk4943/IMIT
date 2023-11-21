import React from "react";
import Logo1 from "../assets/Logo1.png";
import Logo from "../assets/Logo.png";

function Navbar() {
  const Image = () => <img className=" mx-2" src={Logo} />;
  const Image1 = () => <img className=" mx-2" src={Logo1} />;
  return (
    <>
      <nav className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-2xl mt-2 cursor-pointer flex items-center font-[Poppins] text-white">
              <Image1 />
              <Image />
            </div>
            <div className="hidden md:block">
              <div className="ml-24 flex items-baseline space-x-4">
                <a className="text-slate-900 hover:border-b-2 hover:border-black hover:text-black px-5 py-1  font-normal font-sans">
                  HOME
                </a>
                <a className="text-slate-900 hover:border-b-2 hover:border-black hover:text-black px-5 py-1  font-normal font-sans">
                  PROFILE
                </a>
                <a className="text-slate-900 hover:border-b-2 hover:border-black hover:text-black px-5 py-1  font-normal font-sans">
                  REPORTS
                </a>
                <a className="text-slate-900 hover:border-b-2 hover:border-black hover:text-black px-5 py-1  font-normal font-sans">
                  INSIGHT
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <button
                type="button"
                className="inline-flex items-center -mr-20 px-4 py-2 border-2 border-black  font-normal font-sans  text-black"
              >
                LOGIN
              </button>
            </div>
            <div className="hidden md:block">
              <button
                type="button"
                className="inline-flex items-center -mr-16 px-4 py-2 border-2 border-black  font-normal font-sans text-black"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
