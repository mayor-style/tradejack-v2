import React, { useEffect, useState } from "react";
import InAppNav from "@/components/InAppNav";
import MarketMain from "@/components/marketplace/MarketMain";
import Footer from "@/components/Footer";
import OfferFilter from "@/components/marketplace/OfferFilter";
import axios from "axios";

const Marketplace = () => {
  const [offers, setOffers] = useState();
  const [promotedOffers, setPromotedOffers] = useState();
  const [unPromotedOffers, setUnPromotedOffers] = useState();
  const [serviceType, setServiceType] = useState("Default");
  const [accountType, setAccountType] = useState("");
  const [walletType, setWaletType] = useState("");
  const [giftCardType, setGiftCardType] = useState("");
  const [debitCreditCardType, setDebitCreditCardType] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState({
    name: "",
    code: "",
  });
  const [isPriceSort, setIsPriceSort] = useState("");
  const [isTimeSort, setIsTimeSort] = useState("");
  const [isOfferFilter, setIsOfferFilter] = useState(false);
  const [isOfferSortBy, setIsOfferSortBy] = useState(false);
  const [isAllOffer, setIsAllOffer] = useState(true);
  const [isOnlineOffer, setIsOnlineOffer] = useState(false);
  const [isFilterLoading, setIsFilterLoading] = useState(false);
  const [clearFilter, setClearFilter] = useState(false);

  const baseUrl = import.meta.env.BASE_URL;

  const getOffers = async () => {
    try {
      const response = await axios.get(`/fakeData.json`);
      // console.log(response.data); // Log the actual data from the response
      setOffers(response.data.offers);
    } catch (error) {
      console.error("Error fetching the offers:", error);
    }
  };

  const getPromotedOffers = async () => {
    try {
      const response = await offers?.filter(
        (offer) => offer.isPromoted === true
      );
      // console.log(response);
      setPromotedOffers(response);
    } catch (error) {
      console.error("Error fetching promoted offers:", error);
    }
  };

  const getUnPromotedOffers = async () => {
    try {
      const response = await offers?.filter(
        (offer) => offer.isPromoted === false
      );
      // console.log(response);
      setUnPromotedOffers(response);
    } catch (error) {
      console.error("Error fetching unpromoted offers:", error);
    }
  };

  const getSelectedService = () => {
    switch (serviceType) {
      case "Online Wallet Transfer":
        return walletType;
      case "Bank Transfer":
        return accountType;
      case "Gift Card Trade":
        return giftCardType;
      case "Debit & Credit Card Spending":
        return debitCreditCardType;
      default:
        return "";
    }
  };

  const handleFilterOffer = async () => {
    setIsFilterLoading(true);

    // console.log(`Service Type: ${serviceType} `);
    // console.log(`Service: ${getSelectedService()} `);
    // console.log(`Amount: ${amount} `);
    // console.log(`Currency: ${selectedCurrency.code} `);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading delay

      // Fetch offers
      const response = await axios.get(`/fakeData.json`);
      let filteredOffers = response.data.offers;

      if (isTimeSort === "fastToSlow") {
        filteredOffers = [...filteredOffers].sort(
          (a, b) => a.avgTradeTime - b.avgTradeTime
        );
      }

      if (isTimeSort === "slowToFast") {
        filteredOffers = [...filteredOffers].sort(
          (a, b) => b.avgTradeTime - a.avgTradeTime
        );
      }

      if (isPriceSort === "highToLow") {
        filteredOffers = filteredOffers.sort((a, b) => a.price - b.price);
      }

      if (isPriceSort === "lowToHigh") {
        filteredOffers = filteredOffers.sort((a, b) => b.price - a.price);
      }

      // Reset to full list if 'Default' is selected and 'isAllOffer' is true
      if (serviceType === "Default" && isAllOffer) {
        setOffers(filteredOffers);
        return;
      }

      // Apply other filters
      if (serviceType && serviceType !== "Default") {
        filteredOffers = filteredOffers.filter(
          (offer) => offer?.serviceType === serviceType
        );
      }

      const service = await getSelectedService(); // Ensure it's awaited if async

      if (service) {
        filteredOffers = filteredOffers.filter(
          (offer) => offer.service === service
        );
      }

      if (amount) {
        filteredOffers = filteredOffers.filter(
          (offer) => amount >= offer.miniPurchase && amount <= offer.maxPurchase
        );
      }

      if (selectedCurrency?.code) {
        filteredOffers = filteredOffers.filter(
          (offer) => offer.currency === selectedCurrency?.code
        );
      }

      if (isOnlineOffer) {
        filteredOffers = filteredOffers.filter(
          (offer) => offer.lastSeen === "online"
        );
      }

      if (isOnlineOffer) {
        filteredOffers = filteredOffers.filter(
          (offer) => offer.lastSeen === "online"
        );
      }

      setOffers(filteredOffers);
    } catch (error) {
      console.error("Error fetching or filtering offers:", error);
    } finally {
      setIsFilterLoading(false);
      setIsOfferFilter(false);
    }
  };

  const handleResetFilter = () => {
    setIsPriceSort("");
    setIsTimeSort("");
    setIsOnlineOffer(false);
    setIsAllOffer(true);
    setServiceType("Default");
    handleFilterOffer();
    setClearFilter(false);
    setIsOfferFilter(false);
  };

  useEffect(() => {
    getOffers();
  }, []);

  useEffect(() => {
    getPromotedOffers();
    getUnPromotedOffers();
  }, [offers]);

  useEffect(() => {
    handleResetFilter();
  }, [clearFilter === true]);

  useEffect(() => {
    handleFilterOffer();
  }, [isAllOffer, isOnlineOffer]);

  // console.log(offers);
  // console.log(promotedOffers);
  // console.log(unPromotedOffers);
  // console.log(serviceType);
  // console.log(`selected Service: ${getSelectedService()} `);
  // console.log(amount);
  // console.log(selectedCurrency);
  // console.log("Offer Filter:", isOfferFilter);
  // console.log("Is Offer Filter Loading:", isFilterLoading);
  // console.log("Price Sort:", isPriceSort);
  // console.log("Time Sort:", isTimeSort);
  // console.log("Display all Offer:", isAllOffer);
  // console.log("Display Online Vendor:", isOnlineOffer);

  return (
    <>
      <InAppNav />
      <div className=" lg:pt-[75px] md:pt-[75px] pt-[60px] flex gap-[15px] min-h-screen bg-black lg:p-[2%] md:p-[2.5%] ">
        <div className="lg:flex hidden w-[300px]">
          <OfferFilter
            serviceType={serviceType}
            setServiceType={setServiceType}
            accountType={accountType}
            setAccountType={setAccountType}
            walletType={walletType}
            setWaletType={setWaletType}
            giftCardType={giftCardType}
            setGiftCardType={setGiftCardType}
            debitCreditCardType={debitCreditCardType}
            setDebitCreditCardType={setDebitCreditCardType}
            amount={amount}
            setAmount={setAmount}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
            handleFilterOffer={handleFilterOffer}
            setIsOfferFilter={setIsOfferFilter}
            isOfferFilter={isOfferFilter}
            isFilterLoading={isFilterLoading}
            setIsPriceSort={setIsPriceSort}
            isPriceSort={isPriceSort}
            setIsTimeSort={setIsTimeSort}
            isTimeSort={isTimeSort}
            isAllOffer={isAllOffer}
            setIsAllOffer={setIsAllOffer}
            isOnlineOffer={isOnlineOffer}
            setIsOnlineOffer={setIsOnlineOffer}
            handleResetFilter={handleResetFilter}
            setClearFilter={setClearFilter}
          />
        </div>
        <div className="flex-1">
          <MarketMain
            promotedOffers={promotedOffers}
            unPromotedOffers={unPromotedOffers}
            serviceType={serviceType}
            setServiceType={setServiceType}
            accountType={accountType}
            setAccountType={setAccountType}
            walletType={walletType}
            setWaletType={setWaletType}
            giftCardType={giftCardType}
            setGiftCardType={setGiftCardType}
            debitCreditCardType={debitCreditCardType}
            setDebitCreditCardType={setDebitCreditCardType}
            amount={amount}
            setAmount={setAmount}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
            handleFilterOffer={handleFilterOffer}
            setIsOfferFilter={setIsOfferFilter}
            isOfferFilter={isOfferFilter}
            isFilterLoading={isFilterLoading}
            setIsPriceSort={setIsPriceSort}
            isPriceSort={isPriceSort}
            setIsTimeSort={setIsTimeSort}
            isTimeSort={isTimeSort}
            isOfferSortBy={isOfferSortBy}
            setIsOfferSortBy={setIsOfferSortBy}
            isAllOffer={isAllOffer}
            setIsAllOffer={setIsAllOffer}
            isOnlineOffer={isOnlineOffer}
            setIsOnlineOffer={setIsOnlineOffer}
            handleResetFilter={handleResetFilter}
            setClearFilter={setClearFilter}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Marketplace;
