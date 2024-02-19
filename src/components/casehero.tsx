export default function CaseHero(props:any) {
    return (
        <section className="py-[100px]">
            <div className="w-[94%] mx-auto text-main mb-[100px] max-w-main">
                <h1 className="text-[84px] font-[400] mb-[30px] w-[60%] leading-[85px] tracking-tighter">{props.heading}.</h1>
            </div>
            <div className="w-[94%] mx-auto">
                <img className="w-full h-[600px] rounded-[14px]" src={props.caseImage}></img>
            </div>
        </section>
    )
}