import Layout from "@/components/Layout";
import CaseHero from "@/components/casehero";
import CaseProps from "@/components/caseprops";
import MoreCases from "@/components/morecases";

export default function Planmates() {
  return (
    <Layout>
        <CaseHero heading="Making event planning with friends easier" caseImage="/hero.webp"/>
        <CaseProps customer="Planmates" service="App development" developers={["Simon Maribo"]} />
        <div className="w-[94%] mx-auto py-[100px]">
                <img className="w-full h-[600px] rounded-[14px]" src={"/hero.webp"}></img>
            </div>
        <MoreCases />
    </Layout>
  );
}