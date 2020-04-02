import React, { useState } from 'react';

const AddTransactions = props => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const descriptionHandler = event => {
    setDescription(event.target.value);
  };

  const amountHandler = event => {
    setAmount(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log('clicked');
    props.addTransaction({ description: description, amount: amount });
    console.log(description);
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
            value={description}
            onChange={descriptionHandler}
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
