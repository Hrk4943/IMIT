import React from "react";
import Ellipse from "../../../assets/Ellipse.png";
import Vector1 from "../../../assets/Vector1.png";
import Vector2 from "../../../assets/Vector2.png";
import Vector3 from "../../../assets/Vector3.png";
import Vector4 from "../../../assets/Vector4.png";
import Vector5 from "../../../assets/Vector5.png";
import Vector6 from "../../../assets/Vector6.png";

export default function Icons() {
  const Image = () => <img className="w-[100px]" src={Ellipse} />;
  const Image1 = () => (
    <img className="absolute w-[30px]" src={Vector1} style={{ zIndex: 1 }} />
  );
  const Image2 = () => (
    <img className="absolute w-[20px]" src={Vector2} style={{ zIndex: 1 }} />
  );
  const Image3 = () => (
    <img className="absolute w-[20px]" src={Vector3} style={{ zIndex: 1 }} />
  );
  const Image4 = () => (
    <img className="absolute w-[20px]" src={Vector4} style={{ zIndex: 1 }} />
  );
  const Image5 = () => (
    <img className="absolute w-[20px]" src={Vector5} style={{ zIndex: 1 }} />
  );
  const Image6 = () => (
    <img className="absolute w-[20px]" src={Vector6} style={{ zIndex: 1 }} />
  );

  return (
    <>
      <div>
        <div className="flex p-4">
          <div className="w-full ">
            <div className="w-1/2 flex items-center justify-center relative">
              <Image1 />
              <Image />
            </div>
          </div>
          <div className="w-full">
            <p className="text-xs -ml-9 text-white">
              Trusted and
              <br /> verified property
              <br /> listings..
            </p>
          </div>
        </div>

        <div className="flex p-4">
          <div className="w-full ">
            <div className="w-1/2 flex items-center justify-center relative">
              <Image3 />
              <Image />
            </div>
          </div>
          <div className="w-full">
            <p className="text-xs -ml-9 text-white">
              Complete info on
              <br />
              trending properties
              <br />
              listed.
            </p>
          </div>
        </div>

        <div className="flex p-4">
          <div className="w-full ">
            <div className="w-1/2 flex items-center justify-center relative">
              <Image5 />
              <Image />
            </div>
          </div>
          <div className="w-full">
            <p className="text-xs -ml-9 text-white">
              Home plan layouts
              <br />
              for virtual tours of
              <br />
              every house.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex p-4">
          <div className="w-full ">
            <div className="w-1/2 flex items-center justify-center relative">
              <Image2 />
              <Image />
            </div>
          </div>
          <div className="w-full">
            <p className="text-xs -ml-9 text-white">
              Personalized filters
              <br />
              that make property
              <br />
              search easier.
            </p>
          </div>
        </div>

        <div className="flex p-4">
          <div className="w-full ">
            <div className="w-1/2 flex items-center justify-center relative">
              <Image4 />
              <Image />
            </div>
          </div>
          <div className="w-full">
            <p className="text-xs -ml-9 text-white">
              Details info about
              <br />
              the property that
              <br />
              are in wishlist.
            </p>
          </div>
        </div>

        <div className="flex p-4">
          <div className="w-full">
            <div className="w-1/2 flex items-center justify-center relative">
              <Image6 />
              <Image />
            </div>
          </div>
          <div className="w-full">
            <p className="text-xs -ml-9 text-white">
              QR scan code for
              <br />
              retrieving property
              <br />
              details.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
