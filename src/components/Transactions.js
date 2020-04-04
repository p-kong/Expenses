import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transactions = props => {
  const { deleteTransaction } = useContext(GlobalContext);

  console.log('props', props);
  const sign = props.transaction.amount > 0 ? '-' : '+';
  return sign === '+' ? (
    <div>
      <li className="minus">
        {props.transaction.text}{' '}
        <span>{'-' + Math.abs(props.transaction.amount)}</span>
        <button
          onClick={() => deleteTransaction(props.transaction.id)}
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
        <span>{'+' + Math.abs(props.transaction.amount)}</span>
        <button
          onClick={() => deleteTransaction(props.transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transactions;
