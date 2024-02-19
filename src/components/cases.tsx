import Link from "next/link"

const casesData = [
    {company: "COAD", caseDescription: "Udvikling af Vid&Sans – nyt videnskabeligt medie fra Århus Universitetsforlag.", caseImage: "/cases/coad/coad.svg", tag:["web", "UI/UX", "seo"], link: "/work/cases/coad"},
    {company: "Centox Web App", caseDescription: "Planmates is a mobile app, made to make planning new events and plans with your friends easier", caseImage: "/cases/centox/centox.svg", tag:["web-app", "design", "frontend"], link: "/work/cases/centox"},
    {company: "Planmates App", caseDescription: "Planmates is a mobile app, made to make planning new events and plans with your friends easier", caseImage: "/cases/planmates/planmates.svg", tag:["app", "iOS", "UX"], link: "/work/cases/planmates"},
    {company: "Organic Masterclass", caseDescription: "Udvikling af Vid&Sans – nyt videnskabeligt medie fra Århus Universitetsforlag.", caseImage: "/cases/organicmasterclass/organicmasterclass.svg", tag:["web", "seo", "UI"], link: "/work/cases/organicmasterclass"},
]

export default function Cases() {
    return (
        <section className="py-[100px] pt-[00px]">
            <div className="w-[94%] mx-auto grid grid-cols-3 gap-[25px] max-w-main">
                {casesData.map(v => <CaseCard key={v} Obj={v} />)}
            </div>
        </section>
    )
}

const CaseCard = (props:any) => {
    return (
        <Link href={props.Obj.link} className="h-[600px] rounded-[14px] bg-center bg-cover flex flex-col justify-between" style={{backgroundImage: `linear-gradient(rgba(5, 29, 64, 0), rgba(5, 29, 64, 1)), url(${props.Obj.caseImage})`}}>
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