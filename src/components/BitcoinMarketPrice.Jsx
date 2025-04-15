import { useEffect, useState } from "react";

const BitcoinMarketPrice = () => {
  

  return (
    <div>
      <h2>Bitcoin Price: {price ? `$${price}` : "Loading..."}</h2>
    </div>
  );
};

export default BitcoinMarketPrice;
