import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiInformation2Line } from "react-icons/ri";

const SelectAccount = ({
  showAccount,
  account,
  setAccount,
  setServiceError,
  serviceError,
}) => {
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [accountSearchInput, setAccountSearchInput] = useState("");

  const handleSeletedAccount = (bank) => {
    setAccount(bank);
    setShowAccountOptions(false);
  };

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

  return (
    <div
      className={` ${
        showAccount ? "flex" : "hidden"
      } flex flex-1 flex-col gap-[15px]`}
    >
      <div className="flex items-center gap-[8px]">
        <p className="text-white text-[18px] font-[600]">Select Account</p>
        <FaRegQuestionCircle className="text-neutral-500" />
      </div>
      <div
        onClick={() => setShowAccountOptions((prev) => !prev)}
        className="flex items-center pl-[10px] pr-[7px] h-[45px] gap-[20px]  border border-neutral-700 rounded-[5px] cursor-pointer"
      >
        <input
          className="w-full border-none outline-none bg-transparent text-white text-[15px] placeholder:text-neutral-400 cursor-pointer"
          placeholder="Choose"
          type="text"
          value={account}
          readOnly
        />
        <div className="w-[170px] flex justify-between items-center px-[10px] h-[30px] border border-neutral-400 rounded-[3px]">
          <p className="text-[15px] font-[500] text-white">Show all</p>
          <MdKeyboardArrowDown className="text-[25px] text-white" />
        </div>
      </div>
      <div
        className={` ${
          showAccountOptions ? "flex" : "hidden"
        }   flex-col gap-[15px] p-[10px] bg-tradeAshLight rounded-[8px] border border-neutral-700 h-[350px] `}
      >
        <div className="flex h-[45px] px-[15px] py-[5px] gap-[20px] items-center border border-neutral-700">
          <FaMagnifyingGlass className="text-[20px] text-neutral-500" />
          <input
            className="outline-none border-none h-[30px] text-white text-[15px] placeholder:text-zinc-500 w-full bg-transparent"
            type="text"
            placeholder="Search account..."
            value={accountSearchInput}
            onChange={(e) => setAccountSearchInput(e.target.value)}
          />
        </div>

        <div className="overflow-y-auto ">
          {accountSearchInput ? (
            <div className="flex flex-col gap-[10px]">
              {globalBanks
                .filter((bank) =>
                  bank.toLowerCase().includes(accountSearchInput.toLowerCase())
                )
                .map((bank, index) => (
                  <div
                    key={index}
                    onClick={() => handleSeletedAccount(bank)}
                    className="px-[10px] py-[10px] mr-[10px] hover:bg-[#464646] cursor-pointer"
                  >
                    <p className="text-white text-[14px]">{bank}</p>
                  </div>
                ))}
            </div>
          ) : (
            <div className="flex flex-col gap-[10px]">
              {globalBanks
                .sort((a, b) => a.localeCompare(b)) // Correct sorting logic
                .map((bank, index) => (
                  <div
                    key={index}
                    onClick={() => handleSeletedAccount(bank)}
                    className="px-[10px] py-[10px] mr-[10px] hover:bg-tradeAshExtraLight cursor-pointer"
                  >
                    <p className="text-white text-[14px]">{bank}</p>
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

export default SelectAccount;
