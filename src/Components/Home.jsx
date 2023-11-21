import React from "react";
import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";

function Home() {
  const Image = () => <img className="mx-2 " src={Img1} />;
  const Image2 = () => (
    <img className="absolute mt-24 -ml-96" src={Img2} style={{ zIndex: 1 }} />
  );

  return (
    <>
      <div className="flex p-8">
        <div className="w-1/2 pr-4 ml-32 mt-48">
          <p className="text-black w-96 text-4xl font-sans mb-3">BUY YOUR</p>
          <h1 className="text-6xl font-sans font-medium mb-4">DREAM HOME</h1>
          <p className="text-black text-4xl font-sans mb-10">IN KYIV!</p>
          <button
            type="button"
            className="inline-flex items-center -mr-20 px-4 py-2 rounded-md bg-gradient-to-r from-[#12C2E9] via-[#C471ED] to-[#F64F59]  font-normal font-sans  text-white"
          >
            GET STARTED
          </button>
        </div>
        <div className="w-1/2 flex items-center justify-center relative">
          <Image2 />
          <Image />
        </div>
      </div>
    </>
  );
}

export default Home;
