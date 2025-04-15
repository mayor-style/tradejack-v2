import React from "react";
import { MdTravelExplore } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { SiTrustpilot } from "react-icons/si";
import { PiFediverseLogoFill } from "react-icons/pi";
import { FaAward } from "react-icons/fa";

const AboutLayer = () => {
  return (
    <div className=" lg:pt-[100px] pt-[50px] lg:pb-[100px] pb-[80px] px-[5%] flex flex-col">
      <div className=" flex flex-col lg:flex-row justify-between">
        <div className="">
          <div className=" z-10 relative border border-tradeGreen w-[82px] h-[28.5px] pb-[2px] rounded-[8px]">
            <p className=" absolute top-[-2px] left-[-3px] text-[12px] text-white font-[500] px-[20px] py-[4px] rounded-[6px] bg-tradeGreen w-max">
              ABOUT
            </p>
          </div>
          <p className="mt-[10px] lg:text-[50px] text-[45px] text-white font-[500] lg:w-[700px] lg:leading-[70px] leading-[55px]">
            Your all-in-one marketplace for secure and transparent trades
          </p>
        </div>
      </div>
      <div className=" lg:mt-[60px] mt-[30px] flex lg:flex-row flex-col gap-[25px]">
        <div className="flex-1">
          <div>
            <p className="text-[16px] text-neutral-400">
              Whether you're looking to trade assets or buy them to maximize
              your profits, we are here to make it seamless and rewarding.
            </p>
          </div>
          <div className=" lg:mt-[100px] mt-[60px] bg-tradeAsh p-[30px] border border-tradeAsh rounded-[15px]">
            <p className="text-white text-[18px] font-[500]">
              Effortless Cross-Border Trading
            </p>
            <p className="text-[16px] text-neutral-400 mt-[20px]">
              We redefines global transactions by connecting users and vendors
              seamlessly across borders. Say goodbye to the usual complexities
              of international trades. Whether you’re buying or selling, we
              ensure an intuitive and efficient process tailored to your needs.
            </p>
            <div className="flex justify-center items-center mt-[30px]">
              <MdTravelExplore className="text-[150px] text-tradeGreen" />
            </div>
          </div>
        </div>
        <div className=" flex-1 flex flex-col gap-[20px]">
          <div className=" bg-tradeAsh flex-1 p-[30px] border border-tradeAsh rounded-[15px]">
            <p className="text-white text-[18px] font-[500]">
              Unmatched Security Standards
            </p>
            <p className="text-[16px] text-neutral-400 mt-[20px]">
              We prioritize your peace of mind with state of the art security
              measures. From advanced encryption to multi-step verification,
              every trade is safeguarded. Our transparent monitoring system
              ensures that you can trade with confidence and without compromise.
            </p>
            <div className="flex justify-center items-center mt-[30px]">
              <MdSecurity className="text-[150px] text-tradeOrange" />
            </div>
          </div>
          <div className=" flex-1 bg-tradeAsh p-[30px] border border-tradeAsh rounded-[15px]">
            <p className="text-white text-[18px] font-[500]">
              Guaranteed Trade Reliability
            </p>
            <p className="text-[16px] text-neutral-400 mt-[20px]">
              Every offer on our platform is backed by a collateral system that
              guarantees reliability. Vendors commit to a deposit before posting
              offers, providing an extra layer of trust and reducing risks for
              all parties involved.
            </p>
            <div className="flex justify-center items-center mt-[30px]">
              <FaAward className="text-[150px] text-tradeBlack" />
            </div>
          </div>
        </div>

        <div className="flex-1 lg:mt-[100px]">
          <div className=" flex-1 bg-tradeAsh p-[30px] border border-tradeAsh rounded-[15px]">
            <p className="text-white text-[18px] font-[500]">
              Comprehensive Asset Selection
            </p>
            <p className="text-[16px] text-neutral-400 mt-[20px]">
              Discover unparalleled trading opportunities with our extensive
              asset options. From traditional currencies to modern digital
              assets, we cater to diverse financial needs, empowering users to
              trade with versatility and confidence.
            </p>
            <div className="flex justify-center items-center mt-[30px]">
              <PiFediverseLogoFill className="text-[150px] text-tradePurple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLayer;
