import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

const ExpensesList = () => {
    const expenseItems = [
        {
            icon: "academic",
            category: "Academic",
            isExpense: false,
            description: "Received scholarships",
        },
        {
            icon: "food",
            category: "Food",
            isExpense: true,
            description: "Zomato order",
        },
        {
            icon: "home",
            category: "Home",
            isExpense: true,
            description: "Windows repairing",
        },
        {
            icon: "entertainment",
            category: "Entertainment",
            isExpense: true,
            description: "KGF 2 @Reliance Mall after evening shopping",
        },
        {
            icon: "shopping",
            category: "Shopping",
            isExpense: true,
            description: "shopping related to office items",
        },
        {
            icon: "gift",
            category: "Gift",
            isExpense: false,
            description: "Gift cards from team members",
        },
        {
            icon: "travel",
            category: "Travel",
            isExpense: true,
            description: "Uber for returning home",
        },
        {
            icon: "other",
            category: "Other",
            isExpense: false,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequatur ducimus, earum adipisci reprehenderit recusandae! Fuga ab, libero dolore aliquid tempora earum aliquam repellendus quam? Amet magni deleniti autem nihil voluptates, ab quam architecto rem esse, numquam consectetur ipsam qui illo assumenda natus dolore maxime odit reprehenderit quidem animi quo ipsa voluptate necessitatibus. Eius dolores ut sapiente quidem culpa atque illo cumque tempore, nesciunt corrupti error odio magnam ea excepturi repellendus quaerat molestias inventore perspiciatis officiis beatae quod quia hic doloribus nemo! Sint quaerat ipsam explicabo dignissimos dicta rem a, exercitationem ex praesentium asperiores, mollitia debitis maxime fuga optio nisi!",
        },
    ];
    return (
        <div className="h-full overflow-y-scroll">
            {expenseItems.map((expenseItem) => (
                <ExpenseItem expenseItem={expenseItem} />
            ))}
        </div>
    );
};

export default ExpensesList;
