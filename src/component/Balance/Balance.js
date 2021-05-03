import React, { useContext } from 'react'
import classes from './balance.module.css'
import {globalContext} from '../../context/GlobalState'
export const Balance = () => {
    const {transactions} = useContext(globalContext)
    const transactionAmount = transactions.map(item=> item.transactionAmount)
    let balanceAmount = transactionAmount.reduce((pre,curr)=>{
        return pre + curr
    },0)
    return <>
        <h3 className={classes.currentB} > Current Balance </h3>
        <h1 className={classes.balance} > ${balanceAmount.toFixed(2)} </h1>

    </>
}