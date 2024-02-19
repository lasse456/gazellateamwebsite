import { useRouter } from "next/router"


export default function DefaultHero(props:any) {
    const route = useRouter()
    const path = route.pathname

    const getSection = () => {
        if (path.split("/").length > 1) {
            return (
                path.split("/").reverse()[0]
            )
        }
        else {
            return (
                path.split("/").reverse()[1]
            )
        }
    }

    return (
        <section className="py-[100px] pb-[30px]">
            <div>
                <div className="w-[94%] mx-auto text-main mb-[50px] max-w-main">
                    <p className="text-[20px] font-[200] mb-[20px]">/{getSection()}</p>
                    <h1 className="text-[84px] mb-[30px] w-[40%] leading-[85px] tracking-tighter">{props.heading}{" "}<span className="bg-gradient-to-l from-main via-blue-900 via-blue-800 via-blue-900 to-main text-transparent bg-clip-text">{props.gradientHeading}.</span></h1>
                </div>
                <div className="w-[80%] mx-auto max-w-main flex items-center justify-end mb-[100px]">
                    <div className="w-[50%]">
                        <p className="text-[20px] font-[300] text-gray-600">{props.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}