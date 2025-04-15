import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiInformation2Line } from "react-icons/ri";

const DebitCreditCard = ({
  showDebitCreditCard,
  setCreditOrDebitCard,
  creditOrDebitCard,
  setServiceError,
  serviceError,
}) => {
  const [showDCCardOptions, setShowDCCardOptions] = useState(false);
  const [cardSearchInput, setCardSearchInput] = useState("");

  const debitandCreditCards = [
    // General Prepaid Cards
    "Green Dot Prepaid Card",
    "Netspend Prepaid Card",
    "Bluebird by American Express",
    "Serve by American Express",
    "PayPal Prepaid Mastercard",
    "Chime Visa Debit",
    "Venmo Mastercard Debit Card",
    "Cash App Visa Debit Card",
    "SoFi Money Debit Card",
    "Varo Bank Visa Debit Card",

    // Retail & Store-Specific Prepaid Cards
    "Walmart MoneyCard",
    "Target RedCard Prepaid Debit Card",
    "Amazon Reloadable Prepaid Card",

    // Gift & Non-Personalized Prepaid Cards
    "Visa Prepaid Gift Card",
    "Mastercard Prepaid Gift Card",
    "American Express Gift Card",
    "Vanilla Visa Prepaid Card",
    "OneVanilla Prepaid Card",

    // Cryptocurrency-Linked Prepaid Cards
    "Coinbase Visa Debit Card",
    "Crypto.com Visa Card",
    "BitPay Prepaid Mastercard",
    "Wirex Visa Card",
  ];

  const handleSeletedDCCard = (card) => {
    setCreditOrDebitCard(card);
    setShowDCCardOptions(false);
  };

  return (
    <div
      className={` ${
        showDebitCreditCard ? "flex" : "hidden"
      } flex flex-1 flex-col gap-[15px]`}
    >
      <div className="flex items-center gap-[8px]">
        <p className="text-white text-[18px] font-[600]">
          Select Debit/Credit Card
        </p>
        <FaRegQuestionCircle className="text-neutral-500" />
      </div>
      <div
        onClick={() => setShowDCCardOptions((prev) => !prev)}
        className="flex items-center pl-[10px] pr-[7px] h-[45px] gap-[20px]  border border-neutral-700 rounded-[5px] cursor-pointer"
      >
        <input
          className="w-full border-none outline-none bg-transparent text-white text-[15px] placeholder:text-neutral-400 cursor-pointer"
          placeholder="Choose"
          type="text"
          value={creditOrDebitCard}
          readOnly
        />
        <div className="w-[170px] flex justify-between items-center px-[10px] h-[30px] border border-neutral-400 rounded-[3px]">
          <p className="text-[15px] font-[500] text-white">Show all</p>
          <MdKeyboardArrowDown className="text-[25px] text-white" />
        </div>
      </div>
      <div
        className={` ${
          showDCCardOptions ? "flex" : "hidden"
        }   flex-col gap-[15px] p-[10px] bg-tradeAshLight rounded-[8px] border border-neutral-700 h-[350px] `}
      >
        <div className="flex h-[45px] px-[15px] py-[5px] gap-[20px] items-center border border-neutral-700">
          <FaMagnifyingGlass className="text-[20px] text-neutral-500" />
          <input
            className="outline-none border-none h-[30px] text-white text-[15px] placeholder:text-zinc-500 w-full bg-transparent"
            type="text"
            placeholder="Search debit/credit card..."
            value={cardSearchInput}
            onChange={(e) => setCardSearchInput(e.target.value)}
          />
        </div>

        <div className="overflow-y-auto">
          {cardSearchInput ? (
            <div className="flex flex-col gap-[10px]">
              {debitandCreditCards
                .filter((card) =>
                  card.toLowerCase().includes(cardSearchInput.toLowerCase())
                )
                .map((card, index) => (
                  <div
                    key={index}
                    onClick={() => handleSeletedDCCard(card)}
                    className="px-[10px] py-[10px] mr-[10px] hover:bg-tradeAshExtraLight cursor-pointer"
                  >
                    <p className="text-white text-[14px]">{card}</p>
                  </div>
                ))}
            </div>
          ) : (
            <div className="flex flex-col gap-[10px]">
              {debitandCreditCards
                .sort((a, b) => a.localeCompare(b)) // Correct sorting logic
                .map((card, index) => (
                  <div
                    key={index}
                    onClick={() => handleSeletedDCCard(card)}
                    className="px-[10px] py-[10px] mr-[10px] hover:bg-tradeAshExtraLight cursor-pointer"
                  >
                    <p className="text-white text-[14px]">{card}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <div>
        {serviceError && (
          <div className="flex items-center gap-[5px]">
            <RiInformation2Line className="text-red-500  text-[17px] " />
            <p className="text-[13px] text-red-500">{serviceError}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DebitCreditCard;
