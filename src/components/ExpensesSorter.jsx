import React, { useEffect, useState } from "react";
import SortBySelector from "./ExpensesSort.jsx/SortBySelector";
import SortOrderSelector from "./ExpensesSort.jsx/SortOrderSelector";

const ExpensesSorter = ({ expenseItems, setFilteredSortedExpenses }) => {
    const [sortBy, setSortBy] = useState("date");
    const [sortOrder, setSortOrder] = useState("asc");

    const applySorting = () => {
        const expenseItemsFiltered = [...expenseItems];
        expenseItemsFiltered.sort((a, b) => {
            const returnArray = sortOrder === "asc" ? [-1, 1] : [1, -1];
            if (sortBy === "date") {
                return new Date(a.date) < new Date(b.date)
                    ? returnArray[0]
                    : returnArray[1];
            }
            if (sortBy === "amount") {
                return a.amount < b.amount ? returnArray[0] : returnArray[1];
            }
            if (sortBy === "isExpense") {
                return a.isExpense === true ? returnArray[0] : returnArray[1];
            }
            return a.category < b.category ? returnArray[0] : returnArray[1];
        });
        setFilteredSortedExpenses(expenseItemsFiltered);
    };

    useEffect(() => {
        applySorting();
    }, []);

    useEffect(() => {
        applySorting();
    }, [sortBy, sortOrder, expenseItems]);

    return (
        <div className="mt-1 bg-white p-4 drop-shadow-md flex justify-between flex-wrap">
            <SortBySelector setSortBy={setSortBy} />
            <SortOrderSelector setSortOrder={setSortOrder} />
        </div>
    );
};

export default ExpensesSorter;
