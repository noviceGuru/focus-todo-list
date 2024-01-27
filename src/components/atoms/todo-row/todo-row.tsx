import UseTodoRow from "./use-todo-row"

import { Todo } from "App"

export default function TodoRow({
    id,
    task,
    setTodos,
    setEditingKey,
    isEditing,
}: {
    id: string
    task: string
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    setEditingKey: React.Dispatch<React.SetStateAction<string>>
    isEditing: boolean
}) {
    const { saveTaskOnBlur, saveOnEnter, deleteRow, setInputValue, inputValue } = UseTodoRow(
        task,
        setTodos,
        setEditingKey,
        id
    )

    return (
        <tr className="w-2/3 bg-purple-300 border-y-2">
            {isEditing ? (
                <td>
                    <input
                        className="w-full p-2"
                        onBlur={saveTaskOnBlur}
                        onKeyUp={saveOnEnter}
                        autoFocus
                        onChange={e => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                </td>
            ) : (
                <>
                    <td
                        className="w-80 flex justify-between p-2 bg-lime-300 cursor-pointer hover:bg-slate-300"
                        onClick={() => {
                            setEditingKey(id)
                        }}
                    >
                        <span title={task} className="flex items-center truncate">
                            {task}
                        </span>
                        <button
                            onClick={deleteRow}
                            className="bg-pink-300 p-1 rounded-full opacity-0 hover:opacity-100"
                        >
                            X
                        </button>
                    </td>
                </>
            )}
        </tr>
    )
}
