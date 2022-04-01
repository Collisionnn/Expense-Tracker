import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formStatus, setFormStatus] = useState("closed");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    setFormStatus("closed");
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const onClickForm = () => {
    if (formStatus === "closed") {
      setFormStatus("open");
    } else {
      setFormStatus("closed");
    }
  };

  if (formStatus === "closed") {
    return (
      <div>
        <button onClick={onClickForm}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onClickForm}>
          Cancel
        </button>
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
