export default function CaseProps(props:any) {
    return (
        <section className="py-[50px]">
            <div className="w-[94%] mx-auto max-w-[1100px] grid grid-cols-2">
                <div className="flex flex-col gap-[30px]">
                    <div>
                        <h1 className="font-[400] text-[24px] text-main mb-[6px]">Customer</h1>
                        <p className="font-[300] text-[20px] text-gray-600">{props.customer}</p>
                    </div>
                    <div>
                        <h1 className="font-[400] text-[24px] text-main mb-[6px]">Service</h1>
                        <p className="font-[300] text-[20px] text-gray-600">{props.service}</p>
                    </div>
                    <div>
                        <h1 className="font-[400] text-[24px] text-main mb-[6px]">Developers</h1>
                        {props.developers.map((v:any) => <p key={v} className="font-[300] text-[20px] text-gray-600">{v}</p>)}
                    </div>
                </div>

                <div>
                <h1 className="font-[400] text-[24px] mb-[20px] text-main">How we helped</h1>
                    <p className="font-[300] text-[20px] text-gray-600">Vid&Sans blev grundlagt af Aarhus Universitetsforlag i 2021 som nyt onlinemedie.<br></br><br></br>Vi har hjulpet med at udvikle et stærkt og genkendeligt website, som har alle features, som et onlinemedie kræver. Herunder abonnementer, betalingsmur etc. Vi har stået for udvikling, integrationer og implementering af design.</p>
                </div>
            </div>
        </section>
    )
}