// import React from 'react';

const BaseTicker = ({data}) => {  
  const { T: stockSymbol, c: closingPrice, h: daysHigh, l: daysLow } = data

  return data && (
    <div className="border-2 border-gray p-6 rounded-md">
      <div>Stock: {stockSymbol}</div>
      <div>Previous close: {closingPrice}</div>
      <div>Previous Day&apos;s low: {daysLow}</div>
      <div>Previous Day&apos;s high: {daysHigh}</div>
    </div>
  );
};

export default BaseTicker;