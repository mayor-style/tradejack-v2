import React, { useState } from "react";

const Layer5 = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);
  const [question8, setQuestion8] = useState(false);

  const handleQuestion1 = () => {
    setQuestion1(!question1);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4(false);
    setQuestion5(false);
    setQuestion6(false);
    setQuestion7(false);
    setQuestion8(false);
  };

  const handleQuestion2 = () => {
    setQuestion2(!question2);
    setQuestion1(false);
    setQuestion3(false);
    setQuestion4(false);
    setQuestion5(false);
    setQuestion6(false);
    setQuestion7(false);
    setQuestion8(false);
  };

  const handleQuestion3 = () => {
    setQuestion3(!question3);
    setQuestion1(false);
    setQuestion2(false);
    setQuestion4(false);
    setQuestion5(false);
    setQuestion6(false);
    setQuestion7(false);
    setQuestion8(false);
  };

  const handleQuestion4 = () => {
    setQuestion4(!question4);
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion5(false);
    setQuestion6(false);
    setQuestion7(false);
    setQuestion8(false);
  };

  const handleQuestion5 = () => {
    setQuestion5(!question5);
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4(false);
    setQuestion6(false);
    setQuestion7(false);
    setQuestion8(false);
  };

  const handleQuestion6 = () => {
    setQuestion6(!question6);
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4(false);
    setQuestion5(false);
    setQuestion7(false);
    setQuestion8(false);
  };

  const handleQuestion7 = () => {
    setQuestion7(!question7);
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4(false);
    setQuestion5(false);
    setQuestion6(false);
    setQuestion8(false);
  };
  return (
    <div className="px-[5%]  lg:pt-[150px] pt-[100px] lg:pb-[50px] pb-[50px]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className=" z-10 relative border border-tradeGreen w-[65px] h-[28.5px] pb-[2px] rounded-[8px]">
          <p className=" absolute top-[-2px] left-[-3px] text-[12px] text-white font-[500] px-[20px] py-[4px] rounded-[6px] bg-tradeGreen w-max">
            ASK
          </p>
        </div>
        <p className="mt-[10px] text-white font-[500] lg:text-[50px] sm:text-[60px] text-[38px] text-center sm:leading-[70px] leading-[50px] w-[300px] sm:w-full">
          Frequently asked questions
        </p>
      </div>
      <div className="mt-[50px] flex flex-col items-center gap-[20px]">
        <div
          onClick={() => handleQuestion1()}
          className="py-[20px] px-[25px] border border-neutral-500 rounded-[15px] lg:w-[700px] w-[full] cursor-pointer"
        >
          <div className="flex justify-between items-center ">
            <p className="text-[16px] text-white">What is TradeJack ?</p>
            <i
              className={`fa-solid fa-angle-down text-white transform transition-transform duration-500 ${
                question1 ? "rotate-180" : ""
              }`}
            ></i>
          </div>
          <div
            className={`transition-[max-height, opacity, margin-top] ease-in-out duration-700 overflow-hidden ${
              question1
                ? "max-h-[500px] opacity-100 mt-[20px]"
                : "max-h-0 opacity-0 mt-0"
            } `}
          >
            <p className="text-[16px] text-neutral-500">
              TradeJack is a secure, global platform that allows users to trade
              a variety of digital assets, including cryptocurrencies, fiat
              currencies, and even bank funds, with verified vendors.
            </p>
          </div>
        </div>
        <div
          onClick={() => handleQuestion2()}
          className=" py-[20px] px-[25px] border border-neutral-500 rounded-[15px] lg:w-[700px] w-[full] cursor-pointer"
        >
          <div className="flex justify-between items-center ">
            <p className="text-[16px] text-white">
              {" "}
              How does the Bank to Bank Transfer work ?
            </p>
            <i
              className={`fa-solid fa-angle-down text-white transform transition-transform duration-500 ${
                question2 ? "rotate-180" : ""
              }`}
            ></i>
          </div>
          <div
            className={`transition-[max-height, opacity, margin-top] ease-in-out duration-700 overflow-hidden ${
              question2
                ? "max-h-[500px] opacity-100 mt-[20px]"
                : "max-h-0 opacity-0 mt-0"
            } `}
          >
            <p className="text-[16px] text-neutral-500">
              Bank to Bank Transfer lets you safely send money from your bank
              account to another. Just find a verified vendor with a good rate,
              agree on terms, and complete the transaction securely on our
              platform.
            </p>
          </div>
        </div>
        <div
          onClick={() => handleQuestion3()}
          className=" py-[20px] px-[25px] border border-neutral-500 rounded-[15px] lg:w-[700px] w-[full] cursor-pointer"
        >
          <div className="flex justify-between items-center ">
            <p className="text-[16px] text-white">
              {" "}
              How do I ensure my transactions are secure ?
            </p>
            <i
              className={`fa-solid fa-angle-down text-white transform transition-transform duration-500 ${
                question3 ? "rotate-180" : ""
              }`}
            ></i>
          </div>
          <div
            className={`transition-[max-height, opacity, margin-top] ease-in-out duration-700 overflow-hidden ${
              question3
                ? "max-h-[500px] opacity-100 mt-[20px]"
                : "max-h-0 opacity-0 mt-0"
            } `}
          >
            <p className="text-[16px] text-neutral-500">
              Every transaction on TradeJack is protected by advanced security
              protocols. Additionally, all vendors are verified, ensuring a safe
              trading environment for users.
            </p>
          </div>
        </div>
        <div
          onClick={() => handleQuestion4()}
          className=" py-[20px] px-[25px] border border-neutral-500 rounded-[15px] lg:w-[700px] w-[full] cursor-pointer"
        >
          <div className="flex justify-between items-center ">
            <p className="text-[16px] text-white">
              {" "}
              What Happens If a Trade Encounters Issues ?
            </p>
            <i
              className={`fa-solid fa-angle-down text-white transform transition-transform duration-500 ${
                question4 ? "rotate-180" : ""
              }`}
            ></i>
          </div>
          <div
            className={`transition-[max-height, opacity, margin-top] ease-in-out duration-700 overflow-hidden ${
              question4
                ? "max-h-[500px] opacity-100 mt-[20px]"
                : "max-h-0 opacity-0 mt-0"
            } `}
          >
            <p className="text-[16px] text-neutral-500">
              If an issue arises during a trade, users and vendors can submit a
              dispute. Our dedicated resolution team works promptly to address
              and resolve any problems.
            </p>
          </div>
        </div>
        <div
          onClick={() => handleQuestion5()}
          className=" py-[20px] px-[25px] border border-neutral-500 rounded-[15px] lg:w-[700px] w-[full] cursor-pointer"
        >
          <div className="flex justify-between items-center ">
            <p className="text-[16px] text-white"> Are there hidden fees ?</p>
            <i
              className={`fa-solid fa-angle-down text-white transform transition-transform duration-500 ${
                question5 ? "rotate-180" : ""
              }`}
            ></i>
          </div>
          <div
            className={`transition-[max-height, opacity, margin-top] ease-in-out duration-700 overflow-hidden ${
              question5
                ? "max-h-[500px] opacity-100 mt-[20px]"
                : "max-h-0 opacity-0 mt-0"
            } `}
          >
            <p className="text-[16px] text-neutral-500">
              No, we value transparency. All fees are clearly outlined before
              initiating any transaction.
            </p>
          </div>
        </div>
        <div
          onClick={() => handleQuestion6()}
          className=" py-[20px] px-[25px] border border-neutral-500 rounded-[15px] lg:w-[700px] w-[full] cursor-pointer"
        >
          <div className="flex justify-between items-center ">
            <p className="text-[16px] text-white">
              How do I boost my visibility as a vendor ?
            </p>
            <i
              className={`fa-solid fa-angle-down text-white transform transition-transform duration-500 ${
                question6 ? "rotate-180" : ""
              }`}
            ></i>
          </div>
          <div
            className={`transition-[max-height, opacity, margin-top] ease-in-out duration-700 overflow-hidden ${
              question6
                ? "max-h-[500px] opacity-100 mt-[20px]"
                : "max-h-0 opacity-0 mt-0"
            } `}
          >
            <p className="text-[16px] text-neutral-500">
              Deliver quality service, meet trade timelines, and earn positive
              ratings. High ratings increase your visibility and attract more
              trade requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layer5;
