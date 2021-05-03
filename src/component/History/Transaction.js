import React, { useContext } from 'react'
import classes from './transaction.module.css'
import { globalContext } from '../../context/GlobalState'
import { TransactionLists } from './TransactionLists'
export const Transaction = () => {
    const { transactions } = useContext(globalContext)

    return (
        <div>
            <h3 className={classes.THB}>
                Transaction History
            </h3>
            {transactions.length !== 0 ? transactions.map(transaction => {
                return <ul className={classes.ulWrapper} key={transaction.id}>
                    <TransactionLists transaction={transaction} />
                </ul>
            }) : <h5>Currently, there is no transaction available</h5>}
        </div>
    )
}
