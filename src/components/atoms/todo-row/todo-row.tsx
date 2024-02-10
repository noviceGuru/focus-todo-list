import UseTodoRow from "./use-todo-row"
import isMobile from "is-mobile"

import { Todo } from "use-app"
import ClearOne from 'assets/clear-one.svg'

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
    const { saveTaskOnBlur, onKeyboardAction, deleteRow, setInputValue, inputValue } = UseTodoRow(
        task,
        setTodos,
        setEditingKey,
        id
    )

    return (
        <div className=" border-y-2 h-12">
            {isEditing ? (
                <input
                    className="px-2 py-3 w-full h-full focus:outline-none"
                    onBlur={saveTaskOnBlur}
                    onKeyUp={onKeyboardAction}
                    autoFocus
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                />
            ) : (
                <>
                    <div
                        className="flex h-full items-center justify-between p-1 bg-lime-300 cursor-pointer hover:bg-slate-300 line-clamp-1 transition-colors"
                        onClick={() => {
                            setEditingKey(id)
                        }}
                    >
                        <span title={task} className="truncate pl-1">
                            {task}
                        </span>
                        <button
                            onClick={deleteRow}
                            className={`bg-pink-300 p-1 rounded-full ${isMobile() ? "" : "opacity-0" } hover:opacity-100`}
                        >
                            <img src={ClearOne} className="w-8" title="Delete Task"/>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
