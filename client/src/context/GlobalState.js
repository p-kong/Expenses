import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//Initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

//Create context

export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransactions() {
    try {
      const res = await axios.get('/transactions');
      dispatch({ type: 'GET_TRANSACTION', payload: res.data.data });
    } catch (error) {
      dispatch({ type: 'TRANSACTION_ERROR', payload: 'Error' });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/transactions/${id}`);
      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    } catch (error) {
      dispatch({ type: 'TRANSACTION_ERROR', payload: 'Error' });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/transactions', transaction, config);
      console.log('res', res);
      dispatch({ type: 'ADD_TRANSACTION', payload: res.data.newTransaction });
    } catch (error) {
      dispatch({ type: 'TRANSACTION_ERROR', payload: 'Error' });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        deleteTransaction,
        addTransaction,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
