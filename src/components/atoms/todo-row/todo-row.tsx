import { Todo } from "App"

export default function TodoRow({
    id,
    task,
    setTodos,
}: {
    id: string
    task: string
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}) {
    const deleteRow = () => {
        setTodos(oldTodos => oldTodos.filter(el=> el.id !== id) )
    }

    return (
        <tr className="w-2/3 bg-purple-300 border-y-2">
            <td className="w-80 p-2 bg-lime-300">{task}</td>
            <td className="p-2">
                <button onClick={deleteRow}>X</button>
            </td>
        </tr>
    )
}
