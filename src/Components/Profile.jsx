import React from "react";
import Img3 from "../assets/Img3.png";
import Img4 from "../assets/Img4.png";

export default function Profile() {
  const Image = () => <img className="mx-2" src={Img3} />;
  const Image2 = () => (
    <img className="absolute " src={Img4} style={{ zIndex: 1 }} />
  );

  return (
    <>
      <div className="flex p-8">
        <div className="w-1/2 pr-4 mt-8">
          <div className="w-1/2 flex ml-60 items-center justify-center relative">
            <Image2 />
            <Image />
          </div>
        </div>
        <div className="w-1/2 relative">
          <h1 className="text-3xl font-sans mr-40 font-medium mb-5">
            Create Attractive Profiles
          </h1>
          <p className="text-2xl font-sans mb-4">
            Interior brings 41 years of interior designs experience <br /> right
            to your home or office. Our design professionals
            <br /> are equipped to help you determine the products and
            <br /> design that work best for our customers.
          </p>
          <ul className="list-disc font-normal text-xl space-y-2 mt-8 pl-4">
            <li>Create folders and files</li>
            <li>Set up an internet connection</li>
            <li>Connect your computer</li>
            <li>Navigate all of the programs</li>
            <li>Operating system</li>
          </ul>
          <button
            type="button"
            className="inline-flex items-center mt-10 -mr-20 px-4 py-2 font-normal font-sans rounded-lg text-black border-2 border-transparent"
            style={{
              borderImage:
                "linear-gradient(to right, #12C2E9, #C471ED, #F64F59)",
              borderImageSlice: "1",
            }}
          >
            GET STARTED
          </button>
        </div>
      </div>
    </>
  );
}
