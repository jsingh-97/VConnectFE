import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Login from "./components/PreDiscovery/LogIn";
import SignUp from "./components/PreDiscovery/SignUp";
function App() {
  const DUMMY_EXPENSES = [
    {
      id: 1,
      title: "TV bill",
      amount: 239,
      date: new Date(2020, 7, 14),
    },
    {
      id: 2,
      title: "Car Insurance",
      amount: 8500,
      date: new Date(2020, 2, 28),
    },
    {
      id: 3,
      title: "Toilet Paper",
      amount: 100,
      date: new Date(2020, 4, 1),
    },
    {
      id: 4,
      title: "New Phone",
      amount: 40000,
      date: new Date(2021, 9, 11),
    },
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      {/* <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses> */}
      <Login></Login>
    </div>
  );
}

export default App;
