import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";

const SelectService = ({ setService, service }) => {
  const [showServiceOptions, setShowServiceOptions] = useState(false);

  const services = [
    "Online Wallet Transfer",
    "Bank Transfer",
    "Gift Cards Exchange",
    "Debit/Credit Cards Spending",
  ];

  const handleServiceChange = (service) => {
    setService(service);
    setShowServiceOptions(false);
  };

  return (
    <div className=" flex flex-1 flex-col gap-[15px]">
      <div className="flex items-center gap-[8px]">
        <p className="text-white text-[18px] font-[600]">Select Service Type</p>
        <FaRegQuestionCircle className="text-neutral-500" />
      </div>
      <div
        onClick={() => setShowServiceOptions((prev) => !prev)}
        className="flex items-center pl-[10px] pr-[7px] h-[45px] gap-[20px] border border-neutral-700 rounded-[5px] cursor-pointer"
      >
        <input
          className="w-full  h-[30px] border-none outline-none bg-transparent text-white text-[15px] placeholder:text-neutral-400 cursor-pointer"
          placeholder="Choose"
          type="text"
          value={service}
          readOnly
        />
        <div className="w-[180px] flex justify-between items-center px-[10px] h-[30px] border border-neutral-400 rounded-[3px]">
          <p className="text-[15px] font-[500] text-white">Show all</p>
          <MdKeyboardArrowDown className="text-[25px] text-white" />
        </div>
      </div>
      <div
        className={` ${
          showServiceOptions ? "flex" : "hidden"
        } flex-col gap-[15px] p-[10px] bg-tradeAshLight rounded-[8px] border border-neutral-700`}
      >
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleServiceChange(service)}
            className="px-[10px] py-[10px] hover:bg-tradeAshExtraLight rounded-[5px] cursor-pointer"
          >
            <p className="text-white text-[14px] ">{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectService;
