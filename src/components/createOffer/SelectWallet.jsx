import React, { useState } from "react";
import { RiInformation2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SelectWallet = ({
  showWallet,
  wallet,
  setWallet,
  setServiceError,
  serviceError,
}) => {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [walletSearchInput, setWalletSearchInput] = useState("");

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

  const handleSeletedWallet = (wallet) => {
    setWallet(wallet);
    setShowWalletOptions(false);
    setWalletSearchInput("");
  };

  return (
    <div
      className={` ${
        showWallet ? "flex" : "hidden"
      }  flex flex-1 flex-col gap-[15px]`}
    >
      <div className="flex items-center gap-[8px]">
        <p className="text-white text-[18px] font-[600]">Select Wallet</p>
        <FaRegQuestionCircle className="text-neutral-500" />
      </div>
      <div
        onClick={() => setShowWalletOptions((prev) => !prev)}
        className="flex items-center pl-[10px] pr-[7px] h-[45px] gap-[20px] border border-neutral-700 rounded-[5px] cursor-pointer"
      >
        <input
          className="w-full border-none outline-none bg-transparent text-white text-[15px] placeholder:text-neutral-400 cursor-pointer"
          placeholder="Choose"
          type="text"
          value={wallet}
          readOnly
        />
        <div className="w-[170px] flex justify-between items-center px-[10px] h-[30px] border border-neutral-400 rounded-[3px]">
          <p className="text-[15px] font-[500] text-white">Show all</p>
          <MdKeyboardArrowDown className="text-[25px] text-white" />
        </div>
      </div>
      <div
        className={` ${
          showWalletOptions ? "flex" : "hidden"
        }  flex-col gap-[15px] p-[10px] bg-tradeAshLight rounded-[8px] border border-neutral-700 h-[350px] `}
      >
        <div className="flex h-[45px] px-[15px] py-[5px] gap-[10px] items-center border border-neutral-700">
          <FaMagnifyingGlass className="text-[20px] text-neutral-500" />
          <input
            className="outline-none border-none h-[30px] text-white text-[15px] placeholder:text-zinc-500 w-full bg-transparent"
            type="text"
            placeholder="Search wallet..."
            value={walletSearchInput}
            onChange={(e) => setWalletSearchInput(e.target.value)}
          />
        </div>

        <div className="overflow-y-auto ">
          {walletSearchInput ? (
            <div className="flex flex-col gap-[10px]">
              {wallets
                .filter((wallet) =>
                  wallet.toLowerCase().includes(walletSearchInput.toLowerCase())
                )
                .map((wallet, index) => (
                  <div
                    key={index}
                    onClick={() => handleSeletedWallet(wallet)}
                    className="px-[10px] py-[10px] mr-[10px] hover:bg-tradeAshExtraLight cursor-pointer"
                  >
                    <p className="text-white text-[14px]">{wallet}</p>
                  </div>
                ))}
            </div>
          ) : (
            <div className="flex flex-col gap-[10px]">
              {wallets
                .sort((a, b) => a.localeCompare(b)) // Correct sorting logic
                .map((wallet, index) => (
                  <div
                    key={index}
                    onClick={() => handleSeletedWallet(wallet)}
                    className="px-[10px] py-[10px] mr-[10px] hover:bg-tradeAshExtraLight cursor-pointer"
                  >
                    <p className="text-white text-[14px]">{wallet}</p>
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

export default SelectWallet;
