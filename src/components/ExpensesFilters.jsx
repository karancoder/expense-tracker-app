import React, { useEffect } from "react";
import DateRangeSelector from "./ExpensesFilters/DatePicker";

const ExpensesFilters = ({ expenseItems, setFilteredExpenses }) => {
    const isFilterDate = (someDate, filterDate = new Date()) => {
        return (
            someDate.getDate() === filterDate.getDate() &&
            someDate.getMonth() === filterDate.getMonth() &&
            someDate.getFullYear() === filterDate.getFullYear()
        );
    };

    // const isFilterMonth = (someDate, filterDate = new Date()) => {
    //     return (
    //         someDate.getMonth() === filterDate.getMonth() &&
    //         someDate.getFullYear() === filterDate.getFullYear()
    //     );
    // };

    // const isFilterYear = (someDate, filterDate = new Date()) => {
    //     return someDate.getFullYear() === filterDate.getFullYear();
    // };

    const applyFilters = () => {
        const expenseItemsFiltered = expenseItems.filter((expenseItem) =>
            isFilterDate(new Date(expenseItem.date), new Date("2022-05-23"))
        );
        setFilteredExpenses(expenseItemsFiltered);
    };

    useEffect(() => {
        applyFilters();
    }, []);

    return (
        <>
            <DateRangeSelector />
            <div>ExpensesFilters</div>
        </>
    );
};

export default ExpensesFilters;
