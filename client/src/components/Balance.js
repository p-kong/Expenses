import React, { useContext } from 'react';
import { numberWithCommas } from '../utils/format';

import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  console.log('balance', transactions);

  let amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);
  let total = amounts.reduce((accum, curr) => (accum += curr), 0).toFixed(2);
  console.log(total);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <div className="container">
      <h4> Your Balance</h4>
      <h1>${numberWithCommas(total)}</h1>
    </div>
  );
};

export default Balance;
