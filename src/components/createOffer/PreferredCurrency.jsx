import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiInformation2Line } from "react-icons/ri";
import axios from "axios";
import tippy from "tippy.js";

const PreferredCurrency = ({ preferredCurrency, setPreferredCurrency }) => {
  const [currencies, setCurrencies] = useState([]);
  const [showCurrencyOptions, setShowCurrencyOptions] = useState(false);
  const [currrencySearchInput, setCurrrencySearchInput] = useState("");

  const getCurrencies = async () => {
    try {
      const response = await axios.get(
        "https://api.exchangerate.host/list?access_key=a5d669ce99aa855e99ab16626cad67b6"
      );
      // console.log(" currency line 18", response); // Logs all currencies
      setCurrencies(response.data.currencies);
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  const handlePreferredCurrency = (code, name) => {
    setPreferredCurrency({ code, name }); // Store both code & name
    setShowCurrencyOptions(false);
    setCurrrencySearchInput("");
  };

  tippy("#prefferedCurrency", {
    content:
      "Your offer will be listed and settled in this currency. For example, if you choose USD, your offer will be visible to those looking to sell USD asssets.",
    theme: "hintUser", // Use the custom theme defined in CSS
  });

  useEffect(() => {
    getCurrencies();
  }, []);

  // console.log(currencies);

  return (
    <div className="relative flex-1 flex flex-col gap-[15px] ">
      <div className="flex items-center gap-[8px]">
        <p className="text-white text-[18px] font-[600]">Preferred Currency</p>
      </div>
      <div
        onClick={() => setShowCurrencyOptions((prev) => !prev)}
        className="  h-[45px] gap-[20px] flex flex-1 items-center justify-between pl-[10px] pr-[7px] py-[7px] border border-neutral-700 rounded-[3px] cursor-pointer"
      >
        <input
          className="w-full border-none outline-none bg-transparent text-white text-[15px] placeholder:text-neutral-400 cursor-pointer"
          placeholder="Afghan Afghani (AFN)"
          type="text"
          value={
            preferredCurrency.code
              ? `${preferredCurrency.name} (${preferredCurrency.code})`
              : ""
          }
          readOnly
        />
        <div className="w-[130px] flex justify-between items-center px-[10px] h-[30px] border border-neutral-400 rounded-[3px]">
          <p className="text-[15px] font-[500] text-white">Show all</p>
          <MdKeyboardArrowDown className="text-[25px] text-white" />
        </div>
      </div>

      <div className=" p-[10px] bg-tradeAshLight rounded-[4px] flex items-center gap-[10px]">
        <div>
          <RiInformation2Line className="text-[#CCCCCC] text-[22px]" />
        </div>
        <p className="text-[13.5px] text-[#CCCCCC]">
          Your offer will be listed and settled in this currency. For example,
          if you choose USD, your offer will be visible to those looking to sell
          USD asssets.
        </p>
      </div>
      <div
        className={` ${
          showCurrencyOptions ? "flex" : "hidden"
        } absolute right-0 left-0  top-[100px] flex-col gap-[20px] h-[430px] p-[10px] bg-tradeAshLight rounded-[8px] border border-neutral-700`}
      >
        <div className="flex h-[45px] px-[15px] py-[5px] gap-[20px] items-center border border-neutral-700">
          <FaMagnifyingGlass className="text-[20px] text-neutral-500" />
          <input
            className="outline-none border-none h-[30px] text-white text-[15px] placeholder:text-zinc-500 w-full bg-transparent"
            type="text"
            placeholder="Search country..."
            value={currrencySearchInput}
            onChange={(e) => setCurrrencySearchInput(e.target.value)}
          />
        </div>
        <div className="overflow-y-auto">
          {currrencySearchInput ? (
            <div className="flex flex-col gap-[10px] mr-[10px]">
              {Object.entries(currencies)
                .filter(([code, name]) =>
                  name
                    .toLowerCase()
                    .includes(currrencySearchInput.toLowerCase())
                )

                .map(
                  (
                    [code, name] // Correct map placement
                  ) => (
                    <p
                      key={code}
                      onClick={() => handlePreferredCurrency(code, name)}
                      className="text-white text-[14px] cursor-pointer  px-[10px] py-[10px] hover:bg-tradeAshExtraLight"
                    >
                      {`${name} (${code})`}
                    </p>
                  )
                )}
            </div>
          ) : (
            <div className=" flex flex-col gap-[10px] mr-[10px]">
              {Object.entries(currencies)
                .sort((a, b) => a[1].localeCompare(b[1])) // Sort by currency name
                .map(([code, name]) => (
                  <p
                    onClick={() => handlePreferredCurrency(code, name)}
                    key={code}
                    className="text-white text-[14px] cursor-pointer  px-[10px] py-[10px] hover:bg-tradeAshExtraLight"
                  >
                    {`${name} (${code})`}
                  </p>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreferredCurrency;
