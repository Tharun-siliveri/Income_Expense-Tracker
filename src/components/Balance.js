import React from 'react'

const Balance = ({ trans }) => {
    var balance = 0;
    trans.map(tran => balance += tran.amount)
    // console.log(balance)
    return (
        <div className='balance'>
            <h2>Your Balance</h2>
            <h2>&#x20B9; {balance}</h2>
        </div>
    )
}

export default Balance