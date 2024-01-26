import { ReactNode } from "react"

export default function Overlay({
    show,
    setShow,
    children
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    children: ReactNode
}) {
    const closeOnBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            setShow(false)
        }
    }

    return (
        show && (
            <div
                id="background"
                className="fixed z-20 inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center"
                onClick={closeOnBackdropClick}
            >
                {children}
            </div>
        )
    )
}