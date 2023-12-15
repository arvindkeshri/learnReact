import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

const dummyExpenseData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: '$94.12',
    date: new Date(2020, 7, 14),
    locationOfExpenditure: 'general store'
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: '$799.49',
    date: new Date(2021, 2, 12),
    locationOfExpenditure: 'walmart'
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: '$294.67',
    date: new Date(2019, 2, 28),
    locationOfExpenditure: 'car showroom'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: '$450',
    date: new Date(2021, 5, 12),
    locationOfExpenditure: 'walmart'
  },
]

const App = () => {

  const [expenses, setExpenses] = useState(dummyExpenseData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
     
      return [...prevExpenses, expense];
      
    });
   
  }

  return (
    <div>
       
        <NewExpense onAddExpense={addExpenseHandler}/>      
        <Expenses items={expenses} />
      
     
    </div>
  );
}

export default App;
