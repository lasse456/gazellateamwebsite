import { Podcast } from "lucide-react";
import Link from "next/link";

export default function PodcastsSection(){
    return (
        <>
            <div className="relative">
                <div className={"max-w-screen-lg mx-auto flex gap-8 items-center py-10"}>
                    <div className="hidden md:flex flex-1">
                        <img src="./images/podcasts.png" alt="Unge Iværksættere Podcast"/>
                    </div>
                    <div className="flex-1 flex flex-col gap-4 p-8 md:p-0">
                        <h1 className="text-4xl font-bold text-[#395a3f]">Podcasts</h1>
                        <h3 className="text-slate-700 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.</h3>
                        <div className="mt-4 flex">
                            <Link href="/podcasts">
                                <button className="px-4 py-2 rounded-lg hover:bg-slate-900 bg-transparent hover:border-transparent border-2 text-[#395a3f] border-[#395a3f] hover:text-white font-semibold flex items-center gap-2 delay-25 transition-all">
                                    Lyt til tidligere events
                                    <Podcast/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}