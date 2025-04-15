import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { GiCardExchange } from "react-icons/gi";
import { TbMenu } from "react-icons/tb";
import { CgMenuRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigateTo = useNavigate();

  return (
    <div className="z-50 px-[5%] bg-black lg:h-[100px] h-[90px] flex items-center justify-between fixed top-0 right-0 left-0">
      <div className="flex items-center gap-[5px]">
        <GiCardExchange className="lg:text-[25px] text-[25px] text-tradeGreen" />
        <p className=" lg:text-[25px] text-[24px] font-[700] text-tradeGreen">
          Trade
          <small className="lg:text-[25px] text-[24px] font-[700] text-white">
            Jack
          </small>
        </p>
      </div>
      <div className=" lg:flex hidden gap-[40px]">
        <p className="text-[15px] text-neutral-400 hover:text-white cursor-pointer">
          FEATURES
        </p>
        <p
          onClick={() => navigateTo("/dashboard")}
          className="text-[15px] text-neutral-400 hover:text-white cursor-pointer"
        >
          MARKETPLACE
        </p>
        <p className="text-[15px] text-neutral-400 hover:text-white cursor-pointer">
          ABOUT
        </p>
        <p className="text-[15px] text-neutral-400 hover:text-white cursor-pointer">
          FAQ
        </p>
      </div>
      <div className="flex items-center gap-[20px]">
        <div
          onClick={() => navigateTo("/dashboard")}
          className="flex items-center gap-[10px] text-black border border-white bg-white lg:px-[25px] px-[15px] py-[8px] rounded-[8px] transition-all duration-300 cursor-pointer"
        >
          <p className=" lg:text-[16px] text-[16px] font-[600]">Get Started</p>
          {/* <MdArrowOutward className="text-black text-[17px] font-bold" /> */}
        </div>
        <div className="lg:hidden flex">
          <CgMenuRight className="text-neutral-400 text-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
