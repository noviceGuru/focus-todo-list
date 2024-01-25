import BackTable from "./components/molecules/back-table/back-table"

function App() {
    const todos = [
        {
            id: "1",
            task: "task one",
        },
        {
            id: "2",
            task: "task two",
        },
        {
            id: "3",
            task: "task three",
        },
    ]
    return (
        <div className="flex justify-center items-center h-full">
            <BackTable todos={todos} />
        </div>
    )
}

export default App
