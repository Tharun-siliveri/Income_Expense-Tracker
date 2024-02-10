import React from 'react'
import { useState } from 'react'
const NewTrans = ({ addTransaction }) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            text,
            amount: parseFloat(amount)
        })
        setText("");
        setAmount("");
    }
    return (
        <div className="newTrans">
            <h1>Add New Transaction</h1>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='form_ele'>
                        <label htmlFor="text">Text:</label>
                        <input type="text" id="text" onChange={(e) => setText(e.target.value)} value={text} placeholder='Enter Text...' />
                    </div>
                    <div className='form_ele'>
                        <label htmlFor="amount">Amount:</label>
                        <input type="number" id="amount" onChange={(e) => setAmount(e.target.value)} value={amount} placeholder='Enter Amount...' />
                    </div>
                    <button>Add Transaction</button>
                </form>

            </div>
        </div>
    )
}

export default NewTrans