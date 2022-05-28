import React from "react";

const CategorySelector = ({ setSelectedCategory }) => {
    const categories = [
        "All",
        "Academic",
        "Food",
        "Home",
        "Entertainment",
        "Shopping",
        "Gift",
        "Travel",
        "Other",
    ];
    const handleOnChange = (event) => {
        setSelectedCategory(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div className="flex justify-center items-center flex-none">
            <span className="text-md font-semibold p-2">Pick Category </span>
            <select
                onChange={handleOnChange}
                className="p-2 mr-2 border-2 border-slate-400 rounded-sm w-max"
            >
                {categories.map((category) => (
                    <option value={category} key={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;
