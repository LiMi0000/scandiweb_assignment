import React, { useState } from 'react';

const Kids = () => {
  const [currency, setCurrency] = useState('$');

  const currencyChange = (e) => {
    const currency = e.target.value;
    setCurrency(currency);
  };

  return (
    <>
      <select className="currency" onClick={currencyChange}>
        <option value="$">$ USD</option>
        <option value="€">€ EUR</option>
        <option value="¥">¥ YJP</option>
      </select>

      <h1 className="products_title">KIDS</h1>
    </>
  );
};

export default Kids;
