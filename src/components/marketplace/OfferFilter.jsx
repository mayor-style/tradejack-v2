import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";

import axios from "axios";

const OfferFilter = ({
  setServiceType,
  serviceType,
  accountType,
  setAccountType,
  walletType,
  setWaletType,
  giftCardType,
  setGiftCardType,
  debitCreditCardType,
  setDebitCreditCardType,
  amount,
  setAmount,
  selectedCurrency,
  setSelectedCurrency,
  handleFilterOffer,
  isFilterLoading,
  setIsPriceSort,
  isPriceSort,
  setIsTimeSort,
  isTimeSort,
  isAllOffer,
  setIsAllOffer,
  isOnlineOffer,
  setIsOnlineOffer,
  handleResetFilter,
  setClearFilter,
  setIsOfferFilter,
}) => {
  const [showServiceType, setShowServiceType] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showAccountType, setShowAccounType] = useState(false);
  const [showWallet, setShowWallet] = useState(true);
  const [showWalletType, setShowWalletType] = useState(false);
  const [showGiftCard, setShowGiftCard] = useState(false);
  const [showGiftCardType, setShowGiftCardType] = useState(false);
  const [showDebitCreditCard, setShowDebitCreditCard] = useState(false);
  const [showDebitCreditCardType, setShowDebitCreditCardType] = useState(false);
  const [accountSearchInput, setAccountSearchInput] = useState("");
  const [walletSearchInput, setWalletSearchInput] = useState("");
  const [giftCardSearchInput, setGiftCardSearchInput] = useState("");
  const [debitCreditSearchInput, setDebitCreditCardSearchInput] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [currrencySearchInput, setCurrrencySearchInput] = useState("");
  const [showCurrencyOptions, setShowCurrencyOptions] = useState(false);

  const services = [
    "Default",
    "Online Wallet Transfer",
    "Bank Transfer",
    "Gift Card Trade",
    "Debit & Credit Card Spending",
  ];

  const wallets = [
    // 🌍 Global Online Wallets
    "PayPal",
    "Google Pay",
    "Apple Pay",
    "Samsung Pay",
    "Venmo",
    "Cash App",
    "Revolut",
    "Wise (formerly TransferWise)",
    "Western Union Digital",
    "MoneyGram Online",
    "Payoneer",
    "Skrill",
    "Neteller",

    // 🌎 North America (USA & Canada)
    "Zelle",
    "Chime",
    "SoFi Money",
    "Interac e-Transfer",
    "Koho",
    "Wealthsimple Cash",

    // 🇬🇧 UK & 🇪🇺 Europe
    "Monzo",
    "Starling Bank",
    "N26",
    "SEPA Instant (EU)",

    // 🇦🇺 Australia & New Zealand
    "Beem It",
    "Osko by BPAY",

    // 🇮🇳 India & South Asia
    "PhonePe",
    "Paytm",
    "Google Pay (Tez)",
    "BHIM UPI",

    // 🇵🇭 Southeast Asia & Philippines
    "GCash",
    "PayMaya",
    "GrabPay",
    "ShopeePay",

    // 🌍 Africa (Nigeria, Kenya, South Africa, Ghana, etc.)
    "Flutterwave Barter",
    "Chipper Cash",
    "Opay",
    "M-Pesa",
    "Airtel Money",
    "MoMo (MTN Mobile Money)",
    "Vodafone Cash",
    "Orange Money",

    // 🌏 Middle East
    "STC Pay",
    "PayTabs",
    "E-Dinar",

    // 🌎 Latin America
    "Mercado Pago",
    "PicPay",
    "PagSeguro",

    // 💰 Cryptocurrency & Blockchain Wallets
    "Coinbase Wallet",
    "Binance Pay",
    "MetaMask",
    "Trust Wallet",
    "Exodus Wallet",
    "Ledger Live",
    "Trezor Suite",
    "BitPay",
    "Wirex",

    // 🏢 Business & Merchant Payments
    "Stripe",
    "Square",
    "Alipay",
    "WeChat Pay",
  ];

  const globalBanks = [
    // Global Banks
    "JPMorgan Chase",
    "Bank of America",
    "Citibank (Citi)",
    "Wells Fargo",
    "Goldman Sachs",
    "Morgan Stanley",
    "HSBC",
    "Barclays",
    "Lloyds Bank",
    "Royal Bank of Scotland (NatWest Group)",
    "Santander",
    "BBVA",
    "Deutsche Bank",
    "Commerzbank",
    "BNP Paribas",
    "Société Générale",
    "Crédit Agricole",
    "UBS",
    "Credit Suisse",
    "ING Group",
    "ABN AMRO",
    "Rabobank",
    "Nordea",
    "Danske Bank",
    "Swedbank",
    "SEB Bank",
    "Scotiabank",
    "Royal Bank of Canada (RBC)",
    "Toronto-Dominion Bank (TD Bank)",
    "Bank of Montreal (BMO)",
    "Commonwealth Bank",
    "Westpac",
    "ANZ Bank",
    "National Australia Bank (NAB)",
    "China Construction Bank (CCB)",
    "Industrial and Commercial Bank of China (ICBC)",
    "Bank of China",
    "Agricultural Bank of China",
    "State Bank of India (SBI)",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "DBS Bank",
    "OCBC Bank",
    "United Overseas Bank (UOB)",
    "Maybank",
    "Bank Rakyat Indonesia (BRI)",
    "Standard Bank",
    "First National Bank (FNB)",
    "Nedbank",
    "Absa Group (Barclays Africa)",
    "Al Rajhi Bank",
    "Emirates NBD",
    "Qatar National Bank (QNB)",

    // Credit Union Banks
    "Navy Federal Credit Union",
    "State Employees’ Credit Union",
    "PenFed Credit Union",
    "Alliant Credit Union",
    "Boeing Employees Credit Union (BECU)",
    "Teachers Credit Union",
    "Community First Credit Union",

    // Regional Banks
    "Regions Bank",
    "SunTrust (Now Truist)",
    "BB&T (Now Truist)",
    "Fifth Third Bank",
    "KeyBank",
    "Huntington National Bank",
    "PNC Bank",
    "Citizens Bank",

    // Military Banks
    "USAA",
    "Armed Forces Bank",
    "Wells Fargo Military Banking",
    "Navy Federal Credit Union",
    "Fort Sill National Bank",

    // Microfinance Banks
    "Grameen Bank",
    "SKS Microfinance (Now Bharat Financial Inclusion)",
    "FINCA International",
    "Accion",
    "Kiva Microfunds",
    "Pro Mujer",
    "MicroEnsure",
    "Fundación Paraguaya",
  ];

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

  const handleServiceTypeChange = (service) => {
    setServiceType(service);
    setShowServiceType(false);
  };

  const handleSeletedWallet = (wallet) => {
    setWaletType(wallet);
    setShowWalletType(false);
    setWalletSearchInput("");
  };

  const handleSeletedAccount = (bank) => {
    setAccountType(bank);
    setShowAccounType(false);
    setAccountSearchInput("");
  };

  const handleSeletedGiftCard = (giftCard) => {
    setGiftCardType(giftCard);
    setShowGiftCardType(false);
    setGiftCardSearchInput("");
  };

  const handleSeletedDebitCreditCard = (debitCreditCard) => {
    setDebitCreditCardType(debitCreditCard);
    setShowDebitCreditCardType(false);
    setDebitCreditCardSearchInput("");
  };

  const handleServiceChange = () => {
    if (serviceType === "Online Wallet Transfer") {
      setShowWallet(true);
      setShowAccount(false);
      setAccountType("");
      setShowGiftCard(false);
      setGiftCardType("");
      setShowDebitCreditCard(false);
      setDebitCreditCardType("");
    } else if (serviceType === "Bank Transfer") {
      setShowAccount(true);
      setShowWallet(false);
      setWaletType("");
      setShowGiftCard(false);
      setGiftCardType("");
      setShowDebitCreditCard(false);
      setDebitCreditCardType("");
    } else if (serviceType === "Gift Card Trade") {
      setShowGiftCard(true);
      setShowAccount(false);
      setAccountType("");
      setShowWallet(false);
      setWaletType("");
      setShowDebitCreditCard(false);
      setDebitCreditCardType("");
    } else if (serviceType === "Debit & Credit Card Spending") {
      setShowDebitCreditCard(true);
      setShowGiftCard(false);
      setGiftCardType("");
      setShowAccount(false);
      setAccountType("");
      setShowWallet(false);
      setWaletType("");
    } else if (serviceType === "Default") {
      setShowDebitCreditCard(false);
      setShowGiftCard(false);
      setGiftCardType("");
      setShowAccount(false);
      setAccountType("");
      setShowWallet(false);
      setWaletType("");
    }
  };

  const handleSelectedCurrency = (code, name) => {
    setSelectedCurrency({ code, name }); // Store both code & name
    setShowCurrencyOptions(false);
    setCurrrencySearchInput("");
  };

  const getCurrencies = async () => {
    try {
      const response = await axios.get(
        "https://api.exchangerate.host/list?access_key=a5d669ce99aa855e99ab16626cad67b6"
      );
      // console.log(" currency line 18", response);
      setCurrencies(response.data.currencies);
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  const handleAmountChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, ""); // Remove commas for processing
    if (!isNaN(rawValue)) {
      setAmount(rawValue);
    }
  };

  useEffect(() => {
    handleServiceChange();
  }, [serviceType]);

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <div className="bg-black lg:sticky overflow-hidden  w-full lg:h-[495px] h-full lg:top-[75px] flex flex-col lg:rounded-[14px] md:rounded-[18px] md:border border-neutral-800 ">
      <div className="flex bg- justify-between items-center p-[15px] border-b border-neutral-800 ">
        <p className="text-[17px] text-white font-[700] cursor-pointer">
          Filter Offers
        </p>
        <div className=" flex gap-[15px] items-center">
          <p
            onClick={() => {
              setClearFilter(true);
            }}
            className="px-[8px] py-[2px] text-[12px] text-red-700 font-[500] rounded-[6px] bg- hover:bg-tradeAsh border border-tradeAshLight hover:border-tradeAshExtraLight cursor-pointer duration-300 transition-all"
          >
            Clear Filter
          </p>
          <div
            onClick={() => setIsOfferFilter((prev) => !prev)}
            className="md:hidden flex border border-tradeAshLight  p-[2px] rounded-[6px]"
          >
            <IoCloseSharp className="text-white text-[20px]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col  h-full overflow-auto custom-scrollbar">
        <div className="flex flex-col justify-between ">
          <div className="bg- flex flex-col gap-[20px] p-[15px]  border-b border-tradeAshLight">
            <div>
              <p className="text-white text-[15px] font-[700]">Service type</p>
            </div>

            <div
              className="
               flex flex-wrap lg:gap-[15px] gap-[20px] "
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => handleServiceTypeChange(service)}
                  className={`lg:px-[12px] px-[14px] lg:py-[5px] py-[6px] text-[13px] font-[500] rounded-[8px] border cursor-pointer duration-300 transition-all  ${
                    serviceType.includes(service)
                      ? "text-black bg-tradeGreen border-tradeGreen hover:text-black"
                      : "text-tradeFadeWhite hover:text-white bg-transparent hover:bg-tradeAsh  border-tradeAshLight"
                  }`}
                >
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`${
              showAccount ? "flex" : "hidden"
            } flex-col p-[15px] gap-[30px] border-b border-tradeAshLight`}
          >
            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="text-white text-[15px] font-[700]">
                  Select Account
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div
                  onClick={() => setShowAccounType((prev) => !prev)}
                  className="flex bg-tradeAsh border border-tradeAshLight items-center pl-[10px] pr-[7px] lg:h-[44px] h-[46px] gap-[20px] rounded-[8px] cursor-pointer"
                >
                  <input
                    className="w-full lg:h-[30px] h-[35px] -none outline-none bg-transparent text-white text-[14px]  font-[500] placeholder:text-tradeFadeWhite cursor-pointer"
                    placeholder="Select"
                    type="text"
                    value={accountType}
                    readOnly
                  />
                  <div className="w-[px] flex justify-between items-center px-[10px] lg:h-[30px] h-[35px] rounded-[3px]">
                    <MdKeyboardArrowDown className="text-[25px] text-neutral-400" />
                  </div>
                </div>
                <div
                  className={` ${
                    showAccountType ? "flex" : "hidden"
                  } flex-col gap-[20px] p-[10px] bg-tradeAsh border border-tradeAshLight rounded-[8px] `}
                >
                  <div className="flex h-[43px] rounded-[8px] px-[10px] py-[5px] gap-[10px] items-center  border border-tradeAshLight">
                    <FaMagnifyingGlass className="text-[18px] text-tradeFadeWhite" />
                    <input
                      className="outline-none -none  lg:h-[30px] h-[35px] text-white text-[14px]  placeholder:text-tradeFadeWhite w-full bg-transparent"
                      type="text"
                      placeholder="Search account"
                      value={accountSearchInput}
                      onChange={(e) => setAccountSearchInput(e.target.value)}
                    />
                  </div>
                  <div className="overflow-y-auto custom-scrollbar">
                    {accountSearchInput ? (
                      <div className=" max-h-[230px] flex flex-col gap-[5px]">
                        {globalBanks
                          .filter((bank) =>
                            bank
                              .toLowerCase()
                              .includes(accountSearchInput.toLowerCase())
                          )
                          .map((bank, index) => (
                            <div
                              key={index}
                              onClick={() => handleSeletedAccount(bank)}
                              className="px-[10px] py-[10px] mr-[10px]  hover:bg-tradeGreen text-white hover:text-black  border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer transition-all duration-300"
                            >
                              <p className="text-[14px] ">{bank}</p>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="h-[230px] flex flex-col gap-[5px]">
                        {globalBanks
                          .sort((a, b) => a.localeCompare(b)) // Correct sorting logic
                          .map((bank, index) => (
                            <div
                              key={index}
                              onClick={() => handleSeletedAccount(bank)}
                              className="px-[10px] py-[10px] mr-[10px]  hover:bg-tradeGreen text-white hover:text-black  border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer transition-all duration-300"
                            >
                              <p className="text-[14px] ">{bank}</p>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="text-white text-[15px] font-[700]">
                  Select Currency
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div
                  onClick={() => setShowCurrencyOptions((prev) => !prev)}
                  className="flex bg-tradeAsh border border-tradeAshLight items-center pl-[10px] pr-[7px] lg:h-[44px] h-[46px] gap-[20px] rounded-[8px] cursor-pointer"
                >
                  <input
                    className="w-full lg:h-[30px] h-[35px] outline-none bg-transparent text-white text-[14px]  font-[500] placeholder:text-tradeFadeWhite cursor-pointer"
                    placeholder="Select"
                    type="text"
                    readOnly
                    value={selectedCurrency?.name}
                  />
                  <div className="border  border-tradeAshLight flex justify-between items-center px-[10px] lg:h-[30px] h-[35px] rounded-[6px]">
                    <div>
                      <input
                        className="w-[43px] text-[14px]  text-white placeholder:text-tradeFadeWhite font-[500] bg-transparent outline-none cursor-pointer"
                        type="text"
                        value={selectedCurrency?.code}
                        readOnly
                        placeholder="$€£"
                      />
                    </div>
                    <MdKeyboardArrowDown className="text-[25px] text-neutral-400" />
                  </div>
                </div>
                <div
                  className={` ${
                    showCurrencyOptions ? "flex" : "hidden"
                  } flex-col gap-[20px] p-[10px] bg-tradeAsh border border-tradeAshLight rounded-[8px] `}
                >
                  <div className="flex h-[43px] rounded-[8px] px-[10px] py-[5px] gap-[10px] items-center  border border-tradeAshLight">
                    <FaMagnifyingGlass className="text-[18px] text-tradeFadeWhite" />
                    <input
                      className="outline-none -none lg:h-[30px] h-[35px] text-white text-[14px]  placeholder:text-tradeFadeWhite w-full bg-transparent"
                      type="text"
                      placeholder="Search your currency"
                      value={currrencySearchInput}
                      onChange={(e) => setCurrrencySearchInput(e.target.value)}
                    />
                  </div>
                  <div className="overflow-y-auto custom-scrollbar">
                    {currrencySearchInput ? (
                      <div className="flex flex-col max-h-[230px] gap-[5px] mr-[10px]">
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
                              <div
                                className="flex gap-[5px] justify-between items-center px-[10px] py-[10px] hover:bg-tradeGreen text-white hover:text-black border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer  transition-all duration-300"
                                onClick={() =>
                                  handleSelectedCurrency(code, name)
                                }
                                key={code}
                              >
                                <p className=" text-[14px]  cursor-pointer ">
                                  {name}
                                </p>
                                <p className=" text-[14px]  cursor-pointer border border-tradeAshLight px-[6px] py-[3px] max-w-max h-max rounded-[6px]">
                                  {code}
                                </p>
                              </div>
                            )
                          )}
                      </div>
                    ) : (
                      <div className=" flex flex-col h-[230px] gap-[5px] mr-[10px]">
                        {Object.entries(currencies)
                          .sort((a, b) => a[1].localeCompare(b[1])) // Sort by currency name
                          .map(([code, name]) => (
                            <div
                              className="flex gap-[5px] justify-between items-center px-[10px] py-[10px] hover:bg-tradeGreen text-white hover:text-black border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer transition-all duration-300"
                              onClick={() => handleSelectedCurrency(code, name)}
                              key={code}
                            >
                              <p className=" text-[14px]  cursor-pointer ">
                                {name}
                              </p>
                              <p className=" text-[14px]  cursor-pointer border border-tradeAshLight px-[6px] py-[3px] max-w-max h-max rounded-[6px]">
                                {code}
                              </p>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="text-white text-[15px] font-[700]">
                  Enter Amount
                </p>
              </div>

              <div className="flex bg-tradeAsh border border-tradeAshLight items-center pl-[10px] pr-[7px] lg:h-[44px] h-[46px] gap-[20px] rounded-[8px]">
                <input
                  className="w-full lg:h-[30px] h-[35px] outline-none bg-transparent text-white text-[14px]  font-[500] placeholder:text-tradeFadeWhite cursor-pointer"
                  placeholder="00.00"
                  type="text"
                  value={amount ? Number(amount).toLocaleString() : ""}
                  onChange={handleAmountChange}
                />
              </div>
            </div>
          </div>
          <div
            className={`${
              showWallet ? "flex" : "hidden"
            } flex-col p-[15px] gap-[30px] border-b border-tradeAshLight`}
          >
            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="text-white text-[15px] font-[700]">
                  Select Wallet
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div
                  onClick={() => setShowWalletType((prev) => !prev)}
                  className="flex bg-tradeAsh border border-tradeAshLight items-center pl-[10px] pr-[7px] lg:h-[44px] h-[46px] gap-[20px] rounded-[8px] cursor-pointer"
                >
                  <input
                    className="w-full lg:h-[30px] h-[35px] -none outline-none bg-transparent text-white text-[14px]  font-[500] placeholder:text-tradeFadeWhite cursor-pointer"
                    placeholder=" Select"
                    type="text"
                    value={walletType}
                    readOnly
                  />
                  <div className="w-[px] flex justify-between items-center px-[10px] lg:h-[30px] h-[35px] rounded-[3px]">
                    <MdKeyboardArrowDown className="text-[25px] text-neutral-400" />
                  </div>
                </div>
                <div
                  className={` ${
                    showWalletType ? "flex" : "hidden"
                  } flex-col gap-[20px] p-[10px] bg-tradeAsh border border-tradeAshLight rounded-[8px]`}
                >
                  <div className="flex h-[43px] rounded-[8px] px-[10px] py-[5px] gap-[10px] items-center  border border-tradeAshLight">
                    <FaMagnifyingGlass className="text-[18px] text-tradeFadeWhite" />
                    <input
                      className="outline-none -none  lg:h-[30px] h-[35px] text-white text-[14px]  placeholder:text-tradeFadeWhite w-full bg-transparent"
                      type="text"
                      placeholder="Search wallet"
                      value={walletSearchInput}
                      onChange={(e) => setWalletSearchInput(e.target.value)}
                    />
                  </div>
                  <div className="overflow-y-auto custom-scrollbar">
                    {walletSearchInput ? (
                      <div className=" max-h-[230px] flex flex-col gap-[5px]">
                        {wallets
                          .filter((wallet) =>
                            wallet
                              .toLowerCase()
                              .includes(walletSearchInput.toLowerCase())
                          )
                          .map((wallet, index) => (
                            <div
                              key={index}
                              onClick={() => handleSeletedWallet(wallet)}
                              className="px-[10px] py-[10px] mr-[10px]  hover:bg-tradeGreen text-white hover:text-black  border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer transition-all duration-300"
                            >
                              <p className="text-[14px] ">{wallet}</p>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="h-[230px] flex flex-col gap-[5px]">
                        {wallets
                          .sort((a, b) => a.localeCompare(b)) // Correct sorting logic
                          .map((wallet, index) => (
                            <div
                              key={index}
                              onClick={() => handleSeletedWallet(wallet)}
                              className="px-[10px] py-[10px] mr-[10px]  hover:bg-tradeGreen text-white hover:text-black  border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer transition-all duration-300"
                            >
                              <p className="text-[14px] ">{wallet}</p>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="text-white text-[15px] font-[700]">
                  Select Currency
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div
                  onClick={() => setShowCurrencyOptions((prev) => !prev)}
                  className="flex bg-tradeAsh border border-tradeAshLight items-center pl-[10px] pr-[7px] lg:h-[44px] h-[46px] gap-[20px] rounded-[8px] cursor-pointer"
                >
                  <input
                    className="w-full lg:h-[30px] h-[35px] outline-none bg-transparent text-white text-[14px]  font-[500] placeholder:text-tradeFadeWhite cursor-pointer"
                    placeholder="Select"
                    type="text"
                    readOnly
                    value={selectedCurrency?.name}
                  />
                  <div className="border  border-tradeAshLight flex justify-between items-center px-[10px] lg:h-[30px] h-[35px] rounded-[6px]">
                    <div>
                      <input
                        className="w-[43px] text-[14px]  text-white placeholder:text-tradeFadeWhite font-[500] bg-transparent outline-none cursor-pointer"
                        type="text"
                        value={selectedCurrency?.code}
                        readOnly
                        placeholder="$€£"
                      />
                    </div>
                    <MdKeyboardArrowDown className="text-[25px] text-neutral-400" />
                  </div>
                </div>
                <div
                  className={` ${
                    showCurrencyOptions ? "flex" : "hidden"
                  } flex-col gap-[20px] p-[10px] bg-tradeAsh border border-tradeAshLight rounded-[8px] `}
                >
                  <div className="flex h-[43px] rounded-[8px] px-[10px] py-[5px] gap-[10px] items-center  border border-tradeAshLight">
                    <FaMagnifyingGlass className="text-[18px] text-tradeFadeWhite" />
                    <input
                      className="outline-none -none lg:h-[30px] h-[35px] text-white text-[14px]  placeholder:text-tradeFadeWhite w-full bg-transparent"
                      type="text"
                      placeholder="Search your currency"
                      value={currrencySearchInput}
                      onChange={(e) => setCurrrencySearchInput(e.target.value)}
                    />
                  </div>
                  <div className="overflow-y-auto custom-scrollbar">
                    {currrencySearchInput ? (
                      <div className="flex flex-col max-h-[230px] gap-[5px] mr-[10px]">
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
                              <div
                                className="flex gap-[5px] justify-between items-center px-[10px] py-[10px] hover:bg-tradeGreen text-white hover:text-black border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer  transition-all duration-300"
                                onClick={() =>
                                  handleSelectedCurrency(code, name)
                                }
                                key={code}
                              >
                                <p className=" text-[14px]  cursor-pointer ">
                                  {name}
                                </p>
                                <p className=" text-[14px]  cursor-pointer border border-tradeAshLight px-[6px] py-[3px] max-w-max h-max rounded-[6px]">
                                  {code}
                                </p>
                              </div>
                            )
                          )}
                      </div>
                    ) : (
                      <div className=" flex flex-col h-[230px] gap-[5px] mr-[10px]">
                        {Object.entries(currencies)
                          .sort((a, b) => a[1].localeCompare(b[1])) // Sort by currency name
                          .map(([code, name]) => (
                            <div
                              className="flex gap-[5px] justify-between items-center px-[10px] py-[10px] hover:bg-tradeGreen text-white hover:text-black border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer transition-all duration-300"
                              onClick={() => handleSelectedCurrency(code, name)}
                              key={code}
                            >
                              <p className=" text-[14px]  cursor-pointer ">
                                {name}
                              </p>
                              <p className=" text-[14px]  cursor-pointer border border-tradeAshLight px-[6px] py-[3px] max-w-max h-max rounded-[6px]">
                                {code}
                              </p>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="text-white text-[15px] font-[700]">
                  Enter Amount
                </p>
              </div>

              <div className="flex bg-tradeAsh border border-tradeAshLight items-center pl-[10px] pr-[7px] lg:h-[44px] h-[46px] gap-[20px] rounded-[8px]">
                <input
                  className="w-full lg:h-[30px] h-[35px] outline-none bg-transparent text-white text-[14px]  font-[500] placeholder:text-tradeFadeWhite"
                  placeholder="00.00"
                  type="text"
                  value={amount ? Number(amount).toLocaleString() : ""}
                  onChange={handleAmountChange}
                />
              </div>
            </div>
          </div>
          <div
            className={`${
              showGiftCard ? "flex" : "hidden"
            } flex-col p-[15px] gap-[30px] border-b border-tradeAshLight`}
          >
            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="text-white text-[15px] font-[700]">
                  Select Gift Card
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div
                  onClick={() => setShowGiftCardType((prev) => !prev)}
                  className="flex bg-tradeAsh border border-tradeAshLight items-center pl-[10px] pr-[7px] lg:h-[44px] h-[46px] gap-[20px] rounded-[8px] cursor-pointer"
                >
                  <input
                    className="w-full lg:h-[30px] h-[35px] -none outline-none bg-transparent text-white text-[14px]  font-[500] placeholder:text-tradeFadeWhite cursor-pointer"
                    placeholder="Select"
                    type="text"
                    value={giftCardType}
                    readOnly
                  />
                  <div className="w-[px] flex justify-between items-center px-[10px] lg:h-[30px] h-[35px] rounded-[3px]">
                    <MdKeyboardArrowDown className="text-[25px] text-neutral-400" />
                  </div>
                </div>
                <div
                  className={` ${
                    showGiftCardType ? "flex" : "hidden"
                  } flex-col gap-[20px] p-[10px] bg-tradeAsh border border-tradeAshLight rounded-[8px] `}
                >
                  <div className="flex h-[43px] rounded-[8px] px-[10px] py-[5px] gap-[10px] items-center  border border-tradeAshLight">
                    <FaMagnifyingGlass className="text-[18px] text-tradeFadeWhite" />
                    <input
                      className="outline-none -none  lg:h-[30px] h-[35px] text-white text-[14px]  placeholder:text-tradeFadeWhite w-full bg-transparent"
                      type="text"
                      placeholder="Search gift card"
                      value={giftCardSearchInput}
                      onChange={(e) => setGiftCardSearchInput(e.target.value)}
                    />
                  </div>
                  <div className="overflow-y-auto custom-scrollbar">
                    {giftCardSearchInput ? (
                      <div className=" max-h-[230px] flex flex-col gap-[5px]">
                        {globalGiftCards
                          .filter((giftCard) =>
                            giftCard
                              .toLowerCase()
                              .includes(giftCardSearchInput.toLowerCase())
                          )
                          .map((giftCard, index) => (
                            <div
                              key={index}
                              onClick={() => handleSeletedGiftCard(giftCard)}
                              className="px-[10px] py-[10px] mr-[10px]  hover:bg-tradeGreen text-white hover:text-black  border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer transition-all duration-300"
                            >
                              <p className="text-[14px] ">{giftCard}</p>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="h-[230px] flex flex-col gap-[5px]">
                        {globalGiftCards
                          .sort((a, b) => a.localeCompare(b)) // Correct sorting logic
                          .map((giftCard, index) => (
                            <div
                              key={index}
                              onClick={() => handleSeletedGiftCard(giftCard)}
                              className="px-[10px] py-[10px] mr-[10px]  hover:bg-tradeGreen text-white hover:text-black  border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer transition-all duration-300"
                            >
                              <p className="text-[14px] ">{giftCard}</p>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="text-white text-[15px] font-[700]">
                  Select Currency
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div
                  onClick={() => setShowCurrencyOptions((prev) => !prev)}
                  className="flex bg-tradeAsh border border-tradeAshLight items-center pl-[10px] pr-[7px] lg:h-[44px] h-[46px] gap-[20px] rounded-[8px] cursor-pointer"
                >
                  <input
                    className="w-full lg:h-[30px] h-[35px] outline-none bg-transparent text-white text-[14px]  font-[500] placeholder:text-tradeFadeWhite cursor-pointer"
                    placeholder="Select"
                    type="text"
                    readOnly
                    value={selectedCurrency?.name}
                  />
                  <div className="border  border-tradeAshLight flex justify-between items-center px-[10px] lg:h-[30px] h-[35px] rounded-[6px]">
                    <div>
                      <input
                        className="w-[43px] text-[14px]  text-white placeholder:text-tradeFadeWhite font-[500] bg-transparent outline-none cursor-pointer"
                        type="text"
                        value={selectedCurrency?.code}
                        readOnly
                        placeholder="$€£"
                      />
                    </div>
                    <MdKeyboardArrowDown className="text-[25px] text-neutral-400" />
                  </div>
                </div>
                <div
                  className={` ${
                    showCurrencyOptions ? "flex" : "hidden"
                  } flex-col gap-[20px] p-[10px] bg-tradeAsh border border-tradeAshLight rounded-[8px] `}
                >
                  <div className="flex h-[43px] rounded-[8px] px-[10px] py-[5px] gap-[10px] items-center  border border-tradeAshLight">
                    <FaMagnifyingGlass className="text-[18px] text-tradeFadeWhite" />
                    <input
                      className="outline-none -none lg:h-[30px] h-[35px] text-white text-[14px]  placeholder:text-tradeFadeWhite w-full bg-transparent"
                      type="text"
                      placeholder="Search your currency"
                      value={currrencySearchInput}
                      onChange={(e) => setCurrrencySearchInput(e.target.value)}
                    />
                  </div>
                  <div className="overflow-y-auto custom-scrollbar">
                    {currrencySearchInput ? (
                      <div className="flex flex-col max-h-[230px] gap-[5px] mr-[10px]">
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
                              <div
                                className="flex gap-[5px] justify-between items-center px-[10px] py-[10px] hover:bg-tradeGreen text-white hover:text-black border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer  transition-all duration-300"
                                onClick={() =>
                                  handleSelectedCurrency(code, name)
                                }
                                key={code}
                              >
                                <p className=" text-[14px]  cursor-pointer ">
                                  {name}
                                </p>
                                <p className=" text-[14px]  cursor-pointer border border-tradeAshLight px-[6px] py-[3px] max-w-max h-max rounded-[6px]">
                                  {code}
                                </p>
                              </div>
                            )
                          )}
                      </div>
                    ) : (
                      <div className=" flex flex-col h-[230px] gap-[5px] mr-[10px]">
                        {Object.entries(currencies)
                          .sort((a, b) => a[1].localeCompare(b[1])) // Sort by currency name
                          .map(([code, name]) => (
                            <div
                              className="flex gap-[5px] justify-between items-center px-[10px] py-[10px] hover:bg-tradeGreen text-white hover:text-black border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer transition-all duration-300"
                              onClick={() => handleSelectedCurrency(code, name)}
                              key={code}
                            >
                              <p className=" text-[14px]  cursor-pointer ">
                                {name}
                              </p>
                              <p className=" text-[14px]  cursor-pointer border border-tradeAshLight px-[6px] py-[3px] max-w-max h-max rounded-[6px]">
                                {code}
                              </p>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="text-white text-[15px] font-[700]">
                  Enter Amount
                </p>
              </div>

              <div className="flex bg-tradeAsh border border-tradeAshLight items-center pl-[10px] pr-[7px] lg:h-[44px] h-[46px] gap-[20px] rounded-[8px]">
                <input
                  className="w-full lg:h-[30px] h-[35px] outline-none bg-transparent text-white text-[14px]  font-[500] placeholder:text-tradeFadeWhite"
                  placeholder="00.00"
                  type="text"
                  value={amount ? Number(amount).toLocaleString() : ""}
                  onChange={handleAmountChange}
                />
              </div>
            </div>
          </div>
          <div
            className={`${
              showDebitCreditCard ? "flex" : "hidden"
            } flex-col p-[15] gap-[30px] border-b border-tradeAshLight`}
          >
            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="text-white text-[15px] font-[700]">
                  Select Credit or Debit Card
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div
                  onClick={() => setShowDebitCreditCardType((prev) => !prev)}
                  className="flex bg-tradeAsh border border-tradeAshLight items-center pl-[10px] pr-[7px] lg:h-[44px] h-[46px] gap-[20px] rounded-[8px] cursor-pointer"
                >
                  <input
                    className="w-full lg:h-[30px] h-[35px] -none outline-none bg-transparent text-white text-[14px]  font-[500] placeholder:text-tradeFadeWhite cursor-pointer"
                    placeholder="Select"
                    type="text"
                    value={debitCreditCardType}
                    readOnly
                  />
                  <div className="w-[px] flex justify-between items-center px-[10px] lg:h-[30px] h-[35px] rounded-[3px]">
                    <MdKeyboardArrowDown className="text-[25px] text-neutral-400" />
                  </div>
                </div>
                <div
                  className={` ${
                    showDebitCreditCardType ? "flex" : "hidden"
                  } flex-col gap-[20px] p-[10px] bg-tradeAsh border border-tradeAshLight rounded-[8px] `}
                >
                  <div className="flex h-[43px] rounded-[8px] px-[10px] py-[5px] gap-[10px] items-center  border border-tradeAshLight">
                    <FaMagnifyingGlass className="text-[18px] text-tradeFadeWhite" />
                    <input
                      className="outline-none -none  lg:h-[30px] h-[35px] text-white text-[14px]  placeholder:text-tradeFadeWhite w-full bg-transparent"
                      type="text"
                      placeholder="Search Credit or Debit Card"
                      value={debitCreditSearchInput}
                      onChange={(e) =>
                        setDebitCreditCardSearchInput(e.target.value)
                      }
                    />
                  </div>
                  <div className="overflow-y-auto custom-scrollbar">
                    {debitCreditSearchInput ? (
                      <div className=" max-h-[230px] flex flex-col gap-[5px]">
                        {debitandCreditCards
                          .filter((debitandCreditCard) =>
                            debitandCreditCard
                              .toLowerCase()
                              .includes(debitCreditSearchInput.toLowerCase())
                          )
                          .map((debitandCreditCard, index) => (
                            <div
                              key={index}
                              onClick={() =>
                                handleSeletedDebitCreditCard(debitandCreditCard)
                              }
                              className="px-[10px] py-[10px] mr-[10px]  hover:bg-tradeGreen text-white hover:text-black  border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer transition-all duration-300"
                            >
                              <p className="text-[14px] ">
                                {debitandCreditCard}
                              </p>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="h-[230px] flex flex-col gap-[5px]">
                        {debitandCreditCards
                          .sort((a, b) => a.localeCompare(b)) // Correct sorting logic
                          .map((debitandCreditCard, index) => (
                            <div
                              key={index}
                              onClick={() =>
                                handleSeletedDebitCreditCard(debitandCreditCard)
                              }
                              className="px-[10px] py-[10px] mr-[10px]  hover:bg-tradeGreen text-white hover:text-black  border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer transition-all duration-300"
                            >
                              <p className="text-[14px] ">
                                {debitandCreditCard}
                              </p>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="text-white text-[15px] font-[700]">
                  Select Currency
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div
                  onClick={() => setShowCurrencyOptions((prev) => !prev)}
                  className="flex bg-tradeAsh border border-tradeAshLight items-center pl-[10px] pr-[7px] lg:h-[44px] h-[46px] gap-[20px] rounded-[8px] cursor-pointer"
                >
                  <input
                    className="w-full lg:h-[30px] h-[35px] outline-none bg-transparent text-white text-[14px]  font-[500] placeholder:text-tradeFadeWhite cursor-pointer"
                    placeholder="Select"
                    type="text"
                    readOnly
                    value={selectedCurrency?.name}
                  />
                  <div className="border  border-tradeAshLight flex justify-between items-center px-[10px] lg:h-[30px] h-[35px] rounded-[6px]">
                    <div>
                      <input
                        className="w-[43px] text-[14px]  text-white placeholder:text-tradeFadeWhite font-[500] bg-transparent outline-none cursor-pointer"
                        type="text"
                        value={selectedCurrency?.code}
                        readOnly
                        placeholder="$€£"
                      />
                    </div>
                    <MdKeyboardArrowDown className="text-[25px] text-neutral-400" />
                  </div>
                </div>
                <div
                  className={` ${
                    showCurrencyOptions ? "flex" : "hidden"
                  } flex-col gap-[20px] p-[10px] bg-tradeAsh border border-tradeAshLight rounded-[8px] `}
                >
                  <div className="flex h-[43px] rounded-[8px] px-[10px] py-[5px] gap-[10px] items-center  border border-tradeAshLight">
                    <FaMagnifyingGlass className="text-[18px] text-tradeFadeWhite" />
                    <input
                      className="outline-none -none lg:h-[30px] h-[35px] text-white text-[14px]  placeholder:text-tradeFadeWhite w-full bg-transparent"
                      type="text"
                      placeholder="Search your currency"
                      value={currrencySearchInput}
                      onChange={(e) => setCurrrencySearchInput(e.target.value)}
                    />
                  </div>
                  <div className="overflow-y-auto custom-scrollbar">
                    {currrencySearchInput ? (
                      <div className="flex flex-col max-h-[230px] gap-[5px] mr-[10px]">
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
                              <div
                                className="flex gap-[5px] justify-between items-center px-[10px] py-[10px] hover:bg-tradeGreen text-white hover:text-black border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer  transition-all duration-300"
                                onClick={() =>
                                  handleSelectedCurrency(code, name)
                                }
                                key={code}
                              >
                                <p className=" text-[14px]  cursor-pointer ">
                                  {name}
                                </p>
                                <p className=" text-[14px]  cursor-pointer border border-tradeAshLight px-[6px] py-[3px] max-w-max h-max rounded-[6px]">
                                  {code}
                                </p>
                              </div>
                            )
                          )}
                      </div>
                    ) : (
                      <div className=" flex flex-col h-[230px] gap-[5px] mr-[10px]">
                        {Object.entries(currencies)
                          .sort((a, b) => a[1].localeCompare(b[1])) // Sort by currency name
                          .map(([code, name]) => (
                            <div
                              className="flex gap-[5px] justify-between items-center px-[10px] py-[10px] hover:bg-tradeGreen text-white hover:text-black border border-tradeAshLight hover:border-tradeGreen rounded-[8px] cursor-pointer transition-all duration-300"
                              onClick={() => handleSelectedCurrency(code, name)}
                              key={code}
                            >
                              <p className=" text-[14px]  cursor-pointer ">
                                {name}
                              </p>
                              <p className=" text-[14px]  cursor-pointer border border-tradeAshLight px-[6px] py-[3px] max-w-max h-max rounded-[6px]">
                                {code}
                              </p>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div>
                <p className="text-white text-[15px] font-[700]">
                  Enter Amount
                </p>
              </div>

              <div className="flex bg-tradeAsh border border-tradeAshLight items-center pl-[10px] pr-[7px] lg:h-[44px] h-[46px] gap-[20px] rounded-[8px]">
                <input
                  className="w-full lg:h-[30px] h-[35px] outline-none bg-transparent text-white text-[14px]  font-[500] placeholder:text-tradeFadeWhite"
                  placeholder="00.00"
                  type="text"
                  value={amount ? Number(amount).toLocaleString() : ""}
                  onChange={handleAmountChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" bg- flex  flex-col gap-[20px] p-[15px]">
          <div>
            <p className="text-white text-[15px] font-[700]">Sort by</p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center justify-between">
              <p className="text-[14px] text-white font-[600]">
                Rate : {""}
                <small className="text-[14px] text-tradeFadeWhite font-[500]">
                  Low to High
                </small>
              </p>
              <input
                className="h-[15px] w-[18px]  cursor-pointer"
                type="radio"
                name="priceSort"
                value="lowToHigh"
                checked={isPriceSort === "lowToHigh"}
                onChange={(e) => setIsPriceSort(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[14px] text-white font-[600]">
                Rate : {""}
                <small className="text-[14px] text-tradeFadeWhite font-[500]">
                  High to Low
                </small>
              </p>
              <input
                className="h-[15px] w-[18px]  cursor-pointer"
                type="radio"
                name="priceSort"
                value="highToLow"
                // checked={isPriceSort === "highToLow"}
                onChange={(e) => setIsPriceSort(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[14px] text-white font-[600]">
                Avg. Trade Time : {""}
                <small className="text-[14px] text-tradeFadeWhite font-[500]">
                  Slow to Fast
                </small>
              </p>
              <input
                className="h-[15px] w-[18px]  cursor-pointer"
                type="radio"
                name="timeSort"
                value="slowToFast"
                // checked={isTimeSort === "slowToFast"}
                onChange={(e) => setIsTimeSort(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[14px] text-white font-[600]">
                Avg. Trade Time : {""}
                <small className="text-[14px] text-tradeFadeWhite font-[500]">
                  Fast to Slow
                </small>
              </p>
              <input
                className="h-[15px] w-[18px]  cursor-pointer"
                type="radio"
                name="timeSort"
                value="fastToSlow"
                onChange={(e) => setIsTimeSort(e.target.value)}
                // checked={isTimeSort === "fastToSlow"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[10px] bg-tradeAsh p-[15px]">
        <div
          onClick={handleFilterOffer}
          className="flex items-center justify-between bg-tradeGreen hover:bg-white md:p-[10px] px-[10px] py-[14px] rounded-[10px] cursor-pointer duration-300 transition-all"
        >
          <p className="font-[600] text-[15px] ">
            {isFilterLoading ? "Filtering..." : "Apply Filter"}
          </p>
          <TbReload
            className={`text-[20px] transition-transform ${
              isFilterLoading ? "animate-spin" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default OfferFilter;
