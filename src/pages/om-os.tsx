import Layout from '@/components/Layout'
import { PAGES } from '@/components/Layout/Navbar'

export default function About() {
  return (
    <Layout page={PAGES.ABOUT}>

      <div>
        <p>About page</p>
      </div>
    </Layout>
  )
}
