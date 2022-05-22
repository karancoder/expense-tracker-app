import React from "react";

const ExpensesSummary = ({ expenseItems }) => {
    const totalExpenses = expenseItems
        .filter((expenseItem) => expenseItem.isExpense)
        .reduce((acc, expenseItem) => acc + expenseItem.amount, 0);

    const totalIncome = expenseItems
        .filter((expenseItem) => !expenseItem.isExpense)
        .reduce((acc, expenseItem) => acc + expenseItem.amount, 0);

    return (
        <div className="flex myy-2">
            <div className="flex-1 bg-white mr-1 py-8 pl-10 drop-shadow-md p-6 bg-white rounded-sm">
                <div className="text-sm">Expense</div>
                <div className="text-2xl font-semibold text-emerald-500">
                    Rs. {totalExpenses}
                </div>
            </div>
            <div className="flex-1 bg-white ml-1 py-8 pl-10 drop-shadow-md p-6 bg-white rounded-sm">
                <div className="text-sm">Income</div>
                <div className="text-2xl font-semibold text-red-500">
                    Rs. {totalIncome}
                </div>
            </div>
        </div>
    );
};

export default ExpensesSummary;
