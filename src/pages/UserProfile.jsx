import Footer from "@/components/Footer";
import MarketTopNav from "@/components/InAppNav";
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image from "../assets/landingImg4.JPG";
import { MdThumbUpAlt } from "react-icons/md";
import { MdThumbDownAlt } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { PiHorseBold } from "react-icons/pi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { PiHandDepositBold } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { TbAlignBoxRightTop } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdLogin } from "react-icons/md";
import UserProfileNav from "@/components/UserProfileNav";

const UserProfile = () => {
  const [isProfileEdit, setIsProfileEdit] = useState(false);
  const [isBankAccountEdit, setIsBankAccountEdit] = useState(false);
  const [isOnlineWalletEdit, setIsOnlineWalletEdit] = useState(false);

  const profileRef = useRef(null);
  const bankAccountRef = useRef(null);
  const walletRef = useRef(null);

  const navigateTo = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isBankAccountEdit) {
      bankAccountRef.current?.focus(); // Focuses on the first input field
    }
  }, [isBankAccountEdit]);

  useEffect(() => {
    if (isOnlineWalletEdit) {
      walletRef.current?.focus(); // Focuses on the first input field
    }
  }, [isOnlineWalletEdit]);

  return (
    <>
      <MarketTopNav />

      <div className="lg:pt-[75px] md:pt-[75px] pt-[60px] pb-[10px] lg:px-[2%] md:px-[2.5%] min-h-screen bg-black">
        <div className=" flex md:hidden items-center gap-[10px] p-[15px]  border-b border-tradeAshLight ">
          <p className=" text-[17px] text-white font-[700] cursor-pointer">
            Your Profile
          </p>
        </div>
        <div className="flex flex-col mt-[20px] md:gap-[50px] gap-[20px]">
          <div className=" flex md:flex-row flex-col justify-between md:items-center gap-[20px] md:p-0 p-[15px] ">
            <div className="flex gap-[20px] items-center ">
              <div className="flex lg:w-[170px] md:w-[150px] w-[130px] justify-center cursor-pointer ">
                <img className="rounded-full" src={image} alt="" />
              </div>

              <div className="flex flex-col justify-center gap-[15px] ">
                <div className="flex flex-col">
                  <p className="text-white lg:text-[24px] sm:text-[22px] text-[20px] font-[700]">
                    Adeleke Lukman
                  </p>
                  <p className="text-tradeFadeWhite lg:text-[18px] sm:text-[16px] text-[15px] font-[500]">
                    sanityy0x
                  </p>
                  <div className="flex items-center gap-[3px]">
                    <div className="flex items-center gap-[5px]">
                      <p className="lg:text-[13px] sm:text-[13px] text-[13px] font-[500] text-white">
                        Nigeria
                      </p>
                    </div>
                    <p className="lg:text-[14px] sm:text-[13px] text-[14px] font-[700] text-tradeFadeWhite">
                      &#x2022;
                    </p>
                    <p className="lg:text-[13px] sm:text-[13px] text-[13px] font-[500] text-tradeFadeWhite">
                      Joined 3 weeks ago
                    </p>
                  </div>
                </div>

                {/* <div className="flex flex-col gap-[2px]">
                  <div className="flex gap-[10px]">
                    <div className="flex gap-[3px] items-center">
                      <p className="text-white lg:text-[13px] sm:text-[13px] text-[14px] font-[500]">
                        #TopTrader
                      </p>
                      <PiHorseBold className="text-tradeOrange" />
                    </div>
                    <p className="text-tradeGreen lg:text-[13px] sm:text-[13px] text-[14px] font-[500]">
                      Online
                    </p>
                  </div>

                  <div className="flex items-center gap-[3px]">
                    <div className="flex items-center gap-[5px]">
                      <p className="lg:text-[13px] sm:text-[13px] text-[14px] font-[500] text-white">
                        Nigeria
                      </p>
                    </div>
                    <p className="lg:text-[14px] sm:text-[13px] text-[14px] font-[700] text-tradeFadeWhite">
                      &#x2022;
                    </p>
                    <p className="lg:text-[13px] sm:text-[13px] text-[14px] font-[500] text-tradeFadeWhite">
                      Joined 3 weeks ago
                    </p>
                  </div>
                </div> */}

                <div className="flex gap-[10px]">
                  <div className=" flex md:flex-col flex-row gap-[5px] lg:py-[5px] lg:px-[10px] py-[4px] px-[6px] bg-tradeAsh border border-tradeAshLight  rounded-[8px]">
                    <div className="flex gap-[10px] items-center">
                      <MdThumbUpAlt className="text-[15px] text-tradeGreen" />
                      <p className=" md:flex hidden  text-[12px] font-[600] text-white">
                        Positive Feedback
                      </p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <p className="text-white text-[15px] font-[600]">0</p>
                    </div>
                  </div>
                  <div className=" flex md:flex-col flex-row gap-[5px]  lg:py-[5px] lg:px-[10px] py-[4px] px-[6px] bg-tradeAsh border border-tradeAshLight  rounded-[8px]">
                    <div className="flex gap-[10px] items-center">
                      <MdThumbDownAlt className="text-[15px] text-red-500" />
                      <p className="md:flex hidden text-[12px] font-[600] text-white">
                        Negative Feedback
                      </p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <p className="text-white text-[15px] font-[600]">0</p>
                    </div>
                  </div>
                  <div className=" flex md:flex-col flex-row gap-[5px] lg:py-[5px] lg:px-[10px] py-[4px] px-[6px] bg-tradeAsh border border-tradeAshLight  rounded-[8px]">
                    <div className="flex gap-[10px] items-center">
                      <FaRegStar className="text-tradeOrange text-[12px]" />
                      <p className="md:flex hidden text-[12px] font-[600] text-white">
                        Trust score
                      </p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <p className="text-white text-[15px] font-[600]">
                        {" "}
                        57&#37;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => setIsProfileEdit((prev) => !prev)}
              className={`${
                isProfileEdit
                  ? "text-black bg-tradeGreen border-tradeAshExtraLight"
                  : "bg-tradeAsh  border-tradeAshLight hover:text-white text-tradeFadeWhite "
              } flex items-center justify-center border gap-[10px]   px-[12px] py-[6px] rounded-[7px] cursor-pointer transition-all duration-300`}
            >
              <p className="text-[14px] font-[600]">
                {" "}
                {isProfileEdit ? "Save Changes" : "Edit Profile"}
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col  gap-[20px]">
            <div className="flex-1 flex flex-col md:flex-row gap-[20px] md:border border-tradeAshLight bg-tradeAs rounded-[14px]">
              <div className="w-full flex flex-col  rounded-[8px]">
                <div className="flex p-[15px] border-b border-neutral-800 ">
                  <p className="text-[17px] text-white font-[600] cursor-pointer">
                    Personal Information
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  {isProfileEdit ? (
                    <div className="flex flex-col  gap-[20px] p-[15px]">
                      <div className="flex-1 flex flex-col gap-[5px]">
                        <p className="text-[12.5px] font-[500] text-tradeFadeWhite">
                          Full name
                        </p>
                        <input
                          className={`h-[40px] px-[10px] py-[4px] text-white font-[600] text-[15px]  rounded-[8px] border border-neutral-700 outline-none transition-all duration-300 ${
                            isProfileEdit
                              ? "cursor-text border-tradeAshExtraLight bg-black"
                              : "cursor-default bg-tradeAsh "
                          }`}
                          type="text"
                          readOnly={!isProfileEdit}
                        />
                      </div>

                      <div className="flex-1 flex flex-col gap-[5px]">
                        <p className="text-[12.5px] font-[500] text-tradeFadeWhite">
                          Username
                        </p>
                        <input
                          className={`h-[40px] px-[10px] py-[4px] text-white font-[600] text-[15px]  rounded-[8px] border border-neutral-700 outline-none transition-all duration-300 ${
                            isProfileEdit
                              ? "cursor-text border-tradeAshExtraLight bg-black"
                              : "cursor-default bg-tradeAsh "
                          }`}
                          type="text"
                          readOnly={!isProfileEdit}
                        />
                      </div>

                      <div className="flex-1 flex flex-col gap-[5px]">
                        <p className="text-[12.5px] font-[500] text-tradeFadeWhite">
                          Email address
                        </p>
                        <input
                          className={`h-[40px] px-[10px] py-[4px] text-white font-[600] text-[15px]  rounded-[8px] border border-neutral-700 outline-none transition-all duration-300 ${
                            isProfileEdit
                              ? "cursor-text border-tradeAshExtraLight bg-black"
                              : "cursor-default bg-tradeAsh "
                          }`}
                          type="text"
                          readOnly={!isProfileEdit}
                        />
                      </div>

                      <div className="flex-1 flex flex-col gap-[5px]">
                        <p className="text-[12.5px] font-[500] text-tradeFadeWhite">
                          Phone number
                        </p>
                        <input
                          className={`h-[40px] px-[10px] py-[4px] text-white font-[600] text-[15px]  rounded-[8px] border border-neutral-700 outline-none transition-all duration-300 ${
                            isProfileEdit
                              ? "cursor-text border-tradeAshExtraLight bg-black"
                              : "cursor-default bg-tradeAsh "
                          }`}
                          type="text"
                          readOnly={!isProfileEdit}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className=" flex flex-col p-[15px] gap-[20px] ">
                      <div className="flex-1 flex flex-col gap-[2px] py-[5px] px-[10px] bg-tradeAsh border border-tradeAshLight rounded-[8px] ">
                        <p className="text-[12.5px] font-[500] text-tradeFadeWhite">
                          Full name
                        </p>

                        <p className="text-white text-[15px] font-[600]">
                          Adeleke Lukman
                        </p>
                      </div>

                      <div className="flex-1 flex flex-col gap-[2px] py-[5px] px-[10px] bg-tradeAsh border border-tradeAshLight rounded-[8px] ">
                        <p className="text-[12.5px] font-[500] text-tradeFadeWhite">
                          Username
                        </p>

                        <p className="text-white text-[15px] font-[600]">
                          sanityy0x
                        </p>
                      </div>

                      <div className="flex-1 flex flex-col gap-[2px] py-[5px] px-[10px] bg-tradeAsh border border-tradeAshLight rounded-[8px] ">
                        <p className="text-[12.5px] font-[500] text-tradeFadeWhite">
                          Email address
                        </p>

                        <p className="text-white text-[15px] font-[600]">
                          sanityy0x@gmail.com
                        </p>
                      </div>

                      <div className="flex-1 flex flex-col gap-[2px] py-[5px] px-[10px] bg-tradeAsh border border-tradeAshLight rounded-[8px] ">
                        <p className="text-[12.5px] font-[500] text-tradeFadeWhite">
                          Phone number
                        </p>

                        <p className="text-white text-[15px] font-[600]">
                          08039921211
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:w-[400px] flex flex-col md:flex-row gap-[20px] md:border border-tradeAshLight bg-tradeAs rounded-[14px]">
              <div className="w-full flex flex-col rounded-[8px]">
                <div className="flex p-[15px]  lg:border-b lg:border-t-0 border-y border-neutral-800 ">
                  <p className="text-[17px] text-white font-[600] cursor-pointer">
                    Trade Badges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserProfile;
