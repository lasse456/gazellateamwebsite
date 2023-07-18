export default function PartnersRow({ className }: { className?: string }){
    return (
        <>
            <style jsx>{`
            // keyframe animation moving the partners row
            @keyframes scroll {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(calc(-100% - var(1rem)));
                }
              }
            .partners-row {
                animation: scroll 30s linear infinite;
                min-width: 100%;
		        gap: var(1rem);
            }
            `}</style>
            <div className="p-4 bg-[#395a3f] w-full">
                <div className={`partners-row flex gap-4 items-center`}>
                    <img src="https://static.canva.com/anon_home/logos/hubspot-monochrome.png" className="h-20"/>
                    <img src="https://static.canva.com/anon_home/logos/hubspot-monochrome.png" className="h-20"/>
                    <img src="https://static.canva.com/anon_home/logos/hubspot-monochrome.png" className="h-20"/>
                    <img src="https://static.canva.com/anon_home/logos/hubspot-monochrome.png" className="h-20"/>
                    <img src="https://static.canva.com/anon_home/logos/salesforce-grayscale.png" className="h-20"/>
                    <img src="https://static.canva.com/anon_home/logos/hubspot-monochrome.png" className="h-20"/>
                    <img src="https://static.canva.com/anon_home/logos/hubspot-monochrome.png" className="h-20"/>
                </div>
            </div>
        </>
    )
}