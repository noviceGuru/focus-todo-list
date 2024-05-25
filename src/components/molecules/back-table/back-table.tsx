import { useState, useEffect } from "react"
import { ReactSortable } from "react-sortablejs"
import { Todo } from "use-app"

import AllDoneNote from "components/atoms/all-done-note/all-done-note"
import TodoRow from "components/atoms/todo-row/todo-row"

import AddSquareIcon from "assets/add-square.svg"
import ClearAll from "assets/clear-all.svg"
import CircleCheck from "assets/circle-check.svg"

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

    const deleteAllTasks = () => {
        setTodos([])
    }

    const handleKeyboardEvents = (event: KeyboardEvent) => {
        if (event.key === "+" && editingKey.length === 0) {
            addTodoInput()
        }
    }

    useEffect(() => {
        document.addEventListener("keyup", handleKeyboardEvents)
        return () => document.removeEventListener("keyup", handleKeyboardEvents)
    }, [editingKey])

    const containersClasses = "w-3/4 flex flex-col gap-4 border-2 p-8 rounded-lg bg-slate-400"

    if (todos.length === 0) {
        return (
            <div className={containersClasses}>
                <button className="self-end" onClick={addTodoInput}>
                    <img src={AddSquareIcon} className="h-8 hover:brightness-200" />
                </button>
                <AllDoneNote className="flex justify-center items-center h-24  rounded-2xl text-white font-bold bg-slate-400" />
            </div>
        )
    }

    return (
        <div className={containersClasses}>
            <div className="flex justify-between">
                <button className="self-end" onClick={deleteAllTasks} key="delete-all">
                    <img
                        src={ClearAll}
                        className="h-8 hover:brightness-200 transition-all duration-300"
                        title="Clear All Tasks"
                    />
                </button>
                {!editingKey.length &&
                    <button
                        className="self-start"
                        onClick={addTodoInput}
                        key="add-task"
                    >
                        <img
                            src={!editingKey.length ? AddSquareIcon : CircleCheck}
                            className="h-8 hover:brightness-200 transition-all duration-300"
                            title="Add New Task"
                        />
                    </button>
                }
            </div>
            <div className="rounded-xl overflow-hidden table-auto" data-testid="table">
                <ReactSortable list={todos} setList={setTodos} easing="ease-out" animation={200}>
                    {todos.map(({ id, task }) => (
                        <TodoRow
                            id={id}
                            task={task}
                            setTodos={setTodos}
                            key={id}
                            setEditingKey={setEditingKey}
                            isEditing={editingKey === id}
                        />
                    ))}
                </ReactSortable>
            </div>
        </div>
    )
}
