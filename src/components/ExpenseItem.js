import "./ExpenseItem.css";
function ExpenseItem(props) {
  //let expenseDate = new Date(2021, 5, 28);
  //const expenseTitle = "Car Insaurance";
  //const expenseAmount = 294.5;
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
