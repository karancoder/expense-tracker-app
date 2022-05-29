import React from "react";

const SortOrderSelector = ({ setSortOrder }) => {
    const sortOrder = ["asc", "dsc"];
    const handleOnChange = (event) => {
        setSortOrder(event.target.value);
    };

    return (
        <div className="flex justify-center items-center flex-none">
            <span className="text-md font-semibold p-2">Order </span>
            <select
                onChange={handleOnChange}
                className="p-2 mr-2 border-2 border-slate-400 rounded-sm w-max"
            >
                {sortOrder.map((category) => (
                    <option value={category} key={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SortOrderSelector;
