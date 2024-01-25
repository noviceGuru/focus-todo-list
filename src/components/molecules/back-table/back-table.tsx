import TodoRow from "../../atoms/todo-row/todo-row"

export default function () {
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
        <table className="rounded-xl overflow-hidden">
            <tbody>
                {todos.map(({ id, task }) => (
                    <TodoRow key={id} task={task} />
                ))}
            </tbody>
        </table>
    )
}
