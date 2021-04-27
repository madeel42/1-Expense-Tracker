import React from 'react'
import classes from './transaction.module.css'

export const Transaction = () => {
    return (
        <div>
            <h3 className={classes.THB}>
                Transaction History
            </h3>
            <ul className={classes.ulWrapper}>
                <li>
                    We are sellig shirt
                </li>
                <li>
                    +$4000
                </li>
            </ul>
        </div>
    )
}
