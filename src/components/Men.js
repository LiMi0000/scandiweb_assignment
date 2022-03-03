import React, { useState } from 'react';

const Men = () => {
  const [currency, setCurrency] = useState('$');

  const currencyChange = (e) => {
    const currency = e.target.value;
    setCurrency(currency);
  };

  return (
    <div>
      <select className="currency" onClick={currencyChange}>
        <option value="$">$ USD</option>
        <option value="€">€ EUR</option>
        <option value="¥">¥ YJP</option>
      </select>

      <h1 className="products_title">MEN</h1>
    </div>
  );
};

export default Men;
