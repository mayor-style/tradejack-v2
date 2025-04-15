import React from "react";
import { PiGlobeHemisphereEastLight } from "react-icons/pi";

const TopLayer = () => {
  return (
    <div className=" lg:pt-[40px] pt-[30px] lg:pb-[100px] pb-[80px] px-[5%] flex ">
      <div className="flex">
        <div className="flex-1">
          <p className="mt-[10px] lg:text-[70px] text-[50px] text-white font-[500]  lg:leading-[80px] leading-[55px]">
            Trade Smarter, Safer, and Faster
          </p>
          <p className="mt-[20px] text-neutral-400 lg:text-[18px] lg:leading-[30px] leading-[25px]">
            Empowering global transactions with unmatched security,
            transparency, and ease. Explore a marketplace designed for seamless
            trades and profitable opportunities.
          </p>
          <div className="mt-[30px] flex lg:flex-row flex-col gap-[20px]">
            <button className=" lg:w-[170px] border border-tradeGreen py-[8px] rounded-[10px] text-black bg-tradeGreen hover:shadow-tradeGreen hover:shadow-tradeSpreadOut transition-all duration-300 font-[600]">
              Get Started Now
            </button>
            <button className="lg:w-[230px] border border-white py-[8px] rounded-[8px] bg-transparent hover:shadow-white shadow-tradeHoverInDefault hover:shadow-tradeSpreadIn text-white ransition-all duration-300 font-[600]">
              Explore our Marketplace
            </button>
          </div>
        </div>
        <div className="flex-1 hidden lg:flex justify-center">
          <PiGlobeHemisphereEastLight className="text-[400px] text-tradeGreen " />
        </div>
      </div>
    </div>
  );
};

export default TopLayer;
