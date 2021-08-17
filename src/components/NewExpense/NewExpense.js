import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formActive, setFormActive] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const cancelHandler = () => {
    setFormActive(false);
  };
  const addExpenseHandler = () => {
    setFormActive(true);
  };
  return (
    <div className="new-expense">
      {!formActive && (
        <button onClick={addExpenseHandler}>Add new Expenses</button>
      )}
      {formActive && (
        <ExpenseForm
          onCancel={cancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
