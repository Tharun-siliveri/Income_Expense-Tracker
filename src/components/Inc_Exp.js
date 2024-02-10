import React from 'react'

const Inc_Exp = ({ trans }) => {
    var income = 0
    var expense = 0
    trans
        .filter(tran => tran.amount > 0)
        .map(tran => income += tran.amount)
    trans
        .filter(tran => tran.amount < 0)
        .map(tran => expense += tran.amount)
    expense = expense * -1
    return (
        <div className='inc_exp'>
            <div className='box1'>
                <h3>Income</h3>
                <h3>&#x20B9; {income}</h3>
            </div>
            <div className='box2'>
                <h3>Expense</h3>
                <h3>&#x20B9; {expense}</h3>
            </div>
        </div>
    )
}

export default Inc_Exp