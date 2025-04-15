import React from "react";
import landingImg4 from "../../assets/landingImg4.JPG";
import { AiOutlineLike } from "react-icons/ai";
import { MdReportGmailerrorred } from "react-icons/md";
import { IoMdThumbsUp } from "react-icons/io";
import { AiOutlineSafety } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { IoIosThumbsDown } from "react-icons/io";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaExchangeAlt } from "react-icons/fa";
import cashapp from "../../assets/cashapp.jpg";
import { IoMdArrowRoundDown } from "react-icons/io";
import { IoMdArrowRoundUp } from "react-icons/io";

const DashSide = () => {
  return (
    <div className="w-[300px] max-h-max flex flex-col p-[14px] gap-[30px] bg-tradeAsh rounded-[8px]">
      <div className="gap-[20px] border-b border-neutral-800 flex flex-col l pb-[30px] items-center">
        <div className="gap-[10px] flex flex-col items-center">
          <div className="p-[5px] border-dashed border-[2px] border-tradeAshExtraLight rounded-full">
            <img className=" w-[100px] rounded-full" src={landingImg4} alt="" />
          </div>
          <div className="flex flex-col items-center gap-[5px]">
            <div className="flex flex-col items-center">
              <p className="text-white text-[14px] font-[400]">Total Balance</p>
              <p className="text-white text-[28px] font-[700]">$19,280.01</p>
            </div>
            <div className="flex items-center gap-[7px] bg-tradeAshLight px-[10px] py-[4px] rounded-[10px]">
              <p className="text-[12px] text-tradeFadeWhite font-[500]">
                Escrow
              </p>
              <p className="text-[12px] font-[500] text-tradeGreen">
                $4,990.00
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-[10px]">
          <div className="flex-1 flex items-center justify-center gap-[5px] px-[15px] py-[8px] rounded-[8px] bg-tradeAshExtraLight hover:bg-tradeAshLight cursor-pointer">
            <IoMdArrowRoundUp className="text-white" />
            <p className="text-white text-[14px] font-[500]">Withdraw</p>
          </div>
          <div className="flex-1 flex items-center justify-center gap-[5px] px-[15px] py-[8px] rounded-[8px] bg-tradeAshExtraLight hover:bg-tradeAshLight cursor-pointer">
            <IoMdArrowRoundDown className="text-white" />
            <p className="text-white text-[14px] font-[500]">Deposit</p>
          </div>
        </div>

        {/* <div className="flex gap-[10px]">
          <div className=" flex items-center gap-[3px] ">
            <IoMdThumbsUp className="text-[15px] text-tradeGreen" />
            <p className="text-[14px] text-white">5,456</p>
          </div>
          <div className=" flex items-center gap-[3px] ">
            <IoIosThumbsDown className="text-[15px] text-red-500" />
            <p className="text-[14px] text-white">12</p>
          </div>
          <div className=" flex items-center gap-[3px]">
            <AiOutlineSafety className="text-[15px] text-tradePurple" />
            <p className="text-[14px] text-white">75%</p>
          </div>
        </div> */}
      </div>
      <div className="gap-[20px] flex flex-col rounded-[8px] bg-tradeAsh">
        <div className="flex items-center justify-between">
          <p className="text-white text-[18px] font-[600]">Active Offers</p>
          <p className="text-tradeFadeWhite text-[13px] font-[500] cursor-pointer">
            View all
          </p>
        </div>
        {/* <div className="flex flex-col gap-[20px]">
          <div className=" flex flex-col gap-[15px] p-[15px] rounded-[10px] bg-tradeAsh border border-neutral-600">
            <p className="text-white text-[14px] font-[600]">Rating</p>
            <div className="flex gap-[15px]">
              <div className="flex items-center">
                <div className="bg-tradeAsh flex items-center px-[8px] py-[8px] rounded-full">
                  <AiOutlineLike className="text-[16px] text-tradeGreen" />
                </div>
              </div>
              <p className="text-[13.5px] font-[500] text-white">
                Leave a rating for{" "}
                <small className="text-[13.5px] font-[800]">Majik</small> based
                on your recently completed transaction.
              </p>
            </div>
            <p className="py-[4px] px-[15px] bg-tradeGreen text-black text-[14px] w-max rounded-[5px]">
              Rate Now
            </p>
          </div>
          <div className=" flex flex-col gap-[15px] p-[15px] rounded-[10px] bg-tradeAsh border border-neutral-600">
            <p className="text-white text-[14px] font-[600]">Dispute</p>
            <div className="flex gap-[15px]">
              <div className="flex items-center">
                <div className="bg-tradeAsh flex items-center px-[8px] py-[8px] rounded-full">
                  <MdReportGmailerrorred className="text-[16px] text-tradeOrange" />
                </div>
              </div>

              <p className="text-[13.5px] font-[500] text-white">
                Your response is required to resolve dispute for{" "}
                <small className="text-[13.5px] font-[800]">
                  Trade with ID-TRX1234556
                </small>
              </p>
            </div>
            <p className="py-[4px] px-[15px] bg-tradeOrange text-black text-[14px] w-max rounded-[5px]">
              Resolve Now
            </p>
          </div>
        </div> */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px] p-[8px] borde border-neutral-700 hover:bg-tradeAshLight rounded-[8px] cursor-pointer">
            <div>
              <img className="w-[45px] rounded-full" src={cashapp} alt="" />
            </div>
            <div className="w-full flex flex-col  gap-[4px]">
              <div className="flex justify-between">
                <div>
                  <p className="text-[15px] font-[600] text-white">Cash App</p>
                </div>
                <div>
                  <p className="text-[10px] font-[600] text-black px-[6px] py-[1px] bg-tradeGreen rounded-[10px]">
                    Active
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[12px] font-[500] text-tradeFadeWhite">
                  Purchase Limit : 100 - 1,500 USD
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[10px] p-[8px] borde border-neutral-700 hover:bg-tradeAshLight rounded-[8px] cursor-pointer">
            <div>
              <img className="w-[45px] rounded-full" src={cashapp} alt="" />
            </div>
            <div className="w-full flex flex-col  gap-[4px]">
              <div className="flex justify-between">
                <div>
                  <p className="text-[15px] font-[600] text-white">Cash App</p>
                </div>
                <div>
                  <p className="text-[10px] font-[600] text-black px-[6px] py-[1px] bg-tradeOrange rounded-[10px]">
                    Active
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[12px] font-[500] text-tradeFadeWhite">
                  Purchase Limit : 100 - 1,500 USD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSide;
