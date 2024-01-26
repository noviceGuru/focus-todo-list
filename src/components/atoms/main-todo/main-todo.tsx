import { Todo } from "App"
import CircleIcon from "assets/circle.svg"
import CircleCheckIcon from "assets/circle-check.svg"

export default function MainTodo({
    id,
    task,
    setTodos,
}: {
    id?: string
    task?: string
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}) {
    const popTheTodo = () => {
        setTodos(oldTodos => {
            let newTodos = structuredClone(oldTodos)
            newTodos.shift()
            return newTodos
        })
    }

    return id && task ? (
        <div className="flex gap-8">
            <div className="cursor-pointer  active:opacity-60" onClick={popTheTodo}>
                <img src={CircleIcon} className="h-6 absolute" />
                <img
                    src={CircleCheckIcon}
                    className="h-6 absolute opacity-0 hover:opacity-100 transition-opacity active:opacity-40"
                />
            </div>
            <span>{task}</span>
        </div>
    ) : (
        <div>All Done!</div>
    )
}
