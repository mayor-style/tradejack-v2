import React, { useState, useEffect } from "react";
import { RiInformation2Line } from "react-icons/ri";

const OfferCalculator = ({ offerRate, currency }) => {
  const [sendAmount, setSendAmount] = useState(""); // Amount user will send
  const [receiveAmount, setReceiveAmount] = useState(""); // Amount user will receive
  const [message, setMessage] = useState(""); // Error messages for validation
  const [comment, setComment] = useState(""); // Error messages for validation

  const handleSendAmountChange = (e) => {
    let value = e.target.value;
    setComment("");

    // Remove any non-numeric characters
    value = value.replace(/[^0-9.]/g, "");

    // Update the input field to show only the sanitized value
    setSendAmount(value);

    // If the field is empty after sanitizing, reset calculations and show an error
    if (value === "") {
      setMessage("Enter amount to get started.");
      setReceiveAmount("");
      return;
    }

    const numericValue = parseFloat(value); // Parse the sanitized string into a number

    // Find the applicable rate based on the entered value
    const applicableRate = offerRate.find((rateItem) => {
      const [min, max] = rateItem.range
        .split("to")
        .map((num) => parseFloat(num.trim()));
      return numericValue >= min && numericValue <= max;
    });

    if (!applicableRate) {
      setMessage("Amount is outside the buyer's rate.");
      setReceiveAmount("");
      return;
    }

    // Extract numeric part of the rate
    const rate = parseFloat(applicableRate.rate);
    const calculatedAmount = numericValue * rate; // Perform the calculation

    // Update the calculated amount and display message
    setReceiveAmount(calculatedAmount.toFixed(2)); // Set the calculated amount (2 decimal places)

    setMessage("Done");
    setComment(
      `Based on the vendor's rate of ${rate} NGN/${currency}, you will receive a total of ${calculatedAmount.toLocaleString()} NGN.`
    );
  };

  return (
    <div className="p-[30px] flex flex-col gap-[50px] rounded-[8px] border border-neutral-300">
      <div className="flex justify-center">
        <p className="text-[24px] font-[800]">How much do you want to Sell?</p>
      </div>
      <div className="flex gap-[30px]">
        <div className="flex-1 flex flex-col gap-[5px]">
          <p className="text-[15px] font-[700]">I will send</p>
          <div className="flex rounded-[4px] border border-neutral-400">
            <div className="w-full px-[15px] py-[10px] border-r border-neutral-400">
              <input
                className="w-full outline-none border-none text-[14px] font-[600] placeholder:text-neutral-500 active:"
                type="text"
                id="sendAmount"
                value={sendAmount ? parseInt(sendAmount).toLocaleString() : ""}
                onChange={handleSendAmountChange}
                placeholder="Enter amount"
              />
            </div>
            <div className="px-[15px] py-[10px]">
              <p className="text-[15px] font-[700]">{currency}</p>
            </div>
          </div>
          <div
            className={` ${
              message?.startsWith("D") ? "hidden" : "flex"
            }  items-center gap-[5px]`}
          >
            <RiInformation2Line
              className={`${
                message?.startsWith("A") ? "text-red-600" : "text-tradeOrange "
              } text-[18px]`}
            />
            <p
              className={`${
                message?.startsWith("A") ? "text-red-600" : null
              } text-[14px] font-[500] text-neutral-500`}
            >
              {" "}
              {message ? message : "Enter amount to get started."}
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[5px]">
          <p className="text-[15px] font-[700]">you will receive</p>
          <div className="flex rounded-[4px] border border-neutral-400">
            <div className="w-full px-[15px] py-[10px] border-r border-neutral-400">
              <input
                className="w-full outline-none border-none text-[14px] font-[600] placeholder:text-neutral-500"
                type="text"
                id="receiveAmount"
                value={
                  receiveAmount ? parseInt(receiveAmount).toLocaleString() : ""
                }
                readOnly
              />
            </div>
            <div className="px-[15px] py-[10px]">
              <p className="text-[15px] font-[700]">NGN</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-[700] text-[17px]">
        {comment}
      </div>
    </div>
  );
};

export default OfferCalculator;
