import React from 'react'
import classes from './newTransaction.module.css'
export const NewTrasaction = () => {
    return (
        <div>
            <h3 className={classes.Heading}>Add New Transaction</h3>
            <form className={classes.FormComponent}>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder="Transaction Details" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Transaction Amount</label>
                    <input type="number" placeholder="Transaction amount" name="" id="" />
                </div>
                <button>Add Transaction</button>
            </form>
        </div>
    )
}
