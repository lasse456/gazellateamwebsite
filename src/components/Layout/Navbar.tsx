import { Menu, X } from "lucide-react"
import Link from "next/link"
import React from "react"

export enum PAGES {
    HOME,
    EVENTS,
    ABOUT,
    PARTNER,
    CONTACT
}

const pages = [
    {
        name: "Forside",
        page: PAGES.HOME,
        link: "/"
    },
    {
        name: "Events",
        page: PAGES.EVENTS,
        link: "/events"
    },
    {
        name: "Om os",
        page: PAGES.ABOUT,
        link: "/om-os"
    },
    {
        name: "Bliv partner",
        page: PAGES.PARTNER,
        link: "/partner"
    },
    {
        name: "Kontakt",
        page: PAGES.CONTACT,
        link: "/kontakt"
    }
]


export default function Navbar({ page }: { page: PAGES }) {

    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div className="sticky top-0 right-0 left-0 z-50">
            <div className="h-1.5 bg-[#395a3f]"/>
            <div className="hidden md:block bg-white drop-shadow-md">
                <div className="mx-auto h-full">
                    <div className="flex flex-row pr-4 max-w-screen-lg mx-auto items-center justify-between h-full">
                        <Link href="/" passHref>
                            <div className="flex items-center gap-1">
                                <div className="px-2 py-2">
                                    <img src="/logo.png" alt="Logo" className="h-16"/>
                                </div>
                                <p className="font-semibold text-lg">Unge Iværksættere</p>
                            </div>
                        </Link>
                        <div className="flex flex-wrap lg:items-center gap-1 h-full">
                            {pages.map(({ name, page: linkPage, link }) => (
                                <Link href={link} key={linkPage} passHref className={`lg:flex-none group flex justify-center items-center h-full rounded-sm ${linkPage === page ? "bg-[#395a3f]" : "hover:bg-[#395a3f]"}`}>
                                    <div className={`py-2 px-4 xl:py-3 xl:px-6`}>
                                        <p className={`font-medium text-sm lg:text-base ${linkPage === page ? "text-white" : "text-black group-hover:underline group-hover:text-white"}`}>{name}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex px-8 items-center justify-between md:hidden bg-white drop-shadow-md">
                <Link href="/" passHref>
                    <div className="py-2">
                        <img src="/logo.png" alt="Logo" className="h-16"/>
                    </div>
                </Link>
                <div className="text-black cursor-pointer">
                    {
                        menuOpen ? (
                            <X size={24} onClick={() => setMenuOpen(false)}/>
                        ) : (
                            <Menu size={24} onClick={() => setMenuOpen(true)}/>
                        )
                    }
                </div>
            </div>
            <div className="md:hidden">
                {
                    menuOpen && (
                        <div className="bg-white drop-shadow-md">
                            <div className="flex flex-col gap-1">
                                {pages.map(({ name, page: linkPage, link }) => (
                                    <Link href={link} key={linkPage} passHref className={`flex-1 lg:flex-none group flex justify-center items-center h-full ${linkPage === page ? "bg-[#395a3f]" : "hover:bg-[#395a3f]"}`}>
                                        <div className={`py-2 px-4 xl:py-3 xl:px-6`}>
                                            <p className={`font-medium text-sm lg:text-base ${linkPage === page ? "text-white" : "text-black group-hover:underline group-hover:text-white"}`}>{name}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}