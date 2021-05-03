import React, { useContext } from 'react'
import classes from './summary.module.css'
import { globalContext } from '../../context/GlobalState'
export const AccountSummary = () => {
    const { transactions } = useContext(globalContext)
    let transactionAmount = transactions.map(transaction => transaction.transactionAmount)
    const filterIncome = transactionAmount.filter(item => {
        return item > 0
    })
    let income = filterIncome.reduce((pre, cur) => {
        return pre + cur
    }, 0)
    const filterExpense = transactionAmount.filter(item => {
        return item < 0
    })
    let expense = filterExpense.reduce((pre, cur) => {
        return pre - cur
    }, 0)
    return <>
        <div className={classes.SummaryWrapper}>
            <div>
                <h3>Income</h3>
                <p className={classes.moneyPlus}>${(income).toFixed(2)}</p>
            </div>
            <div>
                <h3>Expense</h3>
                <p className={classes.moneyMinus}>${(expense).toFixed(2)}</p>
            </div>
        </div>
    </>
}