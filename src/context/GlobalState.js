import { createContext, useReducer } from 'react'
import { AppReducer } from './Appreducer'
import *  as AllTypes from './Types'
///Create initial State

const initialState = {
    transactions: []
}

export const globalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const dellTransaction = (id) => {
        dispatch({
            type: AllTypes.DELETE_TRANSACTION,
            payload: id
        })
    }
    const addTransaction = (data) => {
        dispatch({
            type: AllTypes.ADD_TRANSACTION,
            payload: data
        })
    }
    return <globalContext.Provider
        value={{
            transactions: state.transactions,
            dellTransaction,
            addTransaction
        }}
    >
        {children}
    </globalContext.Provider>
}