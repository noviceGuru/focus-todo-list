import useApp from "use-app"

import MainTodo from "components/atoms/main-todo/main-todo"
import Overlay from "components/atoms/overlay/overlay"
import BackTable from "components/molecules/back-table/back-table"

import OpenEnvelope from "assets/open-envelope.svg"
import ClosedEnveloper from "assets/closed-envelope.svg"

function App() {
    const { show, setShow, todos, setTodos } = useApp()

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <MainTodo {...todos[0]} setTodos={setTodos} />
            <Overlay show={show} setShow={setShow}>
                <BackTable todos={todos} setTodos={setTodos} />
            </Overlay>
            <img
                src={show ? OpenEnvelope : ClosedEnveloper}
                onClick={() => setShow(true)}
                className="absolute h-12 bottom-14 md:bottom-36 cursor-pointer hover:brightness-200"
            />
        </div>
    )
}

export default App
