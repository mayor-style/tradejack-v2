import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image from "../assets/landingImg4.JPG";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { PiHandDepositBold } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { TbAlignBoxRightTop } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdLogin } from "react-icons/md";

const UserProfileNav = () => {
  const navigateTo = useNavigate();
  const location = useLocation();

  const [activePage, setActivePage] = useState({
    yourInfo: true,
    deposit: false,
    security: false,
    subscription: false,
    help: false,
    logout: false,
  });

  // Function to navigate
  const handleIsYourInfo = () => {
    navigateTo("/account/profile");
  };

  const handleIsDeposit = () => {
    navigateTo("/account/deposit&withdraw");
  };

  const handleIsSecurity = () => {
    navigateTo("/account/security&privacy");
  };

  const handleIsSubscription = () => {
    navigateTo("/account/subscription");
  };

  const handleIsHelp = () => {
    navigateTo("/account/help");
  };

  const handleIsLogout = () => {
    navigateTo("/account/logout");
  };

  // Listen for route changes and update the active page
  useEffect(() => {
    if (location.pathname === "/account/profile") {
      setActivePage({
        yourInfo: true,
        deposit: false,
        security: false,
        subscription: false,
        help: false,
        logout: false,
      });
    }
  }, [location.pathname]); // Runs every time the URL changes

  useEffect(() => {
    if (location.pathname === "/account/deposit&withdraw") {
      setActivePage({
        yourInfo: false,
        deposit: true,
        security: false,
        subscription: false,
        help: false,
        logout: false,
      });
    }
  }, [location.pathname]); // Runs every time the URL changes

  useEffect(() => {
    if (location.pathname === "/account/security&privacy") {
      setActivePage({
        yourInfo: false,
        deposit: false,
        security: true,
        subscription: false,
        help: false,
        logout: false,
      });
    }
  }, [location.pathname]); // Runs every time the URL changes

  useEffect(() => {
    if (location.pathname === "/account/subscription") {
      setActivePage({
        yourInfo: false,
        deposit: false,
        security: false,
        subscription: true,
        help: false,
        logout: false,
      });
    }
  }, [location.pathname]); // Runs every time the URL changes

  useEffect(() => {
    if (location.pathname === "/account/help") {
      setActivePage({
        yourInfo: false,
        deposit: false,
        security: false,
        subscription: false,
        help: true,
        logout: false,
      });
    }
  }, [location.pathname]); // Runs every time the URL changes

  useEffect(() => {
    if (location.pathname === "/account/logout") {
      setActivePage({
        yourInfo: false,
        deposit: false,
        security: false,
        subscription: false,
        help: false,
        logout: true,
      });
    }
  }, [location.pathname]); // Runs every time the URL changes

  return (
    <div className="flex  rounded-[14px] p-[10px] border border-tradeAshLight w-[260px] max-h-max gap-[30px] flex-col">
      <div className="flex items-center gap-[15px]">
        <div className=" lg:w-[60px] sm:w-[150px] w-[100px] ">
          <img className="rounded-full" src={image} alt="" />
        </div>

        <div>
          <p className="text-white lg:text-[17px] sm:text-[38px] text-[25px] font-extrabold">
            0xSanityy
          </p>
          <p className="text-tradeFadeWhite text-[11px] font-[500]">
            0xsanityy@gmail.com
          </p>
        </div>
      </div>

      <div className="lg:flex hidden items-center bg-tradeAsh border border-tradeAshLight px-[10px] py-[2px] gap-[10px] rounded-[8px]">
        <FaMagnifyingGlass className="text-neutral-500 lg:text-[15px] text-[15px]" />
        <input
          className=" bg-transparent outline-none h-[28px] w-[220px] lg:placeholder:text-[13px] placeholder:text-[13px] placeholder:text-tradeFadeWhite lg:text-[13px] text-[13px] text-white"
          type="text"
          placeholder="Find a setting"
        />
      </div>

      <div className="flex flex-col gap-[10px]">
        <div
          onClick={() => handleIsYourInfo()}
          className={` ${
            activePage?.yourInfo
              ? "bg-tradeGreen text-black hover:text-black"
              : "text-tradeFadeWhite hover:text-white"
          } p-[7px] flex items-center gap-[10px] rounded-[7px]  transition-all duration-300 cursor-pointer`}
        >
          <div className="text-[17px]">
            <CgProfile />
          </div>
          <p className="text-[13px] font-[500]">Profile</p>
        </div>
        <div
          onClick={() => handleIsDeposit()}
          className={` ${
            activePage?.deposit
              ? "bg-tradeGreen text-black hover:text-black"
              : "text-tradeFadeWhite hover:text-white"
          } p-[7px] flex items-center gap-[10px] rounded-[7px]    transition-all duration-300 cursor-pointer`}
        >
          <div className="text-[17px]">
            <PiHandDepositBold />
          </div>
          <p className="text-[13px] font-[500]">Wallet</p>
        </div>
        <div
          onClick={() => handleIsSecurity()}
          className={` ${
            activePage?.security
              ? "bg-tradeGreen text-black hover:text-black"
              : "text-tradeFadeWhite hover:text-white"
          } p-[7px] flex items-center gap-[10px] rounded-[7px]    transition-all duration-300 cursor-pointer`}
        >
          <div className="text-[17px]">
            <MdOutlineSecurity />
          </div>
          <p className="text-[13px] font-[500]">Security & Privacy</p>
        </div>
        <div
          onClick={() => handleIsSubscription()}
          className={` ${
            activePage?.subscription
              ? "bg-tradeGreen text-black hover:text-black"
              : "text-tradeFadeWhite hover:text-white"
          } p-[7px] flex items-center gap-[10px] rounded-[7px]   transition-all duration-300 cursor-pointer`}
        >
          <div className="text-[17px]">
            <TbAlignBoxRightTop />
          </div>
          <p className="text-[13px] font-[500]">Subscriptions</p>
        </div>
        <div
          onClick={() => handleIsHelp()}
          className={` ${
            activePage?.help
              ? "bg-tradeGreen text-black hover:text-black"
              : "text-tradeFadeWhite hover:text-white"
          } p-[7px] flex items-center gap-[10px] rounded-[7px]   transition-all duration-300 cursor-pointer`}
        >
          <div className="text-[17px]">
            <BiSupport />
          </div>
          <p className="text-[13px] font-[500]">Support</p>
        </div>
        <div
          onClick={() => handleIsLogout()}
          className={` ${
            activePage?.logout
              ? "bg-tradeGreen text-black hover:text-black"
              : "text-tradeFadeWhite hover:text-white"
          } p-[7px] flex items-center gap-[10px] rounded-[7px]  transition-all duration-300 cursor-pointer`}
        >
          <div className="text-[17px]">
            <MdLogin />
          </div>
          <p className="text-[13px] font-[500]">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileNav;
