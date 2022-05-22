import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

const ExpensesList = ({ expenseItems }) => {
    return (
        <div className="h-full mt-2 overflow-y-scroll">
            {expenseItems.map((expenseItem) => (
                <ExpenseItem
                    key={expenseItem.description}
                    expenseItem={expenseItem}
                />
            ))}
        </div>
    );
};

export default ExpensesList;
