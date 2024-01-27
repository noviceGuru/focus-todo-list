import { useState } from
 "react"
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
    const [inputValue, setInputValue] = useState<string>(task)

    const deleteRow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setTodos(oldTodos => oldTodos.filter(el => el.id !== id))
    }

    const saveTask = (e: React.FocusEvent<Element>) => {
        e.preventDefault()
        setTodos(oldTodos => {
            let newTodos = structuredClone(oldTodos).map(el => {
                if (el.id === id) {
                    return ({
                        id: id,
                        task: inputValue
                    })
                }else{
                    return ({
                        id: el.id,
                        task: el.task
                    })
                }
            })
            return newTodos
        })
        setEditingKey("")
    }

    return (
        <tr className="w-2/3 bg-purple-300 border-y-2">
            {isEditing ? (
                <td>
                    <input
                        className="w-full p-2"
                        onBlur={saveTask}
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
