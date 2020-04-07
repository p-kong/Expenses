import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncExp from './components/IncExp';
import { GlobalProvider } from './context/GlobalState';
import TransactionList from './components/TransactionList';
import AddTransactions from './components/AddTransactions';
import { AuthContext } from './context/Auth';
// import AuthContextProvider from './context/Auth';
import Auth from './components/Auth';

const App = (props) => {
  const authContext = useContext(AuthContext);

  let content = <Auth />;

  if (authContext.isAuth) {
    content = (
      <div>
        <GlobalProvider>
          <Header />
          <div className="container">
            <Balance />
            <IncExp />
            <TransactionList />
            <AddTransactions />
          </div>
        </GlobalProvider>
      </div>
    );
  } else {
    content = <Auth />;
  }

  return content;
};

export default App;

// return (
//   <GlobalProvider>
//     <AuthContextProvider />
//     <Auth />
//     <Header />
//     <div className="container">
//       <Balance />
//       <IncExp />
//       <TransactionList />
//       <AddTransactions />
//     </div>
//   </GlobalProvider>
// );
