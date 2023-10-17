import speakers, { Speaker } from "@/utils/speakers"
import { Icon } from "@iconify/react"
import { Calendar } from "lucide-react"
import Link from "next/link"

function Event({ speaker }: { speaker: Speaker }){
    return (
        <div className="text-center text-gray-500">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={speaker.image} alt={`Image of ${speaker.name}`}/>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                {speaker.name}
            </h3>
            <p>
                {speaker.description}
            </p>
            <ul className="flex justify-center mt-2 space-x-2">
                {
                    speaker.links?.linkedin && (
                        <Link href={speaker.links.linkedin} target="_blank">
                            <img src="./icons/linkedin.svg" alt="LinkedIn" className="w-[24px] hover:opacity-70 transition-all"/>
                        </Link>
                    )
                }
                {
                    speaker.links?.instagram && (
                        <Link href={speaker.links.instagram} target="_blank">
                            <img src="./icons/instagram.svg" alt="Instagram" className="w-[24px] hover:opacity-70 transition-all"/>
                        </Link>
                    )
                }
                {
                    speaker.links?.website && (
                        <Link href={speaker.links.website} target="_blank">
                            <img src="./icons/globe.png" alt="Website" className="w-[24px] hover:opacity-70 transition-all"/>
                        </Link>
                    )
                }
            </ul>
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
            <div className="mx-auto flex flex-wrap flex-grow flex-row gap-10 items-center justify-around">
                {
                    speakers.map((speaker, index) => (
                        <Event key={index} speaker={speaker}/>
                    ))
                }
            </div>  
            <div className="flex justify-center items-center mt-8">
                <Link href="/events">
                    <button className="px-10 py-2 rounded-full hover:bg-slate-900 hover:border-transparent border-2 text-[#395a3f] border-[#395a3f] hover:text-white font-semibold flex items-center gap-2 delay-25 transition-all">
                        Se alle speakers
                        <Calendar size={24}/>
                    </button>
                </Link>
            </div>
        </div>
    )
}