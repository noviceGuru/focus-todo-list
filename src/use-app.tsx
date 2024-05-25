import { useState, useEffect } from "react"

export type Todo = {
    id: string
    task: string
}
const focusTodos = "focus-todos"

export default function useApp() {
    const [show, setShow] = useState<boolean>(false)

    const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem(focusTodos) || "[]"))

    useEffect(() => {
        localStorage.setItem(focusTodos, JSON.stringify(todos))
    }, [todos])

    useEffect(() => {
        if (!localStorage.getItem(focusTodos)) {
            localStorage.setItem(focusTodos, "[]")
        } else {
            setTodos(JSON.parse(localStorage.getItem(focusTodos) || "[]"))
        }
    }, [])

    return { show, setShow, todos, setTodos }
}