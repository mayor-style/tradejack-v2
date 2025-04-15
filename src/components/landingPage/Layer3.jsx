import React from "react";
import { PiFediverseLogoFill } from "react-icons/pi";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiGlobalFill } from "react-icons/ri";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { PiPiggyBankBold } from "react-icons/pi";
import { AiOutlineSolution } from "react-icons/ai";
import { SiVfairs } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

const Layer3 = () => {
  return (
    <div className="lg:pt-[150px] pt-[100px] lg:pb-[100px] pb-[80px] px-[5%] bg-tradeWhite">
      <div className=" flex flex-col justify-between">
        <div className="">
          <div className=" z-10 relative border border-tradeGreen w-[100px] h-[28.5px] pb-[2px] rounded-[8px]">
            <p className=" absolute top-[-2px] left-[-3px] text-[12px] text-white font-[500] px-[20px] py-[4px] rounded-[6px] bg-tradeGreen w-max">
              FEATURES
            </p>
          </div>
          <p className="mt-[10px] lg:text-[50px] text-[45px] font-[500] lg:w-[600px] lg:leading-[70px] leading-[55px]">
            Trade your way, securely and transparently
          </p>
        </div>
        <div className="flex items-end mt-[20px]">
          <p className="text-neutral-500 lg:text-[17px] lg:leading-[30px] leading-[25px] lg:w-[650px]">
            Explore how our platform solves key trading challenges with
            innovative features designed for security, transparency, and global
            accessibility.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2 lg:flex lg:mt-[80px] mt-[40px]">
        <div className="flex flex-1 flex-col p-[30px] border-r">
          <BsGlobe className=" lg:text-[40px] text-[35px] text-tradeGreen" />
          <p className="mt-[20px] lg:text-[16px] text-[15px]  font-semibold">
            Global Accessibility
          </p>
          <p className="mt-[5px] lg:text-[16px] text-[15px] text-neutral-500">
            Break geographical barriers by enabling users worldwide to trade
            digital assets seamlessly, ensuring inclusivity and ease of access
            for everyone.
          </p>
        </div>
        <div className="flex flex-1 flex-col p-[30px] border-r">
          <PiFediverseLogoFill className="lg:text-[40px] text-[35px] text-tradeGreen" />
          <p className="mt-[20px] lg:text-[16px] text-[15px]  font-semibold">
            Multi-Asset Support
          </p>
          <p className="mt-[5px] lg:text-[16px] text-[15px]  text-neutral-500">
            Diversify your portfolio with our platform’s support for various
            asset types, including cryptocurrencies, fiat currencies, and other
            financial assets.
          </p>
        </div>
        <div className="flex flex-1 flex-col p-[30px] border-r">
          <MdOutlineVerified className="lg:text-[40px] text-[35px] text-tradeGreen" />
          <p className="mt-[20px] lg:text-[16px] text-[15px]  font-semibold">
            Verified Vendor Network
          </p>
          <p className="mt-[5px] lg:text-[16px] text-[15px]  text-neutral-500">
            Trade confidently with a network of thoroughly verified vendors,
            ensuring safety, transparency, and trust in every transaction.
          </p>
        </div>
        <div className="flex flex-1 flex-col p-[30px]">
          <MdOutlineSecurity className="lg:text-[40px] text-[35px] text-tradeGreen" />
          <p className="mt-[20px] lg:text-[16px] text-[15px]  font-semibold">
            Advanced Security Protocols
          </p>
          <p className="mt-[5px] lg:text-[16px] text-[15px]  text-neutral-500">
            Protect your trades and data with industry-leading security
            measures, giving you peace of mind at every step.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:flex border-t">
        <div className="flex flex-1 flex-col p-[30px]  border-r">
          <MdOutlineNotificationAdd className="lg:text-[40px] text-[35px] text-tradeGreen" />
          <p className="mt-[20px] lg:text-[16px] text-[15px] font-semibold">
            Instant Notifications
          </p>
          <p className="mt-[5px] lg:text-[16px] text-[15px] text-neutral-500">
            Get real-time updates on your trades with instant payment alerts,
            ensuring you're always in the loop with every transaction.
          </p>
        </div>
        <div className="flex flex-1 flex-col p-[30px] border-r">
          <SiVfairs className="lg:text-[40px] text-[35px] text-tradeGreen" />
          <p className="mt-[20px] lg:text-[16px] text-[15px] font-semibold">
            Transparent Transactions
          </p>
          <p className="mt-[5px] lg:text-[16px] text-[15px] text-neutral-500">
            Experience zero hidden fees or unclear terms, with every trade
            carried out with absolute transparency and clarity.
          </p>
        </div>
        <div className="flex flex-1 flex-col p-[30px] border-r">
          <PiPiggyBankBold className="lg:text-[40px] text-[35px] text-tradeGreen" />
          <p className="mt-[20px] lg:text-[16px] text-[15px] font-semibold">
            {" "}
            Collateral-Backed Offers
          </p>
          <p className="mt-[5px] lg:text-[16px] text-[15px] text-neutral-500">
            Vendors are required to provide collateral deposits for their
            offers, ensuring added security and reliability in trades.
          </p>
        </div>
        <div className="flex flex-1 flex-col p-[30px]">
          <AiOutlineSolution className="lg:text-[40px] text-[35px] text-tradeGreen" />
          <p className="mt-[20px] lg:text-[16px] text-[15px] font-semibold">
            Robust Dispute Resolution
          </p>
          <p className="mt-[5px] lg:text-[16px] text-[15px] text-neutral-500">
            Encounter an issue? Submit a dispute, and our dedicated team will
            resolve it promptly and fairly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layer3;
