import CircleIcon from "assets/circle.svg"
import CircleCheckIcon from "assets/circle-check.svg"

export default function MainTodo({ task }: { task: string }) {
    return (
        <div className="flex gap-8">
            <div className="cursor-pointer">
                <img src={CircleIcon} className="h-6 absolute" />
                <img src={CircleCheckIcon} className="h-6 absolute opacity-0 hover:opacity-100 transition-opacity active:opacity-40" />
            </div>
            <span>{task}</span>
        </div>
    )
}
