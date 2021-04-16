import React, { useContext, useState}  from 'react';
import {TransactionContext} from './TransactionContext';

function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc]= useState("");
    let [newAmount, setAmount]= useState(0);

    const handleAddition =(event)=>{
      event.preventDefault();
      if(Number(newAmount)==0)
      {
        alert('Enter Valid Value')
      }
      addTransaction({
        amount: Number(newAmount),
        desc: newDesc
      })
    }
    const getIncome=()=>{
      let income=0;
      for(var i=0;i<transactions.length;i++)
      {
        if (transactions[i].amount>0)
           income+=transactions[i].amount
      }
      return income;
    }
    const getExpense=()=>{
      let expense=0;
      for(var i=0;i<transactions.length;i++)
      {
        if (transactions[i].amount<0)
          expense+=transactions[i].amount
      }
      return expense;
    }
    return (
      <div className="Container">
        <h1 className="text-center">Expense Tracker App</h1>
         <h3>Your Balance <br /> RS {getIncome() + getExpense()}</h3>
         <div className="expense-container">
            <h3> INCOME <br /> RS {getIncome()} </h3>
             <h3> EXPENSE <br /> RS {getExpense()} </h3>
          </div>
        <h3>History</h3>
        <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>
                    )
                })}
             </ul>
      <h3>Add new Transaction</h3>
      <hr></hr> 
     <form className="transaction-form" onSubmit={handleAddition}>
        <label>
        Enter Description <br />
            <input type="text" placeholder="Enter Description" onChange={(ev)=>setDesc(ev.target.value)} required></input>
        </label>
        <label>
        Enter Amount <br />
            <input type="number" placeholder="0" onChange={(ev)=>setAmount(ev.target.value)} required></input>
        </label> <br />
        <input type="submit" value="Add Transaction"/>
     </form>
    </div>
  );
}

export default Child;
