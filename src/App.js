import ExpensesList from "./components/ExpensesList";
import ExpensesSummary from "./components/ExpensesSummary";

function App() {
    const expenseItems = [
        {
            icon: "academic",
            category: "Academic",
            isExpense: false,
            description: "Received scholarships",
            date: "2022-05-22",
            amount: 1000,
        },
        {
            icon: "food",
            category: "Food",
            isExpense: true,
            description: "Zomato order",
            date: "2022-05-22",
            amount: 1000,
        },
        {
            icon: "home",
            category: "Home",
            isExpense: true,
            description: "Windows repairing",
            date: "2022-05-22",
            amount: 1000,
        },
        {
            icon: "entertainment",
            category: "Entertainment",
            isExpense: true,
            description: "KGF 2 @Reliance Mall after evening shopping",
            date: "2022-05-22",
            amount: 1000,
        },
        {
            icon: "shopping",
            category: "Shopping",
            isExpense: true,
            description: "shopping related to office items",
            date: "2022-05-22",
            amount: 1000,
        },
        {
            icon: "gift",
            category: "Gift",
            isExpense: false,
            description: "Gift cards from team members",
            date: "2022-05-22",
            amount: 1000,
        },
        {
            icon: "travel",
            category: "Travel",
            isExpense: true,
            description: "Uber for returning home",
            date: "2022-05-22",
            amount: 1000,
        },
        {
            icon: "other",
            category: "Other",
            isExpense: false,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequatur ducimus, earum adipisci reprehenderit recusandae! Fuga ab, libero dolore aliquid tempora earum aliquam repellendus quam? Amet magni deleniti autem nihil voluptates, ab quam architecto rem esse, numquam consectetur ipsam qui illo assumenda natus dolore maxime odit reprehenderit quidem animi quo ipsa voluptate necessitatibus. Eius dolores ut sapiente quidem culpa atque illo cumque tempore, nesciunt corrupti error odio magnam ea excepturi repellendus quaerat molestias inventore perspiciatis officiis beatae quod quia hic doloribus nemo! Sint quaerat ipsam explicabo dignissimos dicta rem a, exercitationem ex praesentium asperiores, mollitia debitis maxime fuga optio nisi!",
            date: "2022-05-22",
            amount: 1000,
        },
    ];

    const isFilterDate = (someDate, filterDate = new Date()) => {
        return (
            someDate.getDate() === filterDate.getDate() &&
            someDate.getMonth() === filterDate.getMonth() &&
            someDate.getFullYear() === filterDate.getFullYear()
        );
    };

    const expenseItemsFiltered = expenseItems.filter((expenseItem) =>
        isFilterDate(new Date(expenseItem.date))
    );

    return (
        <div className="h-screen bg-slate-50">
            <div className="flex h-full flex-col mx-auto sm:w-3/5">
                <div className="text-center p-5 font-bold text-xl bg-sky-300 drop-shadow-md mb-2">
                    Expense Tracker
                </div>
                <ExpensesSummary expenseItems={expenseItemsFiltered} />
                <ExpensesList expenseItems={expenseItemsFiltered} />
            </div>
        </div>
    );
}

export default App;
