import React, { createContext,useReducer }  from 'react';
import TransactionReducer from './TransactionReducer';

const initialTransactions =[
    {amount: 500, desc:"Cash"},
    {amount: -40, desc:"Coldrink"},
    {amount: 100, desc:"Deposit"},
    {amount:-200,desc:"withdrawl"}
]
export const TransactionContext = createContext(initialTransactions)

export const TransactionProvider = ({children})=>{
    let [state, dispatch]=useReducer(TransactionReducer,initialTransactions)

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload:{
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
        }
        return(
            <TransactionContext.Provider value={{
                transactions: state,
                addTransaction
            }}>
                {children}
            </TransactionContext.Provider>
        )
    }

export default TransactionContext; 