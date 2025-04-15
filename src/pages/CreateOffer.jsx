import React, { useEffect, useState, useRef } from "react";
import InAppNav from "@/components/InAppNav";
import Footer from "@/components/Footer";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import PreferredCurrency from "@/components/createOffer/PreferredCurrency";
import OfferTradeRate from "@/components/createOffer/OfferTradeRate";
import PurchaseLimit from "@/components/createOffer/PurchaseLimit";
import SelectService from "@/components/createOffer/SelectService";
import SelectAccount from "@/components/createOffer/SelectAccount";
import SelectWallet from "@/components/createOffer/SelectWallet";
import SelectGitfCard from "@/components/createOffer/SelectGitfCard";
import DebitCreditCard from "@/components/createOffer/DebitCreditCard";
import OfferTerms from "@/components/createOffer/OfferTerms";
import OfferSummary from "@/components/createOffer/OfferSummary";

const CreateOffer = () => {
  const [offerPageOne, setOfferPageOne] = useState(true);
  const [offerPageTwo, setOfferPageTwo] = useState(false);
  const [offerRates, setOfferRates] = useState([{ from: 0, to: 0, rate: 0 }]);
  const [rangeFrom, setRangeFrom] = useState("");
  const [rangeTo, setRangeTo] = useState("");
  const [rate, setRate] = useState("");
  const [miniPurchase, setMiniPurchase] = useState("");
  const [maxPurchase, setMaxPurchase] = useState("");
  const [showAccount, setShowAccount] = useState(false);
  const [showWallet, setShowWallet] = useState(true);
  const [showGiftCard, setShowGiftCard] = useState(false);
  const [showDebitCreditCard, setShowDebitCreditCard] = useState(false);
  const [service, setService] = useState("Online Wallet Transfer");
  const [wallet, setWallet] = useState("");
  const [account, setAccount] = useState("");
  const [giftCard, setGiftCard] = useState("");
  const [creditOrDebitCard, setCreditOrDebitCard] = useState("");
  const [preferredCurrency, setPreferredCurrency] = useState({
    name: "United States Dollar",
    code: "USD",
  });
  const [offerTerms, setOfferTerms] = useState([]);
  const [purchaseLimitError, setPurchaseLimitError] = useState("");
  const [rateError, setRateError] = useState("");
  const [offerTermsError, setOfferTermsError] = useState("");
  const [serviceError, setServiceError] = useState("");

  const smoothScrollTo = async (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Calculate the target position
      const headerOffset = 210; // Adjust this to the height of your header
      const targetPosition = targetElement.offsetTop - headerOffset; // Use offsetTop for better accuracy
      const startPosition = window.pageYOffset; // Current scroll position
      const distance = targetPosition - startPosition; // Distance to scroll
      const duration = 1000; // Duration of the scroll in milliseconds
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure it doesn't exceed 1
        const easing = easeInOutQuad(progress); // Easing function for smooth effect

        window.scrollTo(0, startPosition + distance * easing);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Easing function
      };

      requestAnimationFrame(animation);
    }
  };

  const handleServiceTypeChange = () => {
    if (service === "Online Wallet Transfer") {
      setShowWallet(true);
      setShowAccount(false);
      setAccount("");
      setShowGiftCard(false);
      setGiftCard("");
      setShowDebitCreditCard(false);
      setCreditOrDebitCard("");
      setMiniPurchase("");
      setMaxPurchase("");
      setOfferRates([{ from: 0, to: 0, rate: 0 }]);
      setOfferTerms([]);
    } else if (service === "Bank Transfer") {
      setShowAccount(true);
      setShowWallet(false);
      setWallet("");
      setShowGiftCard(false);
      setGiftCard("");
      setShowDebitCreditCard(false);
      setCreditOrDebitCard("");
      setMiniPurchase("");
      setMaxPurchase("");
      setOfferRates([{ from: 0, to: 0, rate: 0 }]);
      setOfferTerms([]);
    } else if (service === "Gift Cards Exchange") {
      setShowGiftCard(true);
      setShowAccount(false);
      setAccount("");
      setShowWallet(false);
      setWallet("");
      setShowDebitCreditCard(false);
      setCreditOrDebitCard("");
      setMiniPurchase("");
      setMaxPurchase("");
      setOfferRates([{ from: 0, to: 0, rate: 0 }]);
      setOfferTerms([]);
    } else if (service === "Debit/Credit Cards Spending") {
      setShowDebitCreditCard(true);
      setShowGiftCard(false);
      setGiftCard("");
      setShowAccount(false);
      setAccount("");
      setShowWallet(false);
      setWallet("");
      setMiniPurchase("");
      setMaxPurchase("");
      setOfferRates([{ from: 0, to: 0, rate: 0 }]);
      setOfferTerms([]);
    }
  };

  useEffect(() => {
    handleServiceTypeChange();
  }, [service]);

  const handleToOfferPageTwo = () => {
    // Ensure all selections are made
    if (!wallet && !account && !giftCard && !creditOrDebitCard) {
      smoothScrollTo("selectAsset");
      setServiceError("Please select at least one option.");
      return;
    } else {
      setServiceError(""); // Clear the error if at least one is selected
    }

    // Ensure both minimum and maximum purchase amounts are selected
    if (!miniPurchase || !maxPurchase) {
      smoothScrollTo("purchaseLimit");
      setPurchaseLimitError(
        "Please set both minimum and maximum purchase amounts."
      );
      return;
    }

    // Validate minimum purchase
    if (miniPurchase < userTrasactionLimitMinimum) {
      setPurchaseLimitError(
        `Your minimum purchase cannot be lower than the minimum transaction limit of $${userTrasactionLimitMinimum}.`
      );
      return; // Ensure no further checks happen if this error is triggered
    }

    // Validate maximum purchase
    if (maxPurchase <= miniPurchase) {
      smoothScrollTo("purchaseLimit");
      setPurchaseLimitError(
        `Your maximum purchase must exceed the minimum purchase limit of $${miniPurchase}.`
      );
      return;
    }

    if (maxPurchase > userTrasactionLimitMaximum) {
      smoothScrollTo("purchaseLimit");
      setPurchaseLimitError(
        `Your maximum purchase cannot exceed your transaction limit of $${userTrasactionLimitMaximum}.`
      );
      return;
    }

    // Ensure at least one offer rate is provided
    if (offerRates.length <= 1) {
      smoothScrollTo("offerRates");
      setRateError("Please add at least one rate to continue.");
      return;
    } else {
      setRateError("");
    }

    // Ensure offer terms are provided
    if (offerTerms <= 0) {
      smoothScrollTo("offerTerms");
      setOfferTermsError("Please add offer terms to proceed.");
      return;
    } else {
      setOfferTermsError("");
    }

    // Proceed to the next page if all conditions are valid
    setOfferPageOne(false);
    setOfferPageTwo(true);
  };

  const handleReturnToOfferPageOne = () => {
    setOfferPageOne(true);
    setOfferPageTwo(false);
  };

  // console.log(rangeFrom);
  // console.log(rangeTo);
  // console.log(rate);
  // console.log(offerRates);
  // console.log(miniPurchase);
  // console.log(maxPurchase);
  // console.log(offerTerms);

  const userTrasactionLimitMinimum = "50";
  const userTrasactionLimitMaximum = "500";

  return (
    <>
      <InAppNav />

      <div className="lg:pt-[70px] pt-[80px] bg-black">
        <div className="lg:p-[1.5%] p-[3%] flex gap-[15px]">
          <div
            className={`${
              offerPageOne ? "flex" : "hidden"
            }  flex-1 flex-col gap-[50px] bg-tradeAsh p-[10px] rounded-[8px]`}
          >
            <div>
              <p className="text-white text-[34px] font-[900]">
                Create a Buy Offer for an Asset
              </p>
            </div>
            <div className="flex gap-[40px] ">
              <SelectService service={service} setService={setService} />
              <div id="selectAsset">
                <SelectAccount
                  showAccount={showAccount}
                  account={account}
                  setAccount={setAccount}
                  setServiceError={setServiceError}
                  serviceError={serviceError}
                />
                <SelectWallet
                  showWallet={showWallet}
                  wallet={wallet}
                  setWallet={setWallet}
                  setServiceError={setServiceError}
                  serviceError={serviceError}
                />
                <SelectGitfCard
                  showGiftCard={showGiftCard}
                  giftCard={giftCard}
                  setGiftCard={setGiftCard}
                  setServiceError={setServiceError}
                  serviceError={serviceError}
                />
                <DebitCreditCard
                  showDebitCreditCard={showDebitCreditCard}
                  creditOrDebitCard={creditOrDebitCard}
                  setCreditOrDebitCard={setCreditOrDebitCard}
                  setServiceError={setServiceError}
                  serviceError={serviceError}
                />
              </div>
            </div>
            <div>
              <PreferredCurrency
                preferredCurrency={preferredCurrency}
                setPreferredCurrency={setPreferredCurrency}
              />
            </div>
            <div id="purchaseLimit">
              <PurchaseLimit
                miniPurchase={miniPurchase}
                setMiniPurchase={setMiniPurchase}
                maxPurchase={maxPurchase}
                setMaxPurchase={setMaxPurchase}
                preferredCurrency={preferredCurrency}
                userTrasactionLimitMinimum={userTrasactionLimitMinimum}
                userTrasactionLimitMaximum={userTrasactionLimitMaximum}
                setPurchaseLimitError={setPurchaseLimitError}
                purchaseLimitError={purchaseLimitError}
              />
            </div>
            <div id="offerRates">
              <OfferTradeRate
                miniPurchase={miniPurchase}
                maxPurchase={maxPurchase}
                rangeFrom={rangeFrom}
                setRangeFrom={setRangeFrom}
                rangeTo={rangeTo}
                setRangeTo={setRangeTo}
                rate={rate}
                setRate={setRate}
                offerRates={offerRates}
                setOfferRates={setOfferRates}
                preferredCurrency={preferredCurrency}
                setRateError={setRateError}
                rateError={rateError}
              />
            </div>
            <div id="offerTerms">
              <OfferTerms
                setOfferTerms={setOfferTerms}
                offerTermsError={offerTermsError}
              />
            </div>
          </div>
          <div
            className={`${
              offerPageTwo ? "flex" : "hidden"
            }  flex-1 flex-col gap-[50px] bg-tradeAsh p-[15px] rounded-[8px]`}
          >
            <div>
              <p className="text-white text-[34px] font-[900]">
                Create a Buy Offer for an Asset
              </p>
            </div>
            <div className="flex gap-[40px]"></div>
          </div>
          <OfferSummary
            service={service}
            wallet={wallet}
            account={account}
            giftCard={giftCard}
            creditOrDebitCard={creditOrDebitCard}
            preferredCurrency={preferredCurrency}
            miniPurchase={miniPurchase}
            maxPurchase={maxPurchase}
            offerRates={offerRates}
            handleToOfferPageTwo={handleToOfferPageTwo}
            handleReturnToOfferPageOne={handleReturnToOfferPageOne}
            offerPageTwo={offerPageTwo}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateOffer;
