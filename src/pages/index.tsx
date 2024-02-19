import Layout from "@/components/Layout";
import Hero from "@/components/hero";
import LandingCases from "@/components/landingcases";
import Values from "@/components/values";


export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="py-[100px]">
        <div className="w-[94%] mx-auto max-w-[48%]">
          <h1 className="text-[40px] text-main mb-[40px] leading-[50px]">We help you achieve digital success through innovative software</h1>
          <p className="text-gray-600 text-[20px] font-[300]">
          As each day pass, the world becomes more digital. Tasks become automated, information gets stored on the internet and applications handle problems we once had to take care of ourselves.
<br></br><br></br>
Gazella Team helps your company, project or organization excel in a digital world, by offering software-solutions custom-made to benefit the opportunites and challenges you&apos;re facing.
<br></br><br></br>
With our +10 years combined experience, we offer you a dedicated partner that understands your needs, and develops a corresponding solution that matches the requirements of your project.
          </p>
        </div>
      </section>
      <LandingCases />
      <Values />
    </Layout>
  );
}