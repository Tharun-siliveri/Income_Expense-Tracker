import React from 'react'
import Transaction from './Transaction'
const History = ({ trans, deleteTransaction }) => {
    return (
        <div className='history'>
            <h2>History</h2>
            <div className='transactions'>
                {
                    trans.map((tran) => (
                        <Transaction key={tran.id} tran={tran} deleteTransaction={deleteTransaction} />
                    ))
                }
            </div>
        </div>
    )
}

export default History