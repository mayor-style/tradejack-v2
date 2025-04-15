import React from "react";
import tippy from "tippy.js";
import { RiInformation2Line } from "react-icons/ri";

const OfferTerms = ({ setOfferTerms, offerTermsError, setOfferTermsError }) => {
  const handleInputChange = (event) => {
    const text = event.target.value;

    // Split by comma and trim spaces
    const termsArray = text.split(/[,.]/).map((sentence) => {
      const trimmed = sentence.trim();
      return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    });

    setOfferTerms(termsArray);
  };

  tippy("#setOfferTerms", {
    content:
      "Offer Terms are a set of instructions provided by the vendor to guide users on how to initiate and complete a trade. Outline the terms of your offer or actions you want people to follow to ensure a smooth and successful transaction.",
    theme: "hintUser", // Use the custom theme defined in CSS
  });

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex flex-col gap-[15px]">
        <div className="flex items-center gap-[8px]">
          <p className="text-white text-[18px] font-[600]">Offer Terms</p>
        </div>
        <textarea
          className="w-full text-[15px] p-[15px] bg-transparent text-white outline-none border border-neutral-700 rounded-[8px] h-[180px] resize-none "
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className=" p-[10px] bg-tradeAshLight rounded-[4px] flex items-center gap-[10px]">
        <div>
          <RiInformation2Line className="text-[#CCCCCC] text-[22px]" />
        </div>
        <p className="text-[13.5px] text-[#CCCCCC]">
          Offer Terms are a set of instructions provided to guide users on how
          to initiate and complete a trade. Outline the terms of your offer or
          actions you want buyers to follow to ensure a smooth and successful
          transaction.
        </p>
      </div>
      <div>
        {offerTermsError && (
          <div className="flex items-center gap-[5px]">
            <RiInformation2Line className="text-red-500  text-[17px] " />
            <p className="text-[13px] text-red-500">{offerTermsError}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferTerms;
