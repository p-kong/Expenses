import React, { useContext } from 'react';
import { numberWithCommas } from '../utils/format';
import { GlobalContext } from '../context/GlobalState';

const Income = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  let income = amounts
    .filter((amount) => amount > 0)
    .reduce((accum, next) => (accum += next), 0)
    .toFixed(2);

  let expense = amounts
    .filter((amount) => amount < 0)
    .reduce((accum, next) => (accum += next), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          $ {numberWithCommas(income)}
        </p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p id="money-minus" className="money minus">
          $ {numberWithCommas(expense)}
        </p>
      </div>
    </div>
  );
};

export default Income;
