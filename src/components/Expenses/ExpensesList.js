import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';


const ExpensesList = (props) => {

    let content = <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>

  if(props.items.length === 0){
    return <h2 className="expenses-list__fallback">Found no expenses</h2>
  }
  
   if(props.items.length === 1){
   return (
   <div>
    <ul className="expenses-list">
        {props.items.map((expense) => (
            
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              locationOfExpenditure={expense.locationOfExpenditure}
      
            />
          ))
          }
    </ul>
    {content}
    </div>
    
   )} else {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
            
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              locationOfExpenditure={expense.locationOfExpenditure}
      
            />
          ))
          }
    </ul>
    )
   }
}
export default  ExpensesList;