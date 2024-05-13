import { test, expect } from "vitest"
import App from "./App"
import {render, screen} from '@testing-library/react'

test('if vitest works', ()=> {
    render(<App/>)
    const allDone = screen.getByText(/all done!/i)

    expect(allDone).toBeTruthy()
})