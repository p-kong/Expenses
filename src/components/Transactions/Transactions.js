import React, { useState } from 'react';
import AddTransactions from './AddTransactions';

const Transactions = props => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = newTransaction => {
    setTransactions(prevVal => [...prevVal, newTransaction]);
    console.log(transactions);
  };

  return (
    <div className="list">
      <h4> History </h4>

      {transactions.map(transaction => {
        return (
          <ul id="list" className="list">
            <li className="minus">
              {transaction.description} <span>{transaction.amount}</span>
              <button className="delete-btn">x</button>
            </li>
          </ul>
        );
      })}
      <AddTransactions addTransaction={addTransaction} />
      {/* <ul id="list" className="list">
        <li className="plus">
          Transaction 1 <span>+400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
      <ul id="list" className="list">
        <li className="minus">
          Transaction 2 <span>-400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>

      <ul id="list" className="list">
        <li className="minus">
          Transaction 3 <span>-400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul> */}
    </div>
  );
};

export default Transactions;
