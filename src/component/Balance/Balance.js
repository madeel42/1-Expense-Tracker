import React from 'react'
import classes from './balance.module.css'
export const Balance = () => {
    return <>
        <h3 className={classes.currentB} > Current Balance </h3>
        <h1 className={classes.balance} > $0 .00 </h1>

    </>
}