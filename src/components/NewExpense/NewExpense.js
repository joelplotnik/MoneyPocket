import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  // A pointer to this function is passed via the prop onSaveExpenseData
  // This function is executed in ExpenseForm
  const onSaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
