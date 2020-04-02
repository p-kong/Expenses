import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncExp from './components/IncExp';

import Transactions from './components/Transactions/Transactions';
import AddTransactions from './components/Transactions/AddTransactions';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>

      <IncExp />
      <Transactions />
      <AddTransactions />
    </div>
  );
}

export default App;
