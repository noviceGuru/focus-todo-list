import { test, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"

import App from "./App"

test("The empty screen shows the empty note at the beginning.", () => {
    render(<App />)
    const allDone = screen.getByText(/all done!/i)

    expect(allDone).toBeTruthy()
})

test("onClick on the envelope, the overlay opens, matching the snapshot.", () => {
    const envelopIcon = screen.getByRole("img", {
        name: /envelop\-icon/i,
    })

    fireEvent.click(envelopIcon)

    expect(screen.getByTestId("pop-up-dialog")).toBeTruthy()
    expect(screen.getByTestId("pop-up-dialog")).toMatchSnapshot()
})

// KEYBOARD EVENTS

test("Pressing + button, a new empty row will add", () => {
    fireEvent.keyUp(document, { key: "+" })

    const newRow = screen.getByTestId("new-row-input")
    expect(newRow).toBeTruthy()
})
