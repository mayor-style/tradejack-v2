import React from "react";
import { IoStatsChart } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { TbViewfinder } from "react-icons/tb";
import { FaExchangeAlt } from "react-icons/fa";
import { SiQuantconnect } from "react-icons/si";
import { FaNotEqual } from "react-icons/fa6";

const Layer1 = () => {
  return (
    <div className=" lg:pt-[100px] pt-[50px] lg:pb-[100px] pb-[80px] flex flex-col px-[5%]">
      <div className=" flex flex-col lg:flex-row items-end gap-[20px]">
        <div className="flex-1">
          <div className=" z-10 relative border border-tradeGreen w-[95px] h-[28.5px] pb-[2px] rounded-[8px]">
            <p className=" absolute top-[-2px] left-[-3px] text-[12px] text-white font-[500] px-[20px] py-[4px] rounded-[6px] bg-tradeGreen w-max">
              BENEFITS
            </p>
          </div>
          <p className=" mt-[10px] lg:text-[50px] text-[45px] text-white font-[500] lg:w-[500px] lg:leading-[70px] leading-[55px]">
            Redefining global digital asset trading
          </p>
        </div>
        <div className="flex-1 flex  items-end">
          <p className="text-neutral-400 lg:text-[17px] lg:leading-[30px] leading-[25px]">
            Break barriers and unlock opportunities. Our platform connects users
            worldwide, enabling seamless digital asset trading.
            Cryptocurrencies, fiat currencies, and more. With unmatched security
            and transparency.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-[20px] lg:mt-[80px] mt-[40px]">
        <div className="bg-tradeGreen flex-1 gap-[25px] lg:p-[30px] p-[20px] rounded-[20px] h-[450px] flex flex-col justify-between">
          <div>
            <p className="lg:text-[25px] text-[22px] font-Manrope font-[800]">
              Market Overview
            </p>
            <p className="lg:text-[40px] text-[35px] font-Manrope font-[800]">
              4000+ Trades
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-center">
              <IoStatsChart className=" lg:text-[160px] text-[165px]" />
            </div>
            <p className="mt-[20px] text-[17px]">
              Join thousands of successful trades and stay updated with
              real-time market trends.
            </p>
          </div>
        </div>
        <div className="bg-tradeAsh flex-1 gap-[25px] lg:p-[30px] p-[20px] rounded-[20px] h-[450px] flex flex-col justify-between">
          <div>
            <p className="lg:text-[25px] text-[22px] text-white font-Manrope font-[800]">
              Effortless Exploration
            </p>
            <p className="lg:text-[40px] text-[35px] text-white font-Manrope font-[800] ">
              50+ Assets
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-center">
              <TbViewfinder className="lg:text-[160px] text-[155px] text-tradePurple" />
            </div>

            <p className="mt-[20px] text-[17px] text-neutral-400">
              Enjoy a simple, flexible platform to explore and find the best
              deals with ease.
            </p>
          </div>
        </div>
        <div className="bg-tradeAsh flex-1 gap-[25px] lg:p-[30px] p-[20px] rounded-[20px] h-[450px] flex flex-col justify-between">
          <div>
            <p className="lg:text-[25px] text-[22px] text-white font-Manrope font-[800]">
              Secure Market Insights
            </p>
            <p className="lg:text-[40px] text-[35px] text-white font-Manrope font-[800]">
              Safe Trade
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-center">
              <GrSecure className="lg:text-[160px] text-[155px] text-tradeOrange" />
            </div>

            <p className="mt-[20px] text-[17px] text-neutral-400">
              Trade confidently in a secure environment with verified vendors
              and real-time data.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[20px] flex flex-col lg:flex-row gap-[20px]">
        <div className="bg-tradeOrange lg:flex-1 rounded-[22px] rounded-tr-[30px] rounded-br-[30px] lg:h-[450px]">
          <div className=" lg:ml-[40px] ml-[10px] gap-[25px]  lg:p-[30px] p-[20px] rounded-[20px] bg-tradeAsh h-full flex flex-col justify-between">
            <div>
              <p className="lg:text-[25px] text-[22px] text-white font-Manrope font-[800]">
                Trusted Community
              </p>
              <p className="lg:text-[40px] text-[35px] text-white font-Manrope font-[800]">
                50,000+ Verified Users, Reliable Partnerships, Safe Transactions
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-center">
                <SiQuantconnect className="lg:text-[160px] text-[150px] text-tradeBlack" />
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:h-[450px] gap-[25px] lg:w-[365px] rounded-[20px] lg:p-[30px] p-[20px] bg-tradePurple flex flex-col justify-between">
          <div>
            <p className="lg:text-[25px] text-[20px] text-white font-Manrope font-[800]">
              Transparent System
            </p>
            <p className="lg:text-[40px] text-[30px] text-white font-Manrope font-[800]">
              Honest Trading
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-center">
              <FaNotEqual className="lg:text-[160px] text-[155px] text-white" />
            </div>

            <p className="mt-[20px] text-[17px] text-white">
              No hidden fees or surprises. Every trade is straightforward,
              secure, and completely transparent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layer1;
