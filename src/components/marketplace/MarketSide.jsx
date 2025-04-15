import React from "react";
import landingImg4 from "../../assets/landingImg4.JPG";
import { AiOutlineLike } from "react-icons/ai";
import { MdReportGmailerrorred } from "react-icons/md";

const MarketSide = () => {
  return (
    <div className="w-[300px] flex flex-col gap-[30px]">
      <div className="p-[20px] gap-[10px] flex flex-col items-center rounded-[8px] bg-tradeAsh">
        <div className="w-[100px] border-[2px] border-dashed rounded-full p-[3px]">
          <img className=" rounded-full" src={landingImg4} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white text-[15px] font-[500]">Total Balance</p>
          <p className="text-white text-[28px] font-[700]">#382,000.43</p>
        </div>

        <div className="flex gap-[10px]">
          <p className="text-white text-[13px] px-[10px] py-[2px] bg-tradePurple rounded-[5px]">
            Rating: <small className="text-[13px]">4.5</small>
          </p>
          <p className="text-white text-[13px] px-[10px] py-[2px] bg-tradeOrange rounded-[5px]">
            Beginner
          </p>
        </div>
        <div className="mt-[30px] flex flex-col items-center gap-[5px]">
          <p className="text-white text-[13px] font-[500]">
            Verification Status
          </p>
          <p className="px-[50px] py-[7px] text-[12px] border border-neutral-500 hover:border-tradeGreen text-white bg-tradeBlack hover:bg-tradGreen rounded-[8px] cursor-pointer">
            75% Complete
          </p>
        </div>
      </div>
      <div className="p-[20px] gap-[20px] flex flex-col rounded-[8px] bg-tradeAsh">
        <div className="">
          <p className="text-white text-[18px] font-[600]">Action Needed</p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className=" flex flex-col gap-[15px] p-[15px] rounded-[10px] bg-tradeBlack border border-neutral-600">
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
          <div className=" flex flex-col gap-[15px] p-[15px] rounded-[10px] bg-tradeBlack border border-neutral-600">
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
        </div>
      </div>
    </div>
  );
};

export default MarketSide;
