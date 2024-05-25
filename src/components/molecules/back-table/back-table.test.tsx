import { cleanup, render, screen } from "@testing-library/react"
import { test, expect, afterEach } from "vitest"

import BackTable from "components/molecules/back-table/back-table"

const startingTodos = [
    {
        id: '1',
        task: 'Task number one'
    },
    {
        id: '2',
        task: 'Task number two'
    },
]

afterEach(() => cleanup())

test("The table renders with no toods, it shows the All Done note", () => {
    render(<BackTable todos={[]} setTodos={() => {}} />)
    const allDoneNote = screen.getByText(/all done!/i)

    expect(allDoneNote).toBeTruthy()
})

test('The table shows the todos that it\'s been given, and matches the snapshot', ()=>{
    render(<BackTable todos={startingTodos} setTodos={() => {}} />)

    const row1 = screen.getByText(/task number one/i)
    const row2 = screen.getByText(/task number two/i)
    const table = screen.getByTestId('table')

    expect(row1).toBeTruthy()
    expect(row2).toBeTruthy()
    expect(table).toMatchSnapshot()
})
