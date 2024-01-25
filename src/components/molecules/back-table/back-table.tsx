import TodoRow from "../../atoms/todo-row/todo-row"

export default function ({todos} : { todos: {id: string, task: string}[]}) {
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
