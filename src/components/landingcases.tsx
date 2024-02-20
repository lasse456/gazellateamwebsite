import Link from "next/link"

const casesData = [
    {company: "Planmates App", caseDescription: "Planmates is a mobile app, made to make planning new events and plans with your friends easier", caseImage: "/cases/planmates/planmates.svg", tag:["app", "iOS", "UX"], link: "/work/cases/planmates"},
    {company: "COAD", caseDescription: "Udvikling af Vid&Sans – nyt videnskabeligt medie fra Århus Universitetsforlag.", caseImage: "/cases/coad/coad.svg", tag:["web", "UI/UX", "seo"], link: "/work/cases/coad"},
    {company: "Centox Web App", caseDescription: "Planmates is a mobile app, made to make planning new events and plans with your friends easier", caseImage: "/cases/centox/centox.svg", tag:["web-app", "design", "frontend"], link: "/work/cases/centox"},
]


export default function LandingCases() {
    return (
        <section className="py-[100px]">
            <div className="w-[94%] mx-auto mb-[30px] max-w-main">
                <div className="mb-[20px]">
                    <h1 className="text-[40px] font-[400] text-main">A selection of our work</h1>
                    <p className="text-gray-600 text-[20px] font-[300]">We take pride in all of our craft</p>
                </div>
                <div className="flex items-center justify-end">
                    <Link className="font-[300]" href={"/work"}>
                    View all cases
                    </Link>
                </div>
            </div>
            <div className="w-[94%] mx-auto grid grid-cols-3 gap-[25px] max-w-main">
                {casesData.map(v => <CaseCard key={v} Obj={v} />)}
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