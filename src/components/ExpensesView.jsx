import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary/ExpensesSummary";
import expenseItems from "./../data/ExpenseItems";
import React, { useState } from "react";
import ExpensesFilters from "./ExpensesFilters";

const ExpensesView = () => {
    const [filteredExpenses, setFilteredExpenses] = useState(expenseItems);

    return (
        <>
            <ExpensesFilters
                expenseItems={expenseItems}
                setFilteredExpenses={setFilteredExpenses}
            />
            <ExpensesSummary expenseItems={filteredExpenses} />
            <ExpensesList expenseItems={filteredExpenses} />
        </>
    );
};

export default ExpensesView;
