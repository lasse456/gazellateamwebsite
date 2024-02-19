import Layout from "@/components/Layout";
import CaseHero from "@/components/casehero";
import CaseProps from "@/components/caseprops";

export default function Planmates() {
  return (
    <Layout>
        <CaseHero heading="Making event planning with friends easier" caseImage="/hero.webp"/>
        <CaseProps />
    </Layout>
  );
}