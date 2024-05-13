import useApp from "./use-app"

import MainTodo from "components/atoms/main-todo/main-todo"
import Overlay from "components/atoms/overlay/overlay"
import BackTable from "components/molecules/back-table/back-table"
import EnvalopeIcon from "components/atoms/envelope-icon/envelope-icon"

function App() {
    const { show, setShow, todos, setTodos } = useApp()

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <MainTodo {...todos[0]} setTodos={setTodos} />
            <Overlay show={show} setShow={setShow}>
                <BackTable todos={todos} setTodos={setTodos} />
            </Overlay>
            <EnvalopeIcon onClick={() => setShow(true)} show={show} />
        </div>
    )
}

export default App
