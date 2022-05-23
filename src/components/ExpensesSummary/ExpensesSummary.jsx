import React from "react";
import ExpensesSummaryCard from "./ExpensesSummaryCard";

const ExpensesSummary = ({ expenseItems }) => {
    const totalExpenses = expenseItems
        .filter((expenseItem) => expenseItem.isExpense)
        .reduce((acc, expenseItem) => acc + expenseItem.amount, 0);

    const totalIncome = expenseItems
        .filter((expenseItem) => !expenseItem.isExpense)
        .reduce((acc, expenseItem) => acc + expenseItem.amount, 0);

    const overallTransaction = totalIncome - totalExpenses;

    return (
        <div className="flex flex-wrap my-1 gap-1">
            <ExpensesSummaryCard
                title="Summary"
                amount={overallTransaction}
                amountColor={
                    overallTransaction >= 0
                        ? "text-emerald-500"
                        : "text-red-500"
                }
            />
            <ExpensesSummaryCard
                title="Expense"
                amount={totalExpenses}
                amountColor="text-red-500"
            />
            <ExpensesSummaryCard
                title="Income"
                amount={totalIncome}
                amountColor="text-emerald-500"
            />
        </div>
    );
};

export default ExpensesSummary;
