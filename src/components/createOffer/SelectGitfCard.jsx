import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiInformation2Line } from "react-icons/ri";

const SelectGitfCard = ({
  showGiftCard,
  giftCard,
  setGiftCard,
  setServiceError,
  serviceError,
}) => {
  const [showGiftCardOptions, setShowGiftCardOptions] = useState(false);
  const [giftCardSearchInput, setGiftCardSearchInput] = useState("");

  const globalGiftCards = [
    "Amazon Gift Card",
    "iTunes / Apple Gift Card",
    "Google Play Gift Card",
    "Visa Gift Card",
    "Mastercard Gift Card",
    "PayPal Gift Card",
    "Steam Gift Card",
    "Netflix Gift Card",
    "Spotify Gift Card",
    "Walmart Gift Card",
    "Starbucks Gift Card",
    "Target Gift Card",
    "eBay Gift Card",
    "Zalando Gift Card",
    "H&M Gift Card",
    "Nike Gift Card",
    "Best Buy Gift Card",
    "Adobe Gift Card",
    "GameStop Gift Card",
    "Airbnb Gift Card",
    "Uber Gift Card",
    "Google Play Store Gift Card",
    "Apple Store Gift Card",
    "Ticketmaster Gift Card",
    "Macy's Gift Card",
    "Chanel Gift Card",
    "Lush Gift Card",
    "ASOS Gift Card",
    "Disney Gift Card",
    "Discord Gift Card",
    "Minecraft Gift Card",
    "Xbox Gift Card",
    "PlayStation Network Gift Card",
    "Xbox Game Pass Gift Card",
    "Spotify Premium Gift Card",
    "Roblox Gift Card",
    "Nintendo eShop Gift Card",
    "Barnes & Noble Gift Card",
    "Sephora Gift Card",
    "Lego Gift Card",
    "Etsy Gift Card",
    "Uber Eats Gift Card",
    "Chipotle Gift Card",
    "Costco Gift Card",
    "Home Depot Gift Card",
    "Kohl's Gift Card",
    "Old Navy Gift Card",
    "Apple Music Gift Card",
    "Twitch Gift Card",
    "Cinemark Gift Card",
    "Fandango Gift Card",
    "GameFly Gift Card",
    "Bed Bath & Beyond Gift Card",
    "Zara Gift Card",
    "Macy's Gift Card",
    "Krispy Kreme Gift Card",
  ];

  const handleSeletedGiftCard = (card) => {
    setGiftCard(card);
    setShowGiftCardOptions(false);
  };

  return (
    <div
      className={` ${
        showGiftCard ? "flex" : "hidden"
      } flex flex-1 flex-col gap-[15px]`}
    >
      <div className="flex items-center gap-[8px]">
        <p className="text-white text-[18px] font-[600]">Select Gift Card</p>
        <FaRegQuestionCircle className="text-neutral-500" />
      </div>
      <div
        onClick={() => setShowGiftCardOptions((prev) => !prev)}
        className="flex items-center pl-[10px] pr-[7px] h-[45px] gap-[20px] border border-neutral-700 rounded-[5px] cursor-pointer"
      >
        <input
          className="w-full border-none outline-none bg-transparent text-white text-[15px] placeholder:text-neutral-400 cursor-pointer"
          placeholder="Choose"
          type="text"
          value={giftCard}
          readOnly
        />
        <div className="w-[170px] flex justify-between items-center px-[10px] h-[30px] border border-neutral-400 rounded-[3px]">
          <p className="text-[15px] font-[500] text-white">Show all</p>
          <MdKeyboardArrowDown className="text-[25px] text-white" />
        </div>
      </div>
      <div
        className={` ${
          showGiftCardOptions ? "flex" : "hidden"
        }   flex-col gap-[15px] p-[10px] bg-tradeAshLight rounded-[8px] border border-neutral-700 h-[350px] `}
      >
        <div className="flex h-[45px] px-[15px] py-[5px] gap-[20px] items-center border border-neutral-700">
          <FaMagnifyingGlass className="text-[20px] text-neutral-500" />
          <input
            className="outline-none border-none h-[30px] text-white text-[15px] placeholder:text-zinc-500 w-full bg-transparent"
            type="text"
            placeholder="Search gift card..."
            value={giftCardSearchInput}
            onChange={(e) => setGiftCardSearchInput(e.target.value)}
          />
        </div>

        <div className="overflow-y-auto ">
          {giftCardSearchInput ? (
            <div className="flex flex-col gap-[10px]">
              {globalGiftCards
                .filter((card) =>
                  card.toLowerCase().includes(giftCardSearchInput.toLowerCase())
                )
                .map((card, index) => (
                  <div
                    key={index}
                    onClick={() => handleSeletedGiftCard(card)}
                    className="px-[10px] py-[10px] mr-[10px] hover:bg-tradeAshExtraLight cursor-pointer"
                  >
                    <p className="text-white text-[14px]">{card}</p>
                  </div>
                ))}
            </div>
          ) : (
            <div className="flex flex-col gap-[10px]">
              {globalGiftCards
                .sort((a, b) => a.localeCompare(b)) // Correct sorting logic
                .map((card, index) => (
                  <div
                    key={index}
                    onClick={() => handleSeletedGiftCard(card)}
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

export default SelectGitfCard;
