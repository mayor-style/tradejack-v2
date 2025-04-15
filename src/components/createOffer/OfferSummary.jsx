import React from "react";
import { GoDotFill } from "react-icons/go";

const OfferSummary = ({
  service,
  wallet,
  account,
  giftCard,
  creditOrDebitCard,
  preferredCurrency,
  miniPurchase,
  maxPurchase,
  offerRates,
  handleToOfferPageTwo,
  handleReturnToOfferPageOne,
  offerPageTwo,
}) => {
  return (
    <div className="w-[370px] bg-tradeAsh flex flex-col gap-[40px] rounded-[8px] p-[10px]">
      <div className="flex flex-col gap-[15px]">
        <p className="text-white text-[28px] font-[900]">Offer Summary</p>

        <p className="text-[14px] text-white leading-[25px]">
          Set up your offer by selecting a service type, currency, and a rate
          that attracts your target audience. Define clear offer terms for a
          smooth trade.
        </p>
      </div>
      <div className=" flex flex-col gap-[15px]">
        <div>
          {service && (
            <div className="flex gap-[4px] ">
              <div className="flex pt-[3.5px]">
                <GoDotFill className="text-tradeGreen" />
              </div>
              <div>
                <p className="text-[14.5px] text-white leading-[25px]">
                  {" "}
                  You have chosen{" "}
                  <small className="text-[14.5px] font-[800]">
                    {" "}
                    {service}
                  </small>{" "}
                  as your offer service.
                </p>
              </div>
            </div>
          )}
        </div>
        <div>
          <div>
            {wallet && (
              <div className="flex gap-[4px] ">
                <div className="flex pt-[3.5px]">
                  <GoDotFill className="text-tradeGreen" />
                </div>
                <div>
                  <p className="text-[14.5px] text-white leading-[25px]">
                    {" "}
                    And you are purchasing{" "}
                    <small className="text-[14.5px] font-[800]">
                      {" "}
                      {wallet}
                    </small>{" "}
                    assets
                  </p>
                </div>
              </div>
            )}
          </div>
          <div>
            {account && (
              <div className="flex gap-[4px] ">
                <div className="flex pt-[3.5px]">
                  <GoDotFill className="text-tradeGreen" />
                </div>
                <div>
                  <p className="text-[14.5px] text-white leading-[25px]">
                    {" "}
                    And you are purchasing{" "}
                    <small className="text-[14.5px] font-[800]">
                      {" "}
                      {account}
                    </small>{" "}
                    assets
                  </p>
                </div>
              </div>
            )}
          </div>
          <div>
            {giftCard && (
              <div className="flex gap-[4px] ">
                <div className="flex pt-[3.5px]">
                  <GoDotFill className="text-tradeGreen" />
                </div>
                <div>
                  <p className="text-[14.5px] text-white leading-[25px] ">
                    {" "}
                    And you are purchasing{" "}
                    <small className="text-[14.5px] font-[800]">
                      {" "}
                      {giftCard}
                    </small>{" "}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div>
            {creditOrDebitCard && (
              <div className="flex gap-[4px] ">
                <div className="flex pt-[3.5px]">
                  <GoDotFill className="text-tradeGreen" />
                </div>
                <div>
                  <p className="text-[14.5px] text-white leading-[25px] ">
                    {" "}
                    And you are purchasing{" "}
                    <small className="text-[14.5px] font-[800]">
                      {" "}
                      {creditOrDebitCard}
                    </small>{" "}
                    assets
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div>
            {(wallet || account || creditOrDebitCard || giftCard) &&
            preferredCurrency ? (
              <div className="flex gap-[4px]">
                <div className="flex pt-[3.5px]">
                  <GoDotFill className="text-tradeGreen" />
                </div>
                <div>
                  <p className="text-[14.5px] text-white leading-[25px]">
                    Your offer is available to users using{" "}
                    <small className="text-[14.5px] font-[800]">
                      {`${preferredCurrency?.name} (${preferredCurrency?.code}) `}
                    </small>{" "}
                    as their currency.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div>
          {(wallet || account || creditOrDebitCard || giftCard) &&
            miniPurchase &&
            maxPurchase && (
              <div className="flex gap-[4px] ">
                <div className="flex pt-[3.5px]">
                  <GoDotFill className="text-tradeGreen" />
                </div>
                <div>
                  <p className="text-[14.5px] text-white leading-[25px] ">
                    {" "}
                    Your purchase limits for this asset range from{" "}
                    <small className="text-[14.5px] font-[800]">
                      {" "}
                      {Number(miniPurchase).toLocaleString()}{" "}
                      {preferredCurrency?.code}
                    </small>{" "}
                    (minimum) to{" "}
                    <small className="text-[14.5px] font-[800]">
                      {" "}
                      {Number(maxPurchase).toLocaleString()}{" "}
                      {preferredCurrency?.code}
                    </small>{" "}
                    (maximum).
                  </p>
                </div>
              </div>
            )}
        </div>
        <div>
          {offerRates?.length > 1 && (
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[4px]">
                <div className="flex pt-[3.5px]">
                  <GoDotFill className="text-tradeGreen" />
                </div>
                <p className="text-[14.5px] text-white leading-[25px]">
                  Here are your listed rate :
                </p>
              </div>
              <div className="py-[20px] px-[10px] flex gap-[25px] flex-col bg-black rounded-[5px]">
                <div className="flex">
                  <div className="w-[100px] bg-tradeGreen flex justify-center">
                    <p className=" text- text-[15px] font-[600] ">From</p>
                  </div>
                  <div className="w-[100px] bg-tradePurple flex justify-center">
                    <p className=" text- text-[15px] font-[600] ">To</p>
                  </div>
                  <div className="flex-1 bg-tradeOrange flex justify-center">
                    <p className=" text- text-[15px] font-[600]">Rate</p>
                  </div>
                </div>

                <div className="flex flex-col gap-[25px]">
                  {offerRates.slice(1).map((rates, index) => (
                    <div className="flex">
                      <div className="w-[100px] flex justify-center">
                        <p className=" text-white text-[14px] font-[500]">
                          {`${rates?.from.toLocaleString()} ${
                            preferredCurrency?.code
                          }`}
                        </p>
                      </div>
                      <div className="w-[100px] flex justify-center">
                        <p className=" text-white text-[14px] font-[500]">
                          {`${rates?.to.toLocaleString()} ${
                            preferredCurrency?.code
                          }`}
                        </p>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <p className=" text-white text-[14px] font-[500]">
                          {`${rates?.rate.toLocaleString()} NGN / 1 ${
                            preferredCurrency?.code
                          }`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="sticky top-[110px] flex gap-[30px]">
        <div className="flex-1">
          {offerPageTwo ? (
            <button
              onClick={handleReturnToOfferPageOne}
              className=" bg-white w-full h-[45px] text-[15px] rounded-[4px] font-[600]"
            >
              Previous Step
            </button>
          ) : (
            <button className=" bg-neutral-200 text-neutral-400 cursor-default w-full h-[45px] text-[15px] rounded-[4px] font-[600]">
              Previous Step
            </button>
          )}
        </div>
        <div className="flex-1">
          <button
            onClick={handleToOfferPageTwo}
            className="bg-tradeGreen w-full h-[45px] text-[15px] rounded-[4px] font-[600]"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferSummary;
