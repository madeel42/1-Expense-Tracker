import React, { useContext } from 'react'
import classes from './transaction.module.css'
import {globalContext} from '../../context/GlobalState'
export const TransactionLists = ({ transaction }) => {
    const sign = transaction.transactionAmount > 0 ? '+' : '-'
    const {dellTransaction} = useContext(globalContext)
    return <>
        <li>
            {transaction.descrition}
        </li>
        <li>
            {sign}${Math.abs(transaction.transactionAmount)}
        </li>
        <div className={classes.dellButton} onClick={()=>dellTransaction(transaction.id)}> <button>X</button></div>
    </>
}
