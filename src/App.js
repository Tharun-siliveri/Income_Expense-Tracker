import './App.css'
import React from 'react';
import Balance from './components/Balance';
import Inc_Exp from './components/Inc_Exp';
import History from './components/History';
import NewTrans from './components/NewTrans';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {

  const [trans, setTrans] = useState([])

  const addTransaction = function (obj) {
    setTrans([
      ...trans,
      {
        id: uuidv4(),
        text: obj.text,
        amount: obj.amount
      }
    ])
    console.log("added successfully")
  }
  const deleteTransaction = function (id) {
    setTrans(trans.filter(tran => tran.id !== id))
  }

  return (
    <div className="App">
      <h1>Expense</h1>
      <div className="container">
        <Balance trans={trans} />
        <Inc_Exp trans={trans} />
        <History trans={trans} deleteTransaction={(id) => deleteTransaction(id)} />
        <NewTrans addTransaction={(obj) => addTransaction(obj)} />
      </div>
    </div>
  );
}

export default App;
