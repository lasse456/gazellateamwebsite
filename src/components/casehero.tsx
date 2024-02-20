import { useRouter } from "next/router"

export default function CaseHero(props:any) {
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
        <section className="py-[100px]">
            <div className="w-[94%] mx-auto text-main mb-[100px] max-w-main">
                <p className="text-[20px] font-[200] mb-[20px]">/{getSection()}</p>
                <h1 className="text-[84px] font-[400] mb-[30px] w-[60%] leading-[85px] tracking-tighter">{props.heading}.</h1>
            </div>
            <div className="w-[100%] mx-auto">
                <img className="w-[94%] mx-auto rounded-[14px] h-[600px] " src={props.caseImage}></img>
            </div>
        </section>
    )
}