import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  console.log('balance', transactions);

  let amounts = transactions.map(transaction => transaction.amount);
  console.log(amounts);
  let total = amounts.reduce((accum, curr) => (accum += curr), 0).toFixed(2);
  console.log(total);

  return (
    <div className="container">
      <h4> Your Balance</h4>
      <p>${total}</p>
    </div>
  );
};

export default Balance;
