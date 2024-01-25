export default function TodoRow({ task }: { task: string }) {
    return (
        <tr className="w-2/3 bg-purple-300 border-y-2">
            <td className="w-80 p-2 bg-lime-300" >{task}</td>
            <td className="p-2">
                <button>X</button>
            </td>
        </tr>
    )
}
