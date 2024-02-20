import { MessageSquare } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Chat() {
    const route = useRouter()
    const path = route.pathname

    return (
        path === "/contact" ? null:<Link href={"/contact"} className="fixed z-[999] bottom-6 right-6 p-[20px] rounded-full bg-main cursor-pointer text-white hover:scale-110 transition-all">
        <MessageSquare />
    </Link>
    )
}