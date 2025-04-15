import React, { useState, useEffect } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiInformation2Line } from "react-icons/ri";
import tippy from "tippy.js";

const OfferTradeRate = ({
  miniPurchase,
  maxPurchase,
  rangeFrom,
  setRangeFrom,
  rangeTo,
  setRangeTo,
  rate,
  setRate,
  offerRates,
  setOfferRates,
  preferredCurrency,
  setRateError,
  rateError,
}) => {
  const updateOfferRates = () => {
    if (!miniPurchase || !maxPurchase) {
      setRateError(
        "Please set both your minimum and maximum purchase limits to set your trade rate."
      );
      return;
    }

    // Parse input values as numbers
    const fromValue = parseFloat(rangeFrom.replace(/,/g, "").trim());
    const toValue = parseFloat(rangeTo.replace(/,/g, "").trim());
    const rateValue = parseFloat(rate.replace(/,/g, "").trim());

    // Check if any field is empty, NaN, or invalid
    if (
      !rangeFrom.trim() ||
      isNaN(fromValue) ||
      !rangeTo.trim() ||
      isNaN(toValue) ||
      !rate.trim() ||
      isNaN(rateValue)
    ) {
      setRateError(
        "Please ensure all fields are filled out with valid numbers before submitting."
      );
      return;
    }

    if (fromValue < miniPurchase) {
      setRateError(
        `The "from" value cannot be lower than the minimum purchase amount of $${miniPurchase}.`
      );
      return;
    }

    if (fromValue > maxPurchase) {
      setRateError(
        `The "from" value cannot exceed the maximum purchase limit of $${maxPurchase}.`
      );
      return;
    }

    if (toValue < miniPurchase) {
      setRateError(
        `The "to" value cannot be lower than the minimum purchase amount of $${miniPurchase}.`
      );
      return;
    }

    if (toValue > maxPurchase) {
      setRateError(
        `The "to" value cannot exceed the maximum purchase limit of $${maxPurchase}.`
      );
      return;
    }

    if (toValue <= fromValue) {
      // Ensure toValue is greater than fromValue
      setRateError(
        "The 'To' value must be greater than the 'From' value. Please enter a higher 'To' value."
      );
      return;
    }

    // Check if there are existing rates and compare to the last one
    if (offerRates.length > 1) {
      // Find the last rate entry (the one with the largest "to" value)
      const lastRate = offerRates.reduce((prev, current) => {
        return current.to > prev.to ? current : prev;
      });

      // Ensure the new range starts from the correct point
      if (fromValue !== lastRate.to + 1) {
        setRateError(
          `The starting range for the new rate should begin from ${
            lastRate.to + 1
          }, as the previous range ends at ${lastRate.to}.`
        );
        return;
      }

      // Ensure that the new rate is greater than the last rate
      if (rateValue <= lastRate.rate) {
        setRateError(
          `The new rate must be higher than the previous rate of ${lastRate.rate}.`
        );
        return;
      }
    }

    // Check if the range already exists in the offerRates
    const rangeExists = offerRates.some(
      (offer) => offer.from === fromValue && offer.to === toValue
    );

    if (rangeExists) {
      setRateError(
        `This range (${fromValue} to ${toValue}) already exists in the system. Please select a different range to avoid duplication.`
      );
      return;
    }

    // If all checks pass, update the rates
    setOfferRates([
      ...offerRates,
      { from: fromValue, to: toValue, rate: rateValue },
    ]);

    // Reset the form and error state
    setRangeFrom("");
    setRangeTo("");
    setRate("");
    setRateError("");
  };

  const handleFromChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, ""); // Remove existing commas

    if (!isNaN(rawValue)) {
      setRangeFrom(rawValue); // Add formatted commas
    }
  };

  const handleToChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, ""); // Remove existing commas
    if (!isNaN(rawValue)) {
      setRangeTo(rawValue); // Add formatted commas
    }
  };

  const handleRateChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, ""); // Remove existing commas
    if (!isNaN(rawValue)) {
      setRate(rawValue); // Add formatted commas
    }
  };

  tippy("#setOfferRate", {
    content:
      "Set the rate at which you want to trade. This is the value of one unit of your preferred currency in exchange for the target currency. Ensure the rate aligns with market trends for an optimal offer.",
    theme: "hintUser", // Use the custom theme defined in CSS
  });

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center gap-[8px]">
        <p className="text-white text-[18px] font-[600]">Offer Trade Rate</p>
      </div>
      <div className="flex gap-[40px] ">
        <div className=" flex-1 flex flex-col gap-[10px]">
          <p className="text-white text-[15px]">From</p>
          <div className=" flex border border-neutral-700 focus:border-tradeGreen rounded-[4px]">
            <input
              className="w-full h-[45px] px-[10px] font-[500] text-white text-[15px] placeholder:text-neutral-400 outline-none bg-transparent "
              type="text"
              placeholder="0.00"
              value={rangeFrom ? Number(rangeFrom).toLocaleString() : ""}
              onChange={handleFromChange}
            />
            <div className="flex items-center h-[45px] px-[10px] border-l border-neutral-700">
              <p className="text-white font-[600]">
                {preferredCurrency.code ? preferredCurrency.code : "USD"}
              </p>
            </div>
          </div>
        </div>
        <div className=" flex-1 flex flex-col gap-[10px]">
          <p className="text-white text-[15px]">To</p>
          <div className=" flex border border-neutral-700 focus:border-tradeGreen rounded-[4px]">
            <input
              className="w-full h-[45px] px-[10px] font-[500] text-white text-[15px] placeholder:text-neutral-400 outline-none bg-transparent "
              type="text"
              placeholder="0.00"
              value={rangeTo ? Number(rangeTo).toLocaleString() : ""}
              onChange={handleToChange}
            />
            <div className="flex items-center h-[45px] px-[10px] border-l border-neutral-700">
              <p className="text-white font-[600]">
                {preferredCurrency.code ? preferredCurrency.code : "USD"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[40px] ">
        <div className=" flex-1 flex flex-col gap-[10px]">
          <p className="text-white text-[15px]">Set Rate</p>
          <div className=" flex border border-neutral-700 focus:border-tradeGreen rounded-[4px]">
            <input
              className="w-full h-[45px] px-[10px] font-[500] text-white text-[15px] placeholder:text-neutral-400 outline-none bg-transparent "
              type="text"
              placeholder="0.00"
              value={rate ? Number(rate).toLocaleString() : ""}
              onChange={handleRateChange}
            />
            <div className="flex items-center h-[45px] px-[10px] border-l border-neutral-700">
              <p className="text-white font-[600]">USD</p>
            </div>
          </div>
        </div>
        <div className=" flex-1 flex flex-col gap-[10px]">
          <p className="text-white text-[15px] opacity-0">To</p>
          <div
            onClick={updateOfferRates}
            className="flex h-[45px] rounded-[4px]  bg-tradeGreen border border-tradeGreen cursor-pointer items-center justify-center gap-[10px]"
          >
            <p className="text-[15px] font-[600]">Add rate</p>
          </div>
        </div>
      </div>
      <div className=" p-[10px] bg-tradeAshLight order rounded-[4px] flex items-center gap-[10px]">
        <div>
          <RiInformation2Line className="text-[#CCCCCC] text-[22px]" />
        </div>
        <p className="text-[13.5px] text-[#CCCCCC]">
          Set the rate at which you want to trade. This is the value of one unit
          of your preferred currency in exchange for the target currency. Ensure
          the rate aligns with market trends for an optimal offer.
        </p>
      </div>
      <div>
        {rateError && (
          <div className="flex items-center gap-[5px]">
            <RiInformation2Line className="text-red-500  text-[17px] " />
            <p className="text-[13px] text-red-500">{rateError}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferTradeRate;
