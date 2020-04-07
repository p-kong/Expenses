import React, { useContext, useEffect } from 'react';

import Transactions from './Transactions';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="list">
      <h4> History </h4>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transactions key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
