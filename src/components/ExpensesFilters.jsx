import React, { useEffect, useState } from "react";
import CategorySelector from "./ExpensesFilters/CategorySelector";
import DateRangeSelector from "./ExpensesFilters/DatePicker";

const ExpensesFilters = ({ expenseItems, setFilteredExpenses }) => {
    const [selectedDateRange, setSelectedDateRange] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const isInsideFilterDateRange = (someDate) => {
        someDate.setHours(0, 0, 0, 0);
        if (selectedDateRange == null) {
            return false;
        }
        return (
            someDate >= selectedDateRange.startDate &&
            someDate <= selectedDateRange.endDate
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
        const expenseItemsFiltered = expenseItems
            .filter((expenseItem) =>
                isInsideFilterDateRange(new Date(expenseItem.date))
            )
            .filter((expenseItem) => {
                if (selectedCategory === "All") {
                    return true;
                }
                return expenseItem.category === selectedCategory;
            });
        setFilteredExpenses(expenseItemsFiltered);
    };

    useEffect(() => {
        applyFilters();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [selectedDateRange, selectedCategory, expenseItems]);

    return (
        <div className="bg-white p-4 drop-shadow-md flex justify-between flex-wrap">
            <DateRangeSelector setSelectedDateRange={setSelectedDateRange} />
            <CategorySelector setSelectedCategory={setSelectedCategory} />
        </div>
    );
};

export default ExpensesFilters;
