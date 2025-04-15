import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import { IoMdArrowRoundUp } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { HiArrowNarrowUp } from "react-icons/hi";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { FcProcess } from "react-icons/fc";
import { RiProgress3Line } from "react-icons/ri";
import { MdOutlinePending } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowRight } from "react-icons/ti";

const DashMain = () => {
  return (
    <>
      <div className="flex-1 md:flex hidden lg:gap-[15px]">
        <div className="flex flex-1 flex-col gap-[15px]">
          <div className="bg-tradeOrang flex flex-col  justify-between p-[5px]">
            <p className=" lg:text-[19px] text-[20px] text-tradeFadeWhite  ">
              Welcome back,{" "}
              <small className="lg:text-[19px] text-[20px] text-white font-[700]">
                x33crypt
              </small>
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-[20px] mt-[10px]">
            <div className="flex gap-[15px]">
              <div className="flex-1 flex flex-col h-[100px] justify-between p-[10px] gap-[5px] rounded-[14px] border border-tradeGreen bg-tradeGreen">
                <div className="flex justify-between">
                  <p className="text-black text-[12px] font-[600]">
                    Available Balance
                  </p>
                  <FaEye className="text-[17px] cursor-pointer" />
                </div>

                <div className="flex items-baseline ">
                  <p className="flex items-baseline text-[28px] font-[800]">
                    &#36;2,028
                    <small className="text-[26px] font-[800]">&#8228;</small>
                    <small className="text-[18px] font-[800]">69</small>
                  </p>
                </div>
              </div>

              <div className="flex-1 flex flex-col  h-[100px] justify-between p-[10px] gap-[5px] rounded-[14px] bg-tradeAsh border border-tradeAshExtraLight">
                <div className="flex justify-between">
                  <div className="flex gap-[5px] items-center text-white">
                    <p className=" text-[12px] font-[600]">Escrow Wallet</p>
                    <FaRegQuestionCircle className="text-[13px] text-tradeFadeWhite" />
                  </div>
                  <FaEye className="text-[17px] text-white cursor-pointer" />
                </div>

                <div className="flex items-baseline ">
                  <p className="flex items-baseline text-[28px] text-white font-[800]">
                    &#36;650
                    <small className="text-[24px] font-[800]">&#8228;</small>
                    <small className="text-[18px] font-[800]">00</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[5px]  border-tradeAshExtraLight bg-tradeAshLight p-[5px] rounded-[14px]">
              <div className="flex w-full gap-[5px]">
                <div className="flex-1 flex items-center bg-black gap-[15px] p-[5px] rounded-[14px] cursor-pointer hover:bg-tradeAsh transition-all duration-300">
                  <div className="text-[25px] text-white p-[10px] rounded-[12px] bg-tradeAshLight">
                    <LuPlus />
                  </div>

                  <p className="text-[14px] text-white font-[500]">Deposit</p>
                </div>
                <div className="flex-1 flex items-center bg-black gap-[15px] p-[5px] rounded-[14px] cursor-pointer hover:bg-tradeAsh transition-all duration-300">
                  <div className="text-[25px] text-white p-[10px] rounded-[12px] bg-tradeAshLight">
                    <HiArrowNarrowUp />
                  </div>

                  <p className="text-[14px] text-white font-[500]">Withdraw</p>
                </div>
              </div>
              <div className="flex-1 flex items-center bg-black gap-[15px] p-[5px] rounded-[14px] cursor-pointer hover:bg-tradeAsh transition-all duration-300">
                <div className="text-[25px] text-white p-[10px] rounded-[12px] bg-tradeOrange">
                  <CgArrowsExchangeAltV />
                </div>
                <div className=" flex-1 flex gap-[5px] flex-col justify-between">
                  <p className="text-[12px] text-tradeFadeWhite font-[500]">
                    Maximum Purchase Limit
                  </p>
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[14px] text-white font-[600]">
                      3,000 USD
                    </p>
                    <p className="bg-tradeGreen text-[10px] font-[500] rounded-full px-[10px] py-[px]">
                      Increase your Limit !
                    </p>
                  </div>
                </div>
                <div className="text-tradeFadeWhite items-end p-[10px]">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>

            <div className="h-[120px] p-[10px] rounded-[16px] bg-white ">
              <p className="text-[12px]">
                Successfully trade 5 more deal and earn our turbo status{" "}
              </p>
            </div>

            <div className=" flex lg:grid grid-cols-2 gap-[10px] rounded-[16px]">
              <div className="flex flex-1 flex-col border border-tradeAshExtraLight bg-tradeAsh gap-[10px] p-[10px] rounded-[14px] cursor-pointer hover:bg-tradeAshLight transition-all duration-300">
                <div className="flex gap-[5px]">
                  <RiProgress3Line className="text-tradeFadeWhite" />
                  <p className=" text-[12px] font-[600] text-white">
                    Active Offers
                  </p>
                </div>
                <div className="flex justify-between items-baseline">
                  <p className="text-white text-[23px] font-[700]">20</p>
                  <i class="fa-solid fa-arrow-right text-tradeGreen text-[14px]"></i>
                </div>
              </div>
              <div className="flex flex-1 flex-col border border-tradeAshExtraLight bg-tradeAsh gap-[10px] p-[10px] rounded-[14px] cursor-pointer hover:bg-tradeAshLight transition-all duration-300">
                <div className="flex gap-[5px]">
                  <MdOutlinePending className="text-tradeFadeWhite" />
                  <p className=" text-[12px] font-[600] text-white">
                    Pending Trades
                  </p>
                </div>
                <div className="flex justify-between items-baseline">
                  <p className="text-white text-[23px] font-[700]">3</p>
                  <i class="fa-solid fa-arrow-right text-tradeGreen text-[14px]"></i>
                </div>
              </div>
              <div className="flex flex-1 flex-col border border-tradeAshExtraLight bg-tradeAsh gap-[10px] p-[10px] rounded-[14px] cursor-pointer hover:bg-tradeAshLight transition-all duration-300">
                <div className="flex gap-[5px]">
                  <GrStatusGood className="text-tradeFadeWhite" />
                  <p className=" text-[12px] font-[600] text-white">
                    Successful Trades
                  </p>
                </div>
                <div className="flex justify-between items-baseline">
                  <p className="text-white text-[23px] font-[700]">449</p>
                  <i class="fa-solid fa-arrow-right text-tradeGreen text-[14px]"></i>
                </div>
              </div>
              <div className="flex flex-1 flex-col border border-tradeAshExtraLight bg-tradeAsh gap-[10px] p-[10px] rounded-[14px] cursor-pointer hover:bg-tradeAshLight transition-all duration-300">
                <div className="flex gap-[5px]">
                  <IoExtensionPuzzleOutline className="text-tradeFadeWhite" />
                  <p className=" text-[12px] font-[600] text-white">
                    Disputed Trades
                  </p>
                </div>

                <div className="flex justify-between items-baseline">
                  <p className="text-white text-[23px] font-[700]">4</p>
                  <i class="fa-solid fa-arrow-right text-tradeGreen text-[14px]"></i>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline bg-tradeAshLight p-[10px] rounded-t-[10px]">
                <p className="text-white font-[600] text-[17px]">
                  Transaction history
                </p>
                <p className="text-tradeGreen font-[600] text-[13px] cursor-pointer ">
                  View All
                </p>
              </div>
              <div className="px-[10px] py-[10px] flex bg-transparent">
                <div className="flex-1 flex gap-[5px] text-tradeFadeWhite  text-[14px]  ">
                  <p>Service</p>
                  <MdKeyboardArrowDown className="text-[21px]" />
                </div>
                <div className="flex-1 flex gap-[5px] text-tradeFadeWhite  text-[14px] ">
                  <p>Trade ID</p>
                  <MdKeyboardArrowDown className="text-[21px]" />
                </div>
                <div className="flex-1 flex gap-[5px] text-tradeFadeWhite  text-[14px] ">
                  <p>Status</p>
                  <MdKeyboardArrowDown className="text-[21px]" />
                </div>
                <div className="flex-1 flex gap-[5px] text-tradeFadeWhite text-[14px]  ">
                  <p>Amount</p>
                  <MdKeyboardArrowDown className="text-[21px]" />
                </div>
                <div className="flex-1 flex gap-[5px] text-tradeFadeWhite   text-[14px] ">
                  <p>Date</p>
                  <MdKeyboardArrowDown className="text-[21px]" />
                </div>
              </div>
              <div className="flex flex-col gap-[2px]">
                <div className="px-[10px] py-[10px] flex bg-tradeAshLight cursor-pointer hover:bg-tradeAsh transition-all duration-300">
                  <div className="flex-1 text-white font-[500] text-[14px] ">
                    <p>Cash App</p>
                  </div>
                  <div className="flex-1 text-tradeFadeWhite font-[500] text-[14px]  ">
                    <p>#238872</p>
                  </div>
                  <div className="flex-1 text-tradeOrange font-[500] text-[14px]  ">
                    <p>Pending</p>
                  </div>
                  <div className="flex-1 text-white font-[600] text-[14px]  ">
                    <p>$600.00</p>
                  </div>
                  <div className="flex-1 text-white  font-[500] text-[14px] ">
                    <p>4d 19h ago</p>
                  </div>
                </div>
                <div className="px-[10px] py-[10px] flex bg-tradeAshLight cursor-pointer hover:bg-tradeAsh transition-all duration-300">
                  <div className="flex-1 text-white font-[500]  text-[14px]  ">
                    <p>Apple Pay</p>
                  </div>
                  <div className="flex-1 text-tradeFadeWhite font-[500] text-[14px]  ">
                    <p>#238872</p>
                  </div>
                  <div className="flex-1 text-tradeGreen font-[500] text-[14px]  ">
                    <p>Completed</p>
                  </div>
                  <div className="flex-1 text-white font-[600] text-[14px]  ">
                    <p>$1,000.00</p>
                  </div>
                  <div className="flex-1 text-white  font-[500] text-[14px] ">
                    <p>5d 2h ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:flex hidden w-[300px] p-[10px] rounded-[16px]  borde border-tradeAshLight">
          <div className=" w-full">
            <p className="text-[19px] font-[700] text-white">
              Trade Performance
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:hidden gap-[10px] px-[15px] ">
        <div className="flex flex-col p-[10px] ">
          <p className="text-[18px] text-tradeFadeWhite ">
            Welcome back,{" "}
            <small className="text-[18px] text-white font-[700]">
              x33crypt
            </small>
          </p>
        </div>
        <div className="flex flex-col gap-[20px]  ">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col overflow-hidden rounded-[16px]">
              <div className="flex-1 flex flex-col p-[10px] gap-[5px] bg-tradeGreen">
                <div className="flex justify-between">
                  <p className="text-black text-[12px] font-[600]">
                    Available Balance
                  </p>
                  <FaEye className="text-[18px]" />
                </div>

                <div className="flex items-baseline ">
                  <p className="flex items-baseline text-[28px] font-[800]">
                    &#36;2,028
                    <small className="text-[26px] font-[800]">&#8228;</small>
                    <small className="text-[18px] font-[800]">69</small>
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col p-[10px] gap-[5px] bg-tradeAsh border-t border-tradeAshExtraLight">
                <div className="flex gap-[5px] items-center text-white">
                  <p className=" text-[12px] font-[600]">Escrow Wallet</p>
                  <FaRegQuestionCircle className="text-[14px] text-tradeFadeWhite" />
                </div>

                <div className="flex items-baseline ">
                  <p className="flex items-baseline text-[28px] text-white font-[800]">
                    &#36;650
                    <small className="text-[24px] font-[800]">&#8228;</small>
                    <small className="text-[18px] font-[800]">00</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[5px]  border-tradeAshExtraLight bg-tradeAshLight p-[5px] rounded-[16px]">
              <div className="flex w-full gap-[5px]">
                <div className="flex-1 flex items-center bg-black gap-[15px] p-[5px] rounded-[16px]">
                  <div className="text-[25px] text-white p-[10px] rounded-[16px] bg-tradeAshLight">
                    <LuPlus />
                  </div>

                  <p className="text-[14px] text-white font-[500]">Deposit</p>
                </div>
                <div className="flex-1 flex items-center bg-black gap-[15px] p-[5px] rounded-[16px]">
                  <div className="text-[25px] text-white p-[10px] rounded-[16px] bg-tradeAshLight">
                    <HiArrowNarrowUp />
                  </div>

                  <p className="text-[14px] text-white font-[500]">Withdraw</p>
                </div>
              </div>
              <div className="flex-1 flex items-center bg-black gap-[15px] p-[5px] rounded-[16px]">
                <div className="text-[25px] text-white p-[10px] rounded-[16px] bg-tradeOrange">
                  <CgArrowsExchangeAltV />
                </div>
                <div className=" flex-1 flex gap-[5px] flex-col justify-between">
                  <p className="text-[12px] text-tradeFadeWhite font-[500]">
                    Maximum Purchase Limit
                  </p>
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[14px] text-white font-[600]">
                      3,000 USD
                    </p>
                    <p className="bg-tradeGreen text-[10px] font-[500] rounded-full px-[10px] py-[px]">
                      Increase your Limit !
                    </p>
                  </div>
                </div>
                <div className="text-tradeFadeWhite items-end p-[10px]">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[100px] p-[10px] rounded-[16px] bg-white ">
            <p className="text-[12px]">
              Successfully trade 5 more deal and earn our turbo status{" "}
            </p>
          </div>

          <div className=" grid grid-cols-2 gap-[10px] rounded-[16px]">
            <div className="flex flex-col border border-tradeAshExtraLight bg-tradeAsh gap-[10px] p-[10px] rounded-[16px]">
              <div className="flex gap-[5px]">
                <RiProgress3Line className="text-tradeFadeWhite" />
                <p className=" text-[12px] font-[600] text-white">
                  Active Offers
                </p>
              </div>

              <div className="flex justify-between items-baseline">
                <p className="text-white text-[25px] font-[700]">20</p>
                <i class="fa-solid fa-arrow-right text-tradeGreen text-[14px]"></i>
              </div>
            </div>
            <div className="flex flex-col border border-tradeAshExtraLight bg-tradeAsh gap-[10px] p-[10px] rounded-[16px]">
              <div className="flex gap-[5px]">
                <MdOutlinePending className="text-tradeFadeWhite" />
                <p className=" text-[12px] font-[600] text-white">
                  Pending Trades
                </p>
              </div>

              <div className="flex justify-between items-baseline">
                <p className="text-white text-[25px] font-[700]">8</p>
                <i class="fa-solid fa-arrow-right text-tradeGreen text-[14px]"></i>
              </div>
            </div>
            <div className="flex flex-col border border-tradeAshExtraLight bg-tradeAsh gap-[10px] p-[10px] rounded-[16px]">
              <div className="flex gap-[5px]">
                <GrStatusGood className="text-tradeFadeWhite" />
                <p className=" text-[12px] font-[600] text-white">
                  Successful Trades
                </p>
              </div>

              <div className="flex justify-between items-baseline">
                <p className="text-white text-[25px] font-[700]">499</p>
                <i class="fa-solid fa-arrow-right text-tradeGreen text-[14px]"></i>
              </div>
            </div>
            <div className="flex flex-col border border-tradeAshExtraLight bg-tradeAsh gap-[10px] p-[10px] rounded-[16px]">
              <div className="flex gap-[5px]">
                <IoExtensionPuzzleOutline className="text-tradeFadeWhite" />
                <p className=" text-[12px] font-[600] text-white">
                  Disputed Trades
                </p>
              </div>

              <div className="flex justify-between items-baseline">
                <p className="text-white text-[25px] font-[700]">4</p>
                <i class="fa-solid fa-arrow-right text-tradeGreen text-[14px]"></i>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[10px] rounded-[16px] p-[5px] ">
            <div className="flex justify-between py-[10px]  items-baseline ">
              <p className="text-white font-[600] text-[19px]">
                Transaction History
              </p>
              <p className="text-tradeGreen font-[700] text-[13px]">View All</p>
            </div>

            <div className="flex flex-col gap-[5px] rounded-[16px]">
              <div className="flex  bg-tradeAsh border border-tradeAshExtraLight py-[7px] px-[10px] rounded-[16px] gap-[10px] items-center cursor-pointer">
                <div className="p-[8px] rounded-full max-w-max bg-tradeAshLight">
                  <IoMdArrowRoundDown className="text-tradeGreen text-[20px]" />
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-[3px]">
                      <p className="text-white text-[14px] font-[700]">
                        Paypal
                      </p>
                      <p className="text-white text-[14px]">-</p>
                      <p className="text-tradeFadeWhite text-[13px] font-[600]">
                        Buyer
                      </p>
                    </div>

                    <p className="text-white text-[14px] font-[700]">
                      1,870.00{" "}
                      <small className="text-tradeFadeWhite text-[14px] font-[700]">
                        USD
                      </small>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-tradeFadeWhite text-[12px] font-[600]">
                      4d 19h ago
                    </p>

                    <p className="text-tradeOrange text-[12px] font-[600]  border-tradeOrange px-[6px] py-[2px] rounded-[5px]">
                      Pending
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex  bg-tradeAsh border border-tradeAshExtraLight py-[7px] px-[10px] rounded-[16px] gap-[10px] items-center cursor-pointer">
                <div className="p-[8px] rounded-full max-w-max bg-tradeAshLight">
                  <IoMdArrowRoundDown className="text-tradeGreen text-[20px]" />
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-[3px]">
                      <p className="text-white text-[14px] font-[700]">
                        Paypal
                      </p>
                      <p className="text-white text-[14px]">-</p>
                      <p className="text-tradeFadeWhite text-[13px] font-[600]">
                        Buyer
                      </p>
                    </div>

                    <p className="text-white text-[14px] font-[700]">
                      1,870.00{" "}
                      <small className="text-tradeFadeWhite text-[14px] font-[700]">
                        USD
                      </small>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-tradeFadeWhite text-[12px] font-[600]">
                      4d 19h ago
                    </p>

                    <p className="text-tradeOrange text-[12px] font-[600]  border-tradeOrange px-[6px] py-[2px] rounded-[5px]">
                      Pending
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex  bg-tradeAsh border border-tradeAshExtraLight py-[7px] px-[10px] rounded-[16px] gap-[10px] items-center cursor-pointer">
                <div className="p-[8px] rounded-full max-w-max bg-tradeAshLight">
                  <IoMdArrowRoundDown className="text-tradeGreen text-[20px]" />
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-[3px]">
                      <p className="text-white text-[14px] font-[700]">
                        Paypal
                      </p>
                      <p className="text-white text-[14px]">-</p>
                      <p className="text-tradeFadeWhite text-[13px] font-[600]">
                        Buyer
                      </p>
                    </div>

                    <p className="text-white text-[14px] font-[700]">
                      1,870.00{" "}
                      <small className="text-tradeFadeWhite text-[14px] font-[700]">
                        USD
                      </small>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-tradeFadeWhite text-[12px] font-[600]">
                      4d 19h ago
                    </p>

                    <p className="text-tradeOrange text-[12px] font-[600]  border-tradeOrange px-[6px] py-[2px] rounded-[5px]">
                      Pending
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex  bg-tradeAsh border border-tradeAshExtraLight py-[7px] px-[10px] rounded-[16px] gap-[10px] items-center cursor-pointer">
                <div className="p-[8px] rounded-full max-w-max bg-tradeAshLight">
                  <IoMdArrowRoundDown className="text-tradeGreen text-[20px]" />
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-[3px]">
                      <p className="text-white text-[14px] font-[700]">
                        Paypal
                      </p>
                      <p className="text-white text-[14px]">-</p>
                      <p className="text-tradeFadeWhite text-[13px] font-[600]">
                        Buyer
                      </p>
                    </div>

                    <p className="text-white text-[14px] font-[700]">
                      1,870.00{" "}
                      <small className="text-tradeFadeWhite text-[14px] font-[700]">
                        USD
                      </small>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-tradeFadeWhite text-[12px] font-[600]">
                      4d 19h ago
                    </p>

                    <p className="text-tradeOrange text-[12px] font-[600]  border-tradeOrange px-[6px] py-[2px] rounded-[5px]">
                      Pending
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex  bg-tradeAsh border border-tradeAshExtraLight py-[7px] px-[10px] rounded-[16px] gap-[10px] items-center cursor-pointer">
                <div className="p-[8px] rounded-full max-w-max bg-tradeAshLight">
                  <IoMdArrowRoundDown className="text-tradeGreen text-[20px]" />
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-[3px]">
                      <p className="text-white text-[14px] font-[700]">
                        Paypal
                      </p>
                      <p className="text-white text-[14px]">-</p>
                      <p className="text-tradeFadeWhite text-[13px] font-[600]">
                        Buyer
                      </p>
                    </div>

                    <p className="text-white text-[14px] font-[700]">
                      1,870.00{" "}
                      <small className="text-tradeFadeWhite text-[14px] font-[700]">
                        USD
                      </small>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-tradeFadeWhite text-[12px] font-[600]">
                      4d 19h ago
                    </p>

                    <p className="text-tradeOrange text-[12px] font-[600]  border-tradeOrange px-[6px] py-[2px] rounded-[5px]">
                      Pending
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex  bg-tradeAsh border border-tradeAshExtraLight py-[7px] px-[10px] rounded-[16px] gap-[10px] items-center cursor-pointer">
                <div className="p-[8px] rounded-full max-w-max bg-tradeAshLight">
                  <IoMdArrowRoundDown className="text-tradeGreen text-[20px]" />
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-[3px]">
                      <p className="text-white text-[14px] font-[700]">
                        Paypal
                      </p>
                      <p className="text-white text-[14px]">-</p>
                      <p className="text-tradeFadeWhite text-[13px] font-[600]">
                        Buyer
                      </p>
                    </div>

                    <p className="text-white text-[14px] font-[700]">
                      1,870.00{" "}
                      <small className="text-tradeFadeWhite text-[14px] font-[700]">
                        USD
                      </small>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-tradeFadeWhite text-[12px] font-[600]">
                      4d 19h ago
                    </p>

                    <p className="text-tradeOrange text-[12px] font-[600]  border-tradeOrange px-[6px] py-[2px] rounded-[5px]">
                      Pending
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex  bg-tradeAsh border border-tradeAshExtraLight py-[7px] px-[10px] rounded-[16px] gap-[10px] items-center cursor-pointer">
                <div className="p-[8px] rounded-full max-w-max bg-tradeAshLight">
                  <IoMdArrowRoundDown className="text-tradeGreen text-[20px]" />
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-[3px]">
                      <p className="text-white text-[14px] font-[700]">
                        Paypal
                      </p>
                      <p className="text-white text-[14px]">-</p>
                      <p className="text-tradeFadeWhite text-[13px] font-[600]">
                        Buyer
                      </p>
                    </div>

                    <p className="text-white text-[14px] font-[700]">
                      1,870.00{" "}
                      <small className="text-tradeFadeWhite text-[14px] font-[700]">
                        USD
                      </small>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-tradeFadeWhite text-[12px] font-[600]">
                      4d 19h ago
                    </p>

                    <p className="text-tradeOrange text-[12px] font-[600]  border-tradeOrange px-[6px] py-[2px] rounded-[5px]">
                      Pending
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex  bg-tradeAsh border border-tradeAshExtraLight py-[7px] px-[10px] rounded-[16px] gap-[10px] items-center cursor-pointer">
                <div className="p-[8px] rounded-full max-w-max bg-tradeAshLight">
                  <IoMdArrowRoundDown className="text-tradeGreen text-[20px]" />
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-[3px]">
                      <p className="text-white text-[14px] font-[700]">
                        Paypal
                      </p>
                      <p className="text-white text-[14px]">-</p>
                      <p className="text-tradeFadeWhite text-[13px] font-[600]">
                        Buyer
                      </p>
                    </div>

                    <p className="text-white text-[14px] font-[700]">
                      1,870.00{" "}
                      <small className="text-tradeFadeWhite text-[14px] font-[700]">
                        USD
                      </small>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-tradeFadeWhite text-[12px] font-[600]">
                      4d 19h ago
                    </p>

                    <p className="text-tradeOrange text-[12px] font-[600]  border-tradeOrange px-[6px] py-[2px] rounded-[5px]">
                      Pending
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex  bg-tradeAsh border border-tradeAshExtraLight py-[7px] px-[10px] rounded-[16px] gap-[10px] items-center cursor-pointer">
                <div className="p-[8px] rounded-full max-w-max bg-tradeAshLight">
                  <IoMdArrowRoundDown className="text-tradeGreen text-[20px]" />
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-[3px]">
                      <p className="text-white text-[14px] font-[700]">
                        Paypal
                      </p>
                      <p className="text-white text-[14px]">-</p>
                      <p className="text-tradeFadeWhite text-[13px] font-[600]">
                        Buyer
                      </p>
                    </div>

                    <p className="text-white text-[14px] font-[700]">
                      1,870.00{" "}
                      <small className="text-tradeFadeWhite text-[14px] font-[700]">
                        USD
                      </small>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-tradeFadeWhite text-[12px] font-[600]">
                      4d 19h ago
                    </p>

                    <p className="text-tradeOrange text-[12px] font-[600]  border-tradeOrange px-[6px] py-[2px] rounded-[5px]">
                      Pending
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashMain;
