import { Reveal } from "./Animations/Reveal";

export default function ProductsHero() {
    return (
        <section className="py-[100px]">
            <div className="w-[94%] mx-auto text-main mb-[100px] max-w-main">
                <h1 className="text-[84px] font-[400] mb-[30px] w-[60%] leading-[85px] tracking-tighter">Introducing Gazlla Team <span className="bg-gradient-to-l from-main via-blue-900 via-blue-800 via-blue-900 to-main text-transparent bg-clip-text">Products.</span></h1>
                <p className="text-[20px] font-[300] text-gray-600 w-[50%]">We&apos;re passionate about building unique and useful solutions by combining software and advanced technology with user-friendly design.</p>
            </div>
        </section>
    )
}