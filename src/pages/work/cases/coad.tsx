import Layout from "@/components/Layout";
import CaseHero from "@/components/casehero";
import CaseProps from "@/components/caseprops";
import MoreCases from "@/components/morecases";

export default function Planmates() {
  return (
    <Layout>
        <CaseHero heading="The dream site for a marketing consultant" caseImage="/hero.webp"/>
        <CaseProps customer="COAD" service="Web development" developers={["Lasse Osmann", "Simon Maribo"]} />
        <MoreCases />
    </Layout>
  );
}