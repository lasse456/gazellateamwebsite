import { useRouter } from "next/router"

export default function DefaultHero(props:any) {

    const getSection = () => {
        const route = useRouter()
        const path = route.pathname
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
                <div className="w-[94%] mx-auto text-main mb-[100px]">
                    <p className="text-[20px] font-[200] mb-[20px]">/{getSection()}</p>
                    <h1 className="text-[84px] mb-[30px] w-[40%] leading-[85px] tracking-tighter">{props.heading}.</h1>
                </div>
            </div>
        </section>
    )
}