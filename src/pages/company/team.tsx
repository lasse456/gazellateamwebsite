import Layout from "@/components/Layout";
import DefaultHero from "@/components/Layout/DefaultHero";
import Members from "@/components/members";

export default function Work() {
  return (
    <Layout>
      <DefaultHero description="The political landscape is accelerating in terms of complexity. To keep up with pace, Spaak Technologies works to empower organisations in digitalising operations and achieving overview in the oceans of information." heading="More than just developers" />
      <Members />
    </Layout>
  );
}