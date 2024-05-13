import OpenEnvelope from "assets/open-envelope.svg"
import ClosedEnveloper from "assets/closed-envelope.svg"

export default function EnvalopeIcon({ onClick, show }: { onClick: () => void; show: boolean }) {
    return (
        <img
            src={show ? OpenEnvelope : ClosedEnveloper}
            onClick={onClick}
            className="absolute h-12 bottom-14 md:bottom-36 cursor-pointer hover:brightness-200"
            alt="envelop-icon"
        />
    )
}
