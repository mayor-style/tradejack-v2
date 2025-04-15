import React, { useState, useEffect, useRef } from "react";
import { GiCardExchange } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import landingImg4 from "../../assets/landingImg4.JPG";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import { RiExchangeFundsLine } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa6";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineQueryStats } from "react-icons/md";
import { TbLayoutList } from "react-icons/tb";
import { BsLightningCharge } from "react-icons/bs";
import { TbHelpCircle } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FaVenusDouble } from "react-icons/fa";

const DashTopNav = () => {
  const [isNavOption, setIsNavOption] = useState(false);
  const [isProfileOption, setIsProfileOption] = useState(false);
  const navOptionRef = useRef(null);

  useEffect(() => {
    const handleNavOptClickOutside = (event) => {
      if (
        navOptionRef.current &&
        !navOptionRef.current.contains(event.target)
      ) {
        setIsProfileOption(false);
      }
    };

    document.addEventListener("mousedown", handleNavOptClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleNavOptClickOutside);
    };
  }, []);

  const placeholders = [
    "Search transaction",
    "Search people",
    "Search payment",
  ];

  const [searchplaceholder, setSearchplaceholder] = useState(placeholders[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSearchplaceholder((prev) => {
        const nextIndex =
          (placeholders.indexOf(prev) + 1) % placeholders.length;
        return placeholders[nextIndex];
      });
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [placeholders]);

  const navigateTo = useNavigate();

  const navigateToProfile = () => {
    navigateTo("/profile");
    setIsProfileOption(false);
  };

  return (
    <>
      <div className="z-50 fixed right-0 left-0 bg-black md:p-[1.5%] p-[15px] h-[67px] md:h-[70px] flex justify-between items-center border-b border-neutral-800 ">
        <div className="flex items-center lg:gap-[20px] gap-[15px]">
          <div
            onClick={() => setIsNavOption((prev) => !prev)}
            className="lg:hidden flex border border-tradeAshLight p-[5px] rounded-[6px]"
          >
            {isNavOption ? (
              <IoCloseSharp className="text-white text-[24px]" />
            ) : (
              <HiOutlineMenuAlt2 className="text-white text-[24px]" />
            )}
          </div>
          <div className="flex items-center justify-start gap-[5px] ">
            {/* <GiCardExchange className="lg:text-[20px] text-[22px] text-tradeGreen" /> */}
            <p className=" lg:text-[20px] text-[22px] font-[700] text-tradeGreen">
              Trade
              <small className="lg:text-[20px] text-[22px] font-[700] text-white">
                Jack
              </small>
            </p>
          </div>
          <div className="ml-[110px] lg:flex hidden">
            <p className="text-[22px] text-white">
              Welcome Back,{" "}
              <small className="text-[22px] font-[700]">X33crypt</small>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[15px]">
          <div className="sm:flex hidden items-center bg-tradeAsh border border-tradeAshLight px-[10px] py-[2px] gap-[10px] rounded-[10px]">
            <FaMagnifyingGlass className="text-neutral-500 lg:text-[15px] text-[15px]" />
            <input
              className=" bg-transparent outline-none h-[28px] w-[220px] lg:placeholder:text-[13px] placeholder:text-[13px] placeholder:text-neutral-500 lg:text-[13px] text-[13px] text-white"
              type="text"
              placeholder={searchplaceholder}
            />
          </div>
          <div className="cursor-pointer flex sm:hidden">
            <FiSearch className="text-white hover:text-tradeGreen text-[23px] transition-all duration-300" />
          </div>
          <div className="cursor-pointer flex">
            <FaRegBell className="text-white hover:text-tradeGreen sm:text-[23px] text-[22px] transition-all duration-300" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setIsProfileOption((prev) => !prev)}
          >
            <img
              className="lg:w-[34px] sm:w-[30px] w-[34px] rounded-full"
              src={landingImg4}
              alt=""
            />
          </div>

          <div
            ref={navOptionRef}
            className={` ${
              isProfileOption ? "flex" : "hidden"
            } fixed right-[25px] top-[67px] flex-col w-[170px] p-[3px] bg-tradeAshLight rounded-[1px]`}
            onClick={() => setIsProfileOption((prev) => !prev)}
          >
            <p
              className="text-white text-[12px] font-[700] py-[7px] px-[15px] rounded-[1px] hover:bg-tradeAshExtraLight hover:underline transition-all duration-300 cursor-pointer"
              onClick={() => navigateTo("/profile")}
            >
              Account
            </p>

            <p className="text-white text-[12px] font-[700] py-[7px] px-[15px]  rounded-[1px] hover:bg-tradeAshExtraLight hover:underline transition-all duration-300 cursor-pointer">
              Support
            </p>
            <p className="text-white text-[12px] font-[700] py-[7px] px-[15px]  rounded-[1px] hover:bg-tradeAshExtraLight hover:underline transition-all duration-300 cursor-pointer">
              Security
            </p>
            <p className="text-white text-[12px] font-[700] py-[7px] px-[15px] rounded-[1px] hover:bg-tradeAshExtraLight hover:underline transition-all duration-300 cursor-pointer">
              Settings
            </p>
            <div className="border-t border-tradeAshExtraLight"></div>
            <p className="text-white text-[12px] font-[700]  py-[7px] px-[15px] rounded-[1px] hover:bg-tradeAshExtraLight hover:underline transition-all duration-300 cursor-pointer">
              Log out
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${
          isNavOption ? "flex" : "hidden"
        } z-50 fixed right-0 left-0 top-[67px] bottom-0 bg-black p-[15px] pt-[14px] pb-[16px] lg:hidden flex flex-col justify-between gap-[20px] `}
      >
        <div className="flex flex-col gap-[10px]">
          <div
            onClick={() => {
              navigateTo("/dashboard");
              setIsNavOption(false);
            }}
            className=" flex gap-[15px] items-center p-[10px] border border-transparent hover:border-tradeAshExtraLight hover:bg-tradeAsh rounded-[12px] "
          >
            <MdSpaceDashboard className="text-[16px] text-tradeFadeWhite" />
            <p className="text-white text-[16px] ">Dashboard</p>
          </div>
          <div className=" flex gap-[15px] items-center p-[10px] border border-transparent hover:border-tradeAshExtraLight hover:bg-tradeAsh rounded-[12px] ">
            <TbLayoutList className="text-[16px] text-tradeFadeWhite" />
            <p className="text-white text-[16px] ">My Offers</p>
          </div>
          <div className=" flex gap-[15px] items-center p-[10px] border border-transparent hover:border-tradeAshExtraLight hover:bg-tradeAsh rounded-[12px] ">
            <FaRegEnvelope className="text-[16px] text-tradeFadeWhite" />
            <p className="text-white text-[16px] "> Messages</p>
          </div>
          <div className=" flex gap-[15px] items-center p-[10px] border border-transparent hover:border-tradeAshExtraLight hover:bg-tradeAsh rounded-[12px] ">
            <FaVenusDouble className="text-[16px] text-tradeFadeWhite" />
            <p className="text-white text-[16px] ">Favourite Vendors</p>
          </div>
          <div className=" flex gap-[15px] items-center p-[10px] border border-transparent hover:border-tradeAshExtraLight hover:bg-tradeAsh rounded-[12px] ">
            <RiExchangeFundsLine className="text-[16px] text-tradeFadeWhite" />
            <p className="text-white text-[16px] ">Transaction History</p>
          </div>
          <div className=" flex gap-[15px] items-center p-[10px] border border-transparent hover:border-tradeAshExtraLight hover:bg-tradeAsh rounded-[12px] ">
            <MdOutlineQueryStats className="text-[16px] text-tradeFadeWhite" />
            <p className="text-white text-[16px] ">Transaction Statistics</p>
          </div>
          <div className=" flex gap-[15px] items-center p-[10px] border border-transparent hover:border-tradeAshExtraLight hover:bg-tradeAsh rounded-[12px] ">
            <LiaUserFriendsSolid className="text-[16px] text-tradeFadeWhite" />
            <p className="text-white text-[16px] ">Invite a friend</p>
          </div>
          <div className=" flex gap-[15px] items-center p-[10px] border border-transparent hover:border-tradeAshExtraLight hover:bg-tradeAsh rounded-[12px] ">
            <TbHelpCircle className="text-[16px] text-tradeFadeWhite" />
            <p className="text-white text-[16px] "> Help Center</p>
          </div>
        </div>
        <div className="w-full h-max flex flex-col gap-[10px]">
          <p
            onClick={() => {
              navigateTo("/marketplace");
              setIsNavOption(false);
            }}
            className="flex-1 flex items-center justify-center text-black text-[16px] font-[600] bg-white py-[10px] rounded-[12px]"
          >
            Sell Asset
          </p>
          <p
            onClick={() => {
              navigateTo("/create-offer");
              setIsNavOption(false);
            }}
            className="flex-1 flex items-center justify-center text-black text-[16px] font-[600] bg-tradeGreen py-[10px] rounded-[12px]"
          >
            Buy Asset
          </p>
        </div>
      </div>
    </>
  );
};

export default DashTopNav;
