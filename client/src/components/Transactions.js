import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const Transactions = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = props.transaction.amount > 0 ? '-' : '+';
  return sign === '+' ? (
    <div>
      <li className="minus">
        {props.transaction.text}{' '}
        <span>
          {'-' + numberWithCommas(Math.abs(props.transaction.amount))}
        </span>
        <button
          onClick={() => deleteTransaction(props.transaction._id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  ) : (
    <div>
      <li className="plus">
        {props.transaction.text}{' '}
        <span>
          {'+' + numberWithCommas(Math.abs(props.transaction.amount))}
        </span>
        <button
          onClick={() => deleteTransaction(props.transaction._id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transactions;
