import Link from "next/link"
import { useRouter } from "next/router"

const casesData = [
    {company: "COAD", caseDescription: "Udvikling af Vid&Sans – nyt videnskabeligt medie fra Århus Universitetsforlag.", caseImage: "/cases/coad/coad.svg", tag:["web", "UI/UX", "seo"], link: "/work/cases/coad", route:"coad"},
    {company: "Centox Web App", caseDescription: "Planmates is a mobile app, made to make planning new events and plans with your friends easier", caseImage: "/cases/centox/centox.svg", tag:["web-app", "design", "frontend"], link: "/work/cases/centox", route:"centox"},
    {company: "Planmates App", caseDescription: "Planmates is a mobile app, made to make planning new events and plans with your friends easier", caseImage: "/cases/planmates/planmates.svg", tag:["app", "iOS", "UX"], link: "/work/cases/planmates", route:"planmates"},
    {company: "Organic Masterclass", caseDescription: "Udvikling af Vid&Sans – nyt videnskabeligt medie fra Århus Universitetsforlag.", caseImage: "/cases/organicmasterclass/organicmasterclass.svg", tag:["web", "seo", "UI"], link: "/work/cases/organicmasterclass", route:"organicmasterclass"},
]

export default function MoreCases() {
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
                path.split("/").reverse()[0]
            )
        }
    }

    const getRelevantCases = (props:any) => {
        const unfilteredData = props;
        let filteredData = [];

        for (let i = 0; i < unfilteredData.length; i++) {
            if (unfilteredData[i].route === getSection()) {
                continue
            }
            else {
                filteredData.push(unfilteredData[i])
            }
        }
        console.log(getSection())
        return filteredData.slice(0, 3)
    }
    return (
        <section className="py-[100px]">
            <div className="w-[94%] mx-auto mb-[30px] max-w-main">
                <div className="mb-[20px]">
                    <h1 className="text-[40px] font-[400] text-main">Discover more cases</h1>
                    <p className="text-gray-600 text-[20px] font-[300]">We take pride in all of our craft</p>
                </div>
                <div className="flex items-center justify-end">
                    <Link className="font-[300]" href={"/work"}>
                    View all cases
                    </Link>
                </div>
            </div>
            <div className="w-[94%] mx-auto grid grid-cols-3 gap-[25px] max-w-main">
                {getRelevantCases(casesData).map((v:any) => <CaseCard key={v} Obj={v} />)}
            </div>
        </section>
    )
}

const CaseCard = (props:any) => {
    return (
        <Link href={props.Obj.link} className="h-[600px] w-full rounded-[14px] bg-center bg-cover flex flex-col justify-between" style={{backgroundImage: `linear-gradient(rgba(5, 29, 64, 0), rgba(5, 29, 64, 1)), url(${props.Obj.caseImage})`}}>
            <p className="inline-block font-[200] text-white p-[30px]">{props.Obj.tag.map((v:any) => <span key={v}>#{v}{" "}</span>)}</p>

            <div className="text-white p-[30px]">
                <div>
                    <h1 className="font-[400] text-[28px] leading-[38px] mb-[14px]">{props.Obj.company}</h1>
                    <p className="font-[300] leading-[26px]">{props.Obj.caseDescription}</p>
                </div>
            </div>

        </Link>
    )
}