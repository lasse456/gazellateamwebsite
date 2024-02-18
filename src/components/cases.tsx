const casesData = [
    {company: "COAD", caseDescription: "A simple landing page", caseImage: "/cases/coad/coad.webp", tag:"Web"},
    {company: "COAD", caseDescription: "A simple landing page", caseImage: "/cases/coad/coad.webp", tag:"Web"},
    {company: "COAD", caseDescription: "A simple landing page", caseImage: "/cases/coad/coad.webp", tag:"App"},
]

export default function Cases() {
    return (
        <section className="py-[100px] pt-[00px]">
            <div className="w-[94%] mx-auto grid grid-cols-3 gap-[25px]">
                {casesData.map(v => <CaseCard key={v} Obj={v} />)}
            </div>
        </section>
    )
}

const CaseCard = (props:any) => {
    return (
        <div className="h-[600px] rounded-[14px] bg-center bg-cover flex flex-col justify-between" style={{backgroundImage: `url(${props.Obj.caseImage})`}}>

            <div className="text-main inline-block">
                <div className="inline-block bg-white m-[30px] px-[8px] py-[6px] rounded-full">
                    <p className="inline-block font-[200]">{props.Obj.tag}</p>
                </div>
                
            </div>
            <div className="text-white p-[50px]">
                <h1 className="text-[26px]">{props.Obj.company}</h1>
                <p>{props.Obj.caseDescription}</p>
            </div>

        </div>
    )
}