import React from 'react'
import './App.css';
import { Header } from './component/Header/Header'
import { Balance } from './component/Balance/Balance'
import { AccountSummary } from './component/Summary/AccountSummary'
import { Transaction } from './component/History/Transaction'
import { NewTrasaction } from './component/AddTransaction/NewTrasaction'
import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <Transaction />
        <NewTrasaction />
      
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
