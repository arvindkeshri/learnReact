import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

    const [enteredTitle, SetEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    


    const titleChangeHandler = (event) => {
        SetEnteredTitle(event.target.value);
        

    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        

    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)


    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)   
        }

        props.onSaveExpenseData(expenseData);
        SetEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };


    return (
       
         <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label className='new-expense__control'>Title:</label>
                    <input className='new-expense__control' type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label className='new-expense__control'>Amount:</label>
                    <input className='new-expense__control' type="number"  value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label className='new-expense__control'>Date:</label>
                    <input className='new-expense__control' type="date" value={enteredDate} min="2022-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button'onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expenses</button>
            </div>
        </form> 
    
    )
}

export default ExpenseForm;