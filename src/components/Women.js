import React, { useState } from 'react';

const Women = () => {
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

      <h1 className="products_title">WOMEN</h1>
    </>
  );
};

export default Women;
