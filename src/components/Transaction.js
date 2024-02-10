import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Transaction = ({ tran, deleteTransaction }) => {
    const handleClick = function () {
        deleteTransaction(tran.id)
    }
    const amt_cls = tran.amount < 0 ? "negative" : "positive";
    return (
        <div className='transaction'>
            <div className={`transaction_item ${amt_cls}`}>
                <p>{tran.text}</p>
                <p>&#x20B9; {tran.amount}</p>
            </div>
            <div className='delete_icon'>
                <FontAwesomeIcon icon={faTrash} onClick={handleClick} style={{ cursor: 'pointer', color: "red" }} />
            </div>

        </div>
    )
}

export default Transaction