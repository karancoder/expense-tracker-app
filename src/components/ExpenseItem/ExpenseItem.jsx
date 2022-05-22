import React from "react";
import CATEGORY_ICON_NAME_MAPPING from "../../utilities/CatergoryIconMappings";
import ExpenseItemDescription from "./ExpenseItemDescription";

const ExpenseItem = ({ expenseItem }) => {
    const getIcon = (iconName) => {
        return CATEGORY_ICON_NAME_MAPPING[iconName].icon;
    };
    const getIconColor = (iconName) => {
        return CATEGORY_ICON_NAME_MAPPING[iconName].iconColor;
    };
    const getItemRightBorder = (isExpense) => {
        return isExpense ? "border-red-500" : "border-emerald-500";
    };

    return (
        <div
            // onClick={handleOnClick}
            className={
                "flex justify-between items-start my-2 drop-shadow-md p-6 bg-white rounded-sm border-r-8 " +
                getItemRightBorder(expenseItem.isExpense)
            }
        >
            <div className="flex">
                <div
                    className={
                        "flex justify-between items-start px-2 drop-shadow-md " +
                        getIconColor(expenseItem.icon)
                    }
                >
                    {getIcon(expenseItem.icon)}
                </div>
                <div className="px-4 flex flex-col mr-10">
                    <div className="text-md font-semibold">
                        {expenseItem.category}
                    </div>

                    <ExpenseItemDescription
                        description={expenseItem.description}
                    />
                </div>
            </div>
            <div className="flex-none text-lg font-semibold text-emerald-500 p-1">
                Rs. 100
            </div>
        </div>
    );
};

export default ExpenseItem;
