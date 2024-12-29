import React from 'react'
import { createContext,useState } from 'react'
export const AppContext = createContext()

const ContextProvider = ({children}) => {
    const [budget , setBudget] = useState(1000)
    const [expense , setExpense] = useState(1000)
    const [table , setTable] = useState([])
    function addExpense(expense){
        setTable((prevExpenses)=>[...prevExpenses,expense])
    }
  return (
    <AppContext.Provider value={{budget,expense,table,setBudget,setExpense,addExpense}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider

