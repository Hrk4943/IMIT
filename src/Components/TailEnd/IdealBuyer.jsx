import React from "react";
import Img10 from "../../assets/Img10.png";

export default function IdealBuyer() {
  const Image = () => <img className="mx-2" src={Img10} />;
  return (
    <>
      <div className="flex p-8 " style={{ backgroundColor: "#2E2E2E" }}>
        <div className="w-1/2 pr-4 mt-8">
          <div className="w-1/2 flex ml-60 items-center justify-center relative">
            <Image />
          </div>
        </div>
        <div className="w-1/2 relative">
          <h1 className="text-3xl text-white font-sans mr-40 font-medium mb-5">
            Let Us Help You Find Your Ideal
            <br /> Buyer!
          </h1>
          <p className="text-2xl text-white font-sans mb-4">
            Interior brings 41 years of interior designs experience
            <br /> right to your home or office. Our design professionals
            <br /> are equipped to help you determine the products and
            <br /> design that work best for our customers.
          </p>
          <button
            type="button"
            className="inline-flex items-center -mr-20 px-4 py-2 rounded-sm bg-gradient-to-r from-[#12C2E9] via-[#C471ED] to-[#F64F59]  font-normal font-sans  text-white"
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </>
  );
}
