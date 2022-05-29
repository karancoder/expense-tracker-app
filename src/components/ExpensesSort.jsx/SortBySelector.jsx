import React from "react";

const SortBySelector = ({ setSortBy }) => {
    const sortBy = ["date", "amount", "category", "isExpense"];
    const handleOnChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <div className="flex justify-center items-center flex-none">
            <span className="text-md font-semibold p-2">Sort by </span>
            <select
                onChange={handleOnChange}
                className="p-2 mr-2 border-2 border-slate-400 rounded-sm w-max"
            >
                {sortBy.map((category) => (
                    <option value={category} key={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SortBySelector;
