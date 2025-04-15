import React from "react";
import { GiCardExchange } from "react-icons/gi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" bg-black lg:p-[2%] md:p-[2.5%] p-[15px]  flex lg:flex-row flex-col justify-between items-center gap-[25px] border-t  border-tradeAshLight">
      <div className="sm:mt-0 lg:w-[150px] w-[150px] flex justify-between">
        <i class="fa-brands fa-x-twitter text-white hover:text-taskBlue lg:text-[20px] text-[20px] cursor-pointer p-[10px] bg-tradeAsh rounded-[10px]"></i>
        <i class="fa-brands fa-telegram text-white hover:text-taskBlue lg:text-[20px] text-[20px] cursor-pointer  p-[10px] bg-tradeAsh rounded-[10px]"></i>
        <i class="fa-brands fa-instagram text-white hover:text-taskBlue lg:text-[20px] text-[20px] cursor-pointer  p-[10px] bg-tradeAsh rounded-[10px]"></i>
      </div>

      <div className=" bg-blue flex lg:flex-row flex-col gap-[25px] items-center justify-center ">
        <div className="lg:mr-[30px]">
          <p className=" lg:text-[14px] text-[15px] text-neutral-500 font-[500]">
            Copyright © {currentYear} TradeJack
          </p>
        </div>
        <div className="flex justify-between w-[230px]">
          <p className="text-[14px] text-white font-[500] hover:text-taskBlue cursor-pointer">
            Terms
          </p>
          <p className="text-[14px] text-white font-[500] hover:text-taskBlue cursor-pointer">
            Privacy
          </p>
          <p className="text-[14px] text-white font-[500] hover:text-taskBlue cursor-pointer">
            Help
          </p>
          <p className="text-[14px] text-white font-[500] hover:text-taskBlue cursor-pointer">
            Cookies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
