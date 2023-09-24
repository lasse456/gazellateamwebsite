import { Calendar } from "lucide-react"
import Link from "next/link"

function Event(){
    return (
        <div className="pb-8 rounded-lg bg-white overflow-hidden shadow-sm">
            <img className="w-[300px]" alt="Event 16" src="./events/event-16.jpg"/>
        </div>
    )
}

export default function EventsRow(){
    return (
        <div className="relative mt-10 bg-[#395a3f]/10 flex flex-col gap-8 py-14">
            <div className="flex items-center max-w-screen-sm mx-auto text-center flex-col gap-6">
                <h1 className="text-5xl font-bold text-slate-900">Lorem ipsum dolor sit amet, <span className="text-[#395a3f]">adipiscing elit.</span></h1>
                <h2 className="text-2xl text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.</h2>
            </div>
            <div className="flex flex-row overflow-hidden">
                <div className="flex flex-row gap-10 overflow-hidden">
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Link href="/events">
                    <button className="px-10 py-2 rounded-full hover:bg-slate-900 hover:border-transparent border-2 text-[#395a3f] border-[#395a3f] hover:text-white font-semibold flex items-center gap-2 delay-25 transition-all">
                        Se alle events
                        <Calendar size={24}/>
                    </button>
                </Link>
            </div>
        </div>
    )
}