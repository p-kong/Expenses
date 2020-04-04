import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncExp from './components/IncExp';
import { GlobalProvider } from './context/GlobalState';
import TransactionList from './components/TransactionList';
import AddTransactions from './components/AddTransactions';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncExp />
        <TransactionList />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
