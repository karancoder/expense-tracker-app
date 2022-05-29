import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary/ExpensesSummary";
import expenseItems from "./../data/ExpenseItems";
import React, { useState } from "react";
import ExpensesFilters from "./ExpensesFilters";
import ExpensesSorter from "./ExpensesSorter";

const ExpensesView = () => {
    const [filteredExpenses, setFilteredExpenses] = useState(expenseItems);
    const [filteredSortedExpenses, setFilteredSortedExpenses] =
        useState(filteredExpenses);
    return (
        <>
            <ExpensesFilters
                expenseItems={expenseItems}
                setFilteredExpenses={setFilteredExpenses}
            />
            <ExpensesSorter
                expenseItems={filteredExpenses}
                setFilteredSortedExpenses={setFilteredSortedExpenses}
            />
            <ExpensesSummary expenseItems={filteredSortedExpenses} />
            <ExpensesList expenseItems={filteredSortedExpenses} />
        </>
    );
};

export default ExpensesView;
