export default function Hero() {
    return (
        <section className="py-[100px]">
            <div className="w-[94%] mx-auto text-main mb-[100px] max-w-main">

                    <h1 className="text-[84px] font-[400] mb-[30px] w-[60%] leading-[85px] tracking-tighter">Software development based in Copenhagen.</h1>

            </div>
            <div>
            <video autoPlay loop muted playsInline width="100%">
                <source src="/videos/herovideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
        </section>
    )
}