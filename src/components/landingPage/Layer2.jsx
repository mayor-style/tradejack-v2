import React, { useState } from "react";

const Layer2 = () => {
  const [isUser, setIsUser] = useState(true);
  const [isVendor, setIsVendor] = useState(false);

  const handleIsUser = () => {
    setIsUser(true);
    setIsVendor(false);
  };

  const handleIsVendor = () => {
    setIsVendor(true);
    setIsUser(false);
  };

  return (
    <div className=" lg:pt-[100px] pt-[50px] lg:pb-[100px] pb-[80px] px-[5%] flex flex-col">
      <div className=" flex flex-col lg:flex-row items-end gap-[20px]">
        <div className="flex-1 ">
          <div className=" z-10 relative border border-tradeGreen w-[128px] h-[28.5px] pb-[2px] rounded-[8px]">
            <p className=" absolute top-[-2px] left-[-3px] text-[12px] text-white font-[500] px-[20px] py-[4px] rounded-[6px] bg-tradeGreen w-max">
              HOW IT WORKS
            </p>
          </div>
          <p className="mt-[10px] lg:text-[50px] text-[45px] text-white font-[500] lg:w-[500px] lg:leading-[70px] leading-[55px]">
            Master the art of secure trading
          </p>
        </div>
        <div className="flex-1 flex items-end">
          <p className="text-neutral-400 lg:text-[17px] lg:leading-[30px] leading-[25px]">
            Gain a clear understanding of how TradeJack simplifies digital asset
            transactions. Our step-by-step process is designed for ease,
            security, and efficiency.
          </p>
        </div>
      </div>
      <div className=" lg:mt-[80px] mt-[40px] flex justify-center lg:justify-normal gap-[20px]">
        <p
          className={`${
            isUser ? "bg-white text-black" : "text-neutral-400"
          } font-[500] px-[25px] py-[8px]  border-tradeAsh border-[1.5px]  rounded-[10px] cursor-pointer transition-all duration-300`}
          onClick={() => handleIsUser()}
        >
          Sell as User
        </p>
        <p
          className={`${
            isVendor ? "bg-white text-black" : "text-neutral-400"
          } font-[500] px-[25px] py-[8px]  border-tradeAsh border-[1.5px]  rounded-[10px] cursor-pointer transition-all duration-300`}
          onClick={() => handleIsVendor()}
        >
          Buy as Vendor
        </p>
      </div>
      <div
        className={`${
          isUser ? "flex" : "hidden"
        } mt-[50px] lg:flex-row flex-col gap-[20px]`}
      >
        <div className="lg:flex-1 lg:h-[280px] h-[260px] rounded-[37px] bg-tradePurple">
          <div className="lg:ml-[12px] ml-[8px] lg:px-[35px] px-[25px] flex flex-col justify-center h-full rounded-[35px] bg-tradeAsh gap-[40px]">
            <p className="text-[35px] font-[500] font-[Tiny5] text-tradePurple ">
              Step 1
            </p>
            <p className="text-neutral-400 lg:text-[17px]">
              Explore the marketplace to browse verified vendors, compare
              offers, and select the one with the best rates for your assets.
            </p>
          </div>
        </div>
        <div className="lg:flex-1 lg:h-[280px] h-[260px] rounded-[37px] bg-tradeOrange ">
          <div className="lg:ml-[12px] ml-[8px] lg:px-[35px] px-[25px] flex flex-col justify-center h-full rounded-[35px] bg-tradeAsh gap-[40px]">
            <p className="text-[35px] font-[500] font-[Tiny5] text-tradeOrange ">
              Step 2
            </p>
            <p className="text-neutral-400 lg:text-[17px]">
              Engage with the vendor to initiate contact, discuss their offer,
              and finalize trade details for a smooth and secure transaction.
            </p>
          </div>
        </div>
        <div className="lg:flex-1 lg:h-[280px] h-[260px] rounded-[37px] bg-tradeGreen ">
          <div className="lg:ml-[12px] ml-[8px] lg:px-[35px] px-[25px] flex flex-col justify-center h-full rounded-[35px] bg-tradeAsh gap-[40px]">
            <p className="text-[35px] font-[500] font-[Tiny5] text-tradeGreen ">
              Step 3
            </p>
            <p className="text-neutral-400 lg:text-[17px]">
              Once the trade is initiated and successfully completed, receive
              your payment, marking the transaction as finalized.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${
          isVendor ? "flex" : "hidden"
        } mt-[50px] lg:flex-row flex-col gap-[20px] `}
      >
        <div className="lg:flex-1 lg:h-[280px] h-[260px] rounded-[37px]  bg-tradePurple">
          <div className="lg:ml-[12px] ml-[8px] lg:px-[35px] px-[25px] flex flex-col justify-center h-full rounded-[35px] bg-tradeAsh gap-[40px]">
            <p className="text-[35px] font-[500] font-[Tiny5] text-tradePurple ">
              Step 1
            </p>
            <p className="text-neutral-400 lg:text-[17px]">
              Create an offer specifying the asset you want to buy, your rate,
              and trading rules. Ensure a collateral deposit is in place before
              publishing the offer.
            </p>
          </div>
        </div>
        <div className="lg:flex-1 lg:h-[280px] h-[260px] rounded-[37px] bg-tradeOrange ">
          <div className="lg:ml-[12px] ml-[8px] lg:px-[35px] px-[25px] flex flex-col justify-center h-full rounded-[35px] bg-tradeAsh gap-[40px]">
            <p className="text-[35px] font-[500] font-[Tiny5] text-tradeOrange ">
              Step 2
            </p>
            <p className="text-neutral-400 lg:text-[17px]">
              Connect with users who request your offer, carefully finalize the
              agreed trade terms, and initialize the transaction.
            </p>
          </div>
        </div>
        <div className="lg:flex-1 lg:h-[280px] h-[260px] rounded-[37px] bg-tradeGreen ">
          <div className="lg:ml-[12px] ml-[8px] lg:px-[35px] px-[25px] flex flex-col justify-center h-full rounded-[35px] bg-tradeAsh gap-[40px]">
            <p className="text-[35px] font-[500] font-[Tiny5] text-tradeGreen ">
              Step 3
            </p>
            <p className="text-neutral-400 lg:text-[17px]">
              Ensure the trade is completed within the agreed timeframe to earn
              positive ratings, which enhance your visibility and attract more
              potential requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layer2;
