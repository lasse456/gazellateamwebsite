import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const ITEMS: {
    title: string;
    links: {
        title: string;
        href?: string;
    }[]
}[] = [
    {
        title: 'Virksomhed',
        links: [
            {
                title: 'Unge Iværksættere',
            },
            {
                title: 'CVR: 42846406',
                href: 'https://datacvr.virk.dk/enhed/virksomhed/42846406?fritekst=unge%20iv%C3%A6rks%C3%A6ttere'
            }
        ]
    },
]
export default function Footer(){
    return (
        <div>
            <footer className="p-4 bg-gray-100 sm:p-8">
                <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex md:gap-10 md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link href="/" className="flex items-center">
                                <img src="/logo.png" className="mr-3 h-8" alt="FlowBite Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap">Unge Iværksættere</span>
                            </Link>
                            <p className="mt-6 text-sm text-gray-500">For ofte bliver unges idéer ikke til virkelighed, derfor samler vi unge iværksættere.</p>
                        </div>
                        <div className="flex w-full justify-end">
                            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                                {
                                    ITEMS.map((item, index) => (
                                        <div key={index}>
                                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{item.title}</h2>
                                            <ul className="text-gray-600">
                                                {
                                                    item.links.map((link, index) => (
                                                        <li key={index} className={`mb-4 ${link.href ? "hover:underline" : ""}`}>
                                                            {
                                                                link.href ? (
                                                                    <Link href={link.href}>{link.title}</Link>
                                                                )
                                                                : (
                                                                    <span>{link.title}</span>
                                                                )
                                                            }
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center ">© {new Date().getFullYear()} <a href="https://ungeivarksaettere.dk" className="hover:underline">Unge Iværksættere</a>.
                        </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <Link href={'/kontakt'} className="text-gray-500 hover:text-gray-900">
                                <Mail size={20}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}