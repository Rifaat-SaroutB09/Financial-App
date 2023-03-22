import React, {useState, useContext} from 'react'
import { GlobalContext } from './GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3 className='add-transaction'>Add New Transaction</h3>
      <form className="transaction-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label className='expense-category' htmlFor="text">Expense Category</label>
          <input className="expense-input" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter expense category" />
        </div>
        <div className="form-control">
          <label className='amount-label' htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input className="expense-input" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
