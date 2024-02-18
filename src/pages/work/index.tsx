import Layout from "@/components/Layout";
import DefaultHero from "@/components/Layout/DefaultHero";
import Cases
 from "@/components/cases";



export default function Work() {
  return (
    <Layout>
      <DefaultHero heading="Partnerships we're proud of" />
      <Cases />
    </Layout>
  );
}