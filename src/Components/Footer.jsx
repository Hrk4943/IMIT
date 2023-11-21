import React from "react";
import Logo from "../assets/FooterLogo.png";
import Icons from "../assets/Icons.png";

export default function Footer() {
  const Image = () => <img className=" mx-2" src={Logo} />;
  const Image1 = () => <img className=" w-36 h-5 mx-2" src={Icons} />;
  return (
    <>
      <footer className="bg-white text-black p-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center">
          <div className="flex items-center mb-4 ml-20 lg:mb-0">
            <Image />
          </div>
          <div className="flex flex-col lg:flex-row lg:ml-60 mt-2">
            <div className="mr-40 mb-4 lg:mb-0">
              <ul className="uppercase">
                <li className="mb-2">
                  <a href="#">Home</a>
                </li>
                <li className="mb-2">
                  <a href="#">Profile</a>
                </li>
                <li className="mb-2">
                  <a href="#">Reports</a>
                </li>
                <li className="mb-2">
                  <a href="#">Insights</a>
                </li>
              </ul>
            </div>
            <div className="mr-40 mb-4 lg:mb-0">
              <ul className="uppercase">
                <li className="mb-2">
                  <a href="#">Information Centre</a>
                </li>
                <li className="mb-2">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="mb-2">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="mt-2 ml-36  items-center">
              <Image1 />
              <p className="text-sm  mt-5 ml-2">&copy;2022 Wealth Properties</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
