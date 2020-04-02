import React from 'react';

const Transactions = props => {
  return (
    <div className="list">
      <h4> History </h4>
      <ul id="list" className="list">
        <li className="minus">
          Cash <span>-400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
      <ul id="list" className="list">
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
      </ul>
    </div>
  );
};

export default Transactions;
