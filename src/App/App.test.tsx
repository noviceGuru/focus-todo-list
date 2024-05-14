import { test, expect, afterEach } from "vitest"
import App from "./App"
import { render, screen, fireEvent, cleanup } from "@testing-library/react"

afterEach(()=>cleanup())

test("The empty screen shows the empty note at the beginning.", () => {
    render(<App />)
    const allDone = screen.getByText(/all done!/i)

    expect(allDone).toBeTruthy()
})

test("onClick on the envelope, the overlay opens, matching the snapshot.", () => {
    render(<App />)
    const envelopIcon = screen.getByRole("img", {
        name: /envelop\-icon/i,
    })

    fireEvent.click(envelopIcon)

    expect(screen.getByTestId('pop-up-dialog')).toBeTruthy()
    expect(screen.getByTestId('pop-up-dialog')).toMatchSnapshot()
})