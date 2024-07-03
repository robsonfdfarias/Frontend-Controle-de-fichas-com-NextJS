import Link from "next/link"
import {IconHome} from "@tabler/icons-react"

function ItemMenu(){
    return (
        <Link href={"/"} className="flex gap-3 px-3 hover:bg-zinc-300">
            <IconHome />
            <span>Home</span>
        </Link>
    )
}
export default function Menu(){
    return (
        <aside className="w-72 bg-zinc-800 h-screen">
            <nav className="flex flex-col gap-2 py-2">
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
            </nav>
        </aside>
    )
}