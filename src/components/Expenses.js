import { useState } from "react";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "./Card";
import ExpensesList from "./ExpensesList"
function Expenses(props) {
  let expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState(2021);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() == filteredYear
  );
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
}
export default Expenses;
