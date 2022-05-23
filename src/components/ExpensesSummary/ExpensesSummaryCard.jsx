import React from "react";

const ExpensesSummaryCard = ({ title, amount, amountColor }) => {
    return (
        <div className="flex-1 bg-white py-8 px-10 drop-shadow-md bg-white rounded-sm">
            <div className="text-sm">{title}</div>
            <div className={"text-2xl font-semibold " + amountColor}>
                Rs. {amount}
            </div>
        </div>
    );
};

export default ExpensesSummaryCard;
