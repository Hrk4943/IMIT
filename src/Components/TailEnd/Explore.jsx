import React from "react";
import Icons from "./Icons/Icons";

export default function Explore() {
  return (
    <>
      <div className="flex" style={{ backgroundColor: "#2E2E2E" }}>
        <div className="w-1/2 p-4 ml-32 text-white">
          <h1 className="text-3xl font-sans text-white mr-40 font-medium mb-5">
            Explore the most attractive
            <br /> areas in Kyiv neighborhoods <br />
            to buy a home
          </h1>
          <p className="text-xl text-white font-sans mb-4">
            We are very proud of the service we provide. Discover
            <br /> the hottest communities available in our portfolio. Look
            <br /> through the most popular areas. Our locations and
            <br /> services prove we are the best.
          </p>

          <p className="text-xl text-white font-sans mb-4">
            {" "}
            Kyiv is the capital and most populous city of Ukraine.The
            <br /> city’s name is said to derive from the name of Kyi, one of
            <br /> its four legendary founders. We rank amongst the Top 6<br />{" "}
            agencies in the world.
          </p>
        </div>
        <div className="w-1/2 p-4">
          <ul className="list-none">
            <li className="flex  items-center mb-2">
              <Icons />
            </li>
          </ul>
          <p
            className="text-white p-4 w-fit rounded-md"
            style={{ backgroundColor: "#C471ED" }}
          >
            With tons of benefits for customers. Go True People Wall is
            <br /> the ultimate place where a buyer will search for properties
            <br /> online.
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}
