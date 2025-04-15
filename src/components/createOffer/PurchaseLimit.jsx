import React, { useState, useEffect } from "react";
import { RiInformation2Line } from "react-icons/ri";

import tippy from "tippy.js";

const PurchaseLimit = ({
  miniPurchase,
  setMiniPurchase,
  maxPurchase,
  setMaxPurchase,
  preferredCurrency,
  userTrasactionLimitMinimum,
  userTrasactionLimitMaximum,
  purchaseLimitError,
  setPurchaseLimitError,
}) => {
  const handleMiniPurchaseChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, ""); // Remove commas

    // Allow empty input (so users can delete completely)
    if (rawValue === "") {
      setMiniPurchase("");
      setPurchaseLimitError("");
      return;
    }

    // Ensure the value is a number before updating state
    if (!isNaN(rawValue)) {
      if (Number(rawValue) < userTrasactionLimitMinimum) {
        setPurchaseLimitError(
          `Your minimum purchase cannot be lower than the minimum transaction limit of $${userTrasactionLimitMinimum}.`
        );
      } else {
        setPurchaseLimitError(""); // Clear error if value is valid
      }

      setMiniPurchase(rawValue);
    }
  };

  const handleMaxPurchaseChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, ""); // Remove commas

    // Allow empty input (so users can delete completely)
    if (rawValue === "") {
      setMaxPurchase("");
      setPurchaseLimitError("");
      return;
    }

    // Convert to number for comparison
    const miniPurchaseValue = Number(miniPurchase);
    const transactionLimitMinimum = Number(userTrasactionLimitMinimum);

    // Debug log for values
    console.log("miniPurchase at start:", miniPurchaseValue);
    console.log("userTrasactionLimitMinimum:", transactionLimitMinimum);

    if (!miniPurchaseValue) {
      console.log("No minimum purchase set");
      setPurchaseLimitError("Please set your minimum purchase limit.");
      return;
    } else {
      setPurchaseLimitError(""); // Clear error if value is valid
    }

    if (miniPurchaseValue < transactionLimitMinimum) {
      setPurchaseLimitError(
        `Your minimum purchase cannot be lower than the minimum transaction limit of $${transactionLimitMinimum}.`
      );
      return; // Ensure no further checks happen if this error is triggered
    } else {
      setPurchaseLimitError(""); // Clear error if value is valid
    }

    // Ensure the value is a number before updating state
    if (!isNaN(rawValue)) {
      if (Number(rawValue) <= miniPurchaseValue) {
        setPurchaseLimitError(
          `Your maximum purchase must exceed the minimum purchase limit of $${miniPurchaseValue}.`
        );
      } else if (Number(rawValue) > userTrasactionLimitMaximum) {
        setPurchaseLimitError(
          `Your maximum purchase cannot exceed your transaction limit of $${userTrasactionLimitMaximum}.`
        );
      } else {
        setPurchaseLimitError(""); // Clear error if value is valid
      }
    }

    setMaxPurchase(rawValue);
  };

  tippy("#setPurchaseLimit", {
    content:
      "Define the minimum and maximum purchase amounts for this asset. These limits ensure transactions are within your desired range, offering flexibility while maintaining control over your trades.",
    theme: "hintUser", // Use the custom theme defined in CSS
  });

  return (
    <div className="flex flex-col gap-[15px] ">
      <div className="flex items-center gap-[8px]">
        <p className="text-white text-[18px] font-[600]">Purchase Limits</p>
      </div>
      <div className="flex gap-[40px] ">
        <div className=" flex-1 flex flex-col gap-[10px]">
          <p className="text-white text-[15px]">Minimum</p>
          <div className=" flex border border-neutral-700 focus:border-tradeGreen rounded-[4px]">
            <input
              className="w-full h-[45px] px-[10px] font-[500] text-white text-[15px] placeholder:text-neutral-400 outline-none bg-transparent "
              type="text"
              placeholder="0.00"
              value={miniPurchase ? Number(miniPurchase).toLocaleString() : ""}
              onChange={handleMiniPurchaseChange}
            />
            <div className="flex items-center h-[45px] px-[10px] border-l border-neutral-700">
              <p className="text-white font-[600]">{preferredCurrency?.code}</p>
            </div>
          </div>
        </div>
        <div className=" flex-1 flex flex-col gap-[10px]">
          <p className="text-white text-[15px]">Maximum</p>
          <div className=" flex border border-neutral-700 focus:border-tradeGreen rounded-[4px]">
            <input
              className="w-full h-[45px] px-[10px] font-[500] text-white text-[15px] placeholder:text-neutral-400 outline-none bg-transparent "
              type="text"
              placeholder="0.00"
              value={maxPurchase ? Number(maxPurchase).toLocaleString() : ""}
              onChange={handleMaxPurchaseChange}
            />
            <div className="flex items-center h-[45px] px-[10px] border-l border-neutral-700">
              <p className="text-white font-[600]">{preferredCurrency?.code}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-[10px] bg-tradeAshLight borde rounded-[4px] flex items-center gap-[10px]">
        <div>
          <RiInformation2Line className="text-[#CCCCCC] text-[22px]" />
        </div>
        <p className="text-[13.5px] text-[#CCCCCC]">
          Define the minimum and maximum purchase amounts for this asset. These
          limits ensure transactions are within your desired range, offering
          flexibility while maintaining control over your trades.
        </p>
      </div>
      <div>
        {purchaseLimitError && (
          <div className="flex items-center gap-[10px]">
            <RiInformation2Line className="text-red-500  text-[17px] " />
            <p className="text-[13px] text-red-500">{purchaseLimitError}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchaseLimit;
