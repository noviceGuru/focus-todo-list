import { ReactNode, memo } from "react"

import CloseIcon from "assets/close-circle.svg"

export default memo(function Overlay({
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
                className="fixed z-20 inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center cursor-pointer [&>*]:cursor-default"
                onClick={closeOnBackdropClick}
            >
                <button onClick={() => setShow(false)} className="absolute top-1/4">
                    <img
                        src={CloseIcon}
                        className="h-8 -rotate-180 hover:rotate-180 transition-all ease-out cursor-pointer"
                    />
                </button>
                {children}
            </div>
        )
    )
})
