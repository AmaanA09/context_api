import { useContext, useEffect, useState } from 'react'
import './App.css'
import { AppContext } from './ContextProvider'


function App(){
  const {budget , expense , setBudget,setExpense,table,addExpense} = useContext(AppContext)
  const [budgetInput, setBudgetInput] = useState(false)
  const [expenseToggle, setExpenseToggle] = useState(false)
  const [budgetInputValue , setBudgetInputValue] = useState()
  const [expenseName , setExpenseName] = useState()
  const [expenseAmount , setExpenseAmount] = useState()

   function handleChange(){
    setBudget(budgetInputValue)
  }
  function handleExpenseBudget(){
    const expense = {
      expenseName : expenseName,
      expenseAmount : Number(expenseAmount)
    }
    addExpense(expense)
  }

  useEffect(()=>{
    const totalExpense = table.reduce(
      (acc,cur)=> acc + (cur.expenseAmount),0
    )
    setExpense(totalExpense)
  },[table])



  return (
    <>
    <div>
    <h1>Budget :- {budget}</h1>
    <button type="button" onClick={()=>setBudgetInput(!budgetInput)}>Add Budget</button>
    {budgetInput && <div>
    <input type='number' min='0' onChange={(e)=>(setBudgetInputValue(e.target.value))} />
    <button onClick={handleChange}>Submit Budget</button>
    </div>}
    </div>

    <div>
      <h1>Expnse :-{expense}</h1>
      <button onClick={()=>setExpenseToggle(!expenseToggle)}>Open Expense Modal</button>
      {expenseToggle && <div>
        <input type="text" onChange={(e)=>(setExpenseName(e.target.value))}/>
        <input type="number" onChange={(e)=>(setExpenseAmount(e.target.value))}/>
        <button onClick={handleExpenseBudget}>Add Expense</button>
        </div>}
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {table.map((expense,index)=>(
            <tr key={index}>
              <td>{expense.expenseName}</td>
              <td>{expense.expenseAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
