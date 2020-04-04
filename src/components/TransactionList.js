import React, { useContext } from 'react';
// import AddTransactions from './AddTransactions';
import Transactions from './Transactions';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = props => {
  // const [transactions, setTransactions] = useState([]);

  const { transactions } = useContext(GlobalContext);

  // const addTransaction = newTransaction => {
  //   setTransactions(prevVal => [...prevVal, newTransaction]);
  // };

  return (
    <div className="list">
      <h4> History </h4>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transactions key={transaction.id} transaction={transaction} />
        ))}
      </ul>

      {/* <AddTransactions /> */}
    </div>
  );
};

export default TransactionList;
