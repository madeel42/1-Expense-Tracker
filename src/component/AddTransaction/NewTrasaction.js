import React, { useContext, useState } from 'react'
import classes from './newTransaction.module.css'
import { globalContext } from '../../context/GlobalState'
import { v4 as uuidv4 } from 'uuid'
export const NewTrasaction = () => {
    const [Data, setData] = useState({
        descrition: '',
        transactionAmount: 0,
    })
    const { addTransaction } = useContext(globalContext)
    const handleChange = (e) => {
        setData({
            ...Data,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        let newTransaction = {
            id: uuidv4(),
            transactionAmount: +Data.transactionAmount,
            descrition: Data.descrition
        }
        addTransaction(newTransaction)
    }
    return (
        <div>
            <h3 className={classes.Heading}>Add New Transaction</h3>
            <form className={classes.FormComponent} onSubmit={onSubmit}>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text" onChange={handleChange} placeholder="Transaction Details" name="descrition" />
                </div>
                <div>
                    <label htmlFor="">Transaction Amount</label>
                    <input type="number" onChange={handleChange} placeholder="Transaction amount" name="transactionAmount" />
                </div>
                <button type='submit'> Add Transaction</button>
            </form>
        </div>
    )
}
