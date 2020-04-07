import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransactions = props => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const textHandler = event => {
    setText(event.target.value);
  };

  const amountHandler = event => {
    setAmount(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100),
      text: text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label> Expense: </label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={textHandler}
          ></input>
        </div>
        <div className="form-control">
          <label> Amount: </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={amountHandler}
          ></input>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTransactions;
