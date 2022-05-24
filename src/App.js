import ExpensesView from "./components/ExpensesView";

function App() {
    return (
        <div className="h-screen bg-slate-50">
            <div className="flex h-full flex-col mx-auto sm:w-3/5">
                <div className="text-center p-5 font-bold text-xl bg-sky-300 drop-shadow-md mb-2">
                    Expense Tracker
                </div>
                <ExpensesView />
            </div>
        </div>
    );
}

export default App;
