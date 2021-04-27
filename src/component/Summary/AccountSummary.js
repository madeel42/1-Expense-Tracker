import React from 'react'
import classes from './summary.module.css'

export const AccountSummary = () => {
    return <>
        <div className={classes.SummaryWrapper}>
            <div>
                <h3>Income</h3>
                <p className={classes.moneyPlus}>$0.00</p>
            </div>
            <div>
                <h3>Expense</h3>
                <p className={classes.moneyMinus}>$0.00</p>
            </div>
        </div>
    </>
}