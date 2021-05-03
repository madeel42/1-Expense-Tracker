import * as AllTypes from './Types'
export const AppReducer = (state, action) => {
    switch (action.type) {
        case AllTypes.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case AllTypes.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state
    }
}