import { Todo } from "App"
import { useState } from "react"

export default function UseTodoRow(
    task: string,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    setEditingKey: React.Dispatch<React.SetStateAction<string>>,
    id: string
) {
    const [inputValue, setInputValue] = useState<string>(task)

    const deleteRow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setTodos(oldTodos => oldTodos.filter(el => el.id !== id))
    }

    const handleSaveTask = () => {
        if (inputValue.length > 0) {
            setTodos(oldTodos => {
                let newTodos = structuredClone(oldTodos).map(el =>
                    el.id === id ? { id: id, task: inputValue } : { id: el.id, task: el.task }
                )
                return newTodos
            })
        } else {
            setTodos(oldTodos => {
                let newTodos = structuredClone(oldTodos)
                newTodos.pop()
                return newTodos
            })
        }

        setEditingKey("")
    }

    const onKeyboardAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSaveTask()
        }

        if (e.key === "Escape") {
            setTodos(oldTodos => {
                if(oldTodos[oldTodos.length-1].task.length === 0){
                    let newTodos = structuredClone(oldTodos)
                    newTodos.pop()
                    return newTodos
                } else {
                    return oldTodos
                }
            })

            setEditingKey("")
        }
    }

    const saveTaskOnBlur = (e: React.FocusEvent<Element>) => {
        e.preventDefault()

        handleSaveTask()
    }

    return { saveTaskOnBlur, onKeyboardAction, deleteRow, setInputValue, inputValue }
}
