import "./ExpenseItem.css";
function ExpenseItem() {
  let expenseDate = new Date(2021, 5, 28);
  const expenseTitle = "Car Insaurance";
  const expenseAmount = 294.5;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
