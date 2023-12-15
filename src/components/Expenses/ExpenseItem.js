import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
// import Card from '../UI/card';

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("clicked!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title </button>
    </Card>
  );
}

export default ExpenseItem;

// const [title, setTitle] = useState(props.title);
// const [amount, setAmount] = useState(props.amount);
// const clickHandler = () => {
//   console.log("clicked!!!!!!");
// };
// return (
//   <li>
//     <div className="expense-item">
//       <ExpenseDate date={props.date} />
//       <ExpenseDetails
//         title={title}
//         amount={amount}
//         locationOfExpenditure={props.locationOfExpenditure}
//       />
//       <button onClick={clickHandler}>change title</button>
//     </div>
//   </li>
//);
//}
