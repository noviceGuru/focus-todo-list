import { useState } from "react"

import MainTodo from "components/atoms/main-todo/main-todo"
import Overlay from "components/atoms/overlay/overlay"
import BackTable from "components/molecules/back-table/back-table"

import OpenEnvelope from "assets/open-envelope.svg"
import ClosedEnveloper from "assets/closed-envelope.svg"

export type Todo = {
    id: string
    task: string
}

const initialTodos : Todo[] = [
    {
        id: "1",
        task: "task one",
    },
    {
        id: "2",
        task: "task two",
    },
    {
        id: "3",
        task: "task three",
    },
]


function App() {
    const [show, setShow] = useState<boolean>(false)

    const [todos, setTodos] = useState<Todo[]>(initialTodos)

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <MainTodo {...todos[0]} setTodos={setTodos} />
            <Overlay show={show} setShow={setShow}>
                <BackTable todos={todos} setTodos={setTodos}/>
            </Overlay>
            <img
                src={show ? OpenEnvelope : ClosedEnveloper}
                onClick={() => setShow(true)}
                className="absolute h-12 bottom-14 md:bottom-36 cursor-pointer"
            />
        </div>
    )
}

export default App
