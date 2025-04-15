import Footer from "@/components/Footer";
import InAppNav from "@/components/InAppNav";
import UserProfileNav from "@/components/UserProfileNav";
import React from "react";

const DepositAndWithdraw = () => {
  return (
    <>
      <InAppNav />
      <div className=" lg:pt-[80px] md:pt-[85px] pt-[67px] pb-[10px] flex bg-black gap-[15.5px] lg:px-[2%] md:px-[2.5%]">
        <UserProfileNav />
        <div className="flex-1 flex flex-col min-h-screen max-h-max md:border border-neutral-800 md:rounded-[14px]">
          <div className="flex flex-col justify-between p-[15px] border-b border-neutral-800">
            <p className="text-[18px] text-white font-[700]">
              Deposit & Withdraw
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepositAndWithdraw;
