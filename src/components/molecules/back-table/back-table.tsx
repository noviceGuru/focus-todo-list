import { useState } from "react"
import { Todo } from "App"

import AllDoneNote from "components/atoms/all-done-note/all-done-note"
import TodoRow from "components/atoms/todo-row/todo-row"

import AddSquareIcon from "assets/add-square.svg"

export default function ({
    todos,
    setTodos,
}: {
    todos: { id: string; task: string }[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}) {
    const [editingKey, setEditingKey] = useState<string>("")

    const addTodoInput = () => {
        const newId = new Date().toString()
        setTodos(oldTodos => {
            const newTodos = structuredClone(oldTodos)
            newTodos.push({ id: newId, task: "" })
            return newTodos
        })
        setEditingKey(newId)
    }

    if (todos.length === 0) {
        return (<div className="flex flex-col gap-4 border-2 p-8 rounded-lg bg-slate-400">
            <button className="self-end" onClick={addTodoInput}>
                <img src={AddSquareIcon} className="h-8 hover:brightness-200" />
            </button>
            <AllDoneNote className="flex justify-center items-center h-24  rounded-2xl text-white font-bold bg-slate-400" />
        </div>
        )
    }

    return (
        <div className="flex flex-col gap-4 border-2 p-8 rounded-lg bg-slate-400">
            <button className="self-end" onClick={addTodoInput}>
                <img src={AddSquareIcon} className="h-8 hover:brightness-200" />
            </button>
            <table className="rounded-xl overflow-hidden table-auto">
                <tbody>
                    {todos.map(({ id, task }) => (
                        <TodoRow
                            id={id}
                            task={task}
                            setTodos={setTodos}
                            key={id}
                            setEditingKey={setEditingKey}
                            isEditing={editingKey === id }
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
