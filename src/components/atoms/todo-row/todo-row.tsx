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
        <div className="w-80 bg-purple-300 border-y-2">
            {isEditing ? (
                <input
                    className="p-2 w-full focus:outline-none"
                    onBlur={saveTaskOnBlur}
                    onKeyUp={saveOnEnter}
                    autoFocus
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                />
            ) : (
                <>
                    <div
                        className="flex justify-between p-2 bg-lime-300 cursor-pointer hover:bg-slate-300 line-clamp-1"
                        onClick={() => {
                            setEditingKey(id)
                        }}
                    >
                        <span title={task} className="truncate">
                            {task}
                        </span>
                        <button
                            onClick={deleteRow}
                            className="bg-pink-300 p-1 rounded-full opacity-0 hover:opacity-100"
                        >
                            X
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
