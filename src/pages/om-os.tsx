import Layout from '@/components/Layout'
import { PAGES } from '@/components/Layout/Navbar'

export function AboutSection({ reverse, image, children }: { reverse?: boolean, image: string, children: React.ReactNode }){
  return (
    <div className={`flex flex-col md:flex-row gap-12 pt-10 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 p-10 pl-0">
        {children}
      </div>
      <div className="flex-1 p-1">
        <img src={image} className="w-full h-[400px] object-cover rounded-lg" />
      </div>
    </div>
  )
}

export default function About() {
  return (
    <Layout page={PAGES.ABOUT}>
      <div className="max-w-screen-lg mx-auto min-h-screen px-4 md:px-0 flex flex-col gap-12 mb-10">
        <AboutSection image="https://i.imgur.com/OM0sVws.jpg">
          <div className="flex ml-1 mt-3 flex-col gap-4">
            <h1 className="text-4xl font-bold text-slate-900">Om os - fact #1</h1>
            <h3 className="text-slate-700 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.</h3>
            <h3 className="text-slate-700 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.</h3>
          </div>
        </AboutSection>
        <AboutSection image="https://i.imgur.com/OM0sVws.jpg" reverse>
          <div className="flex ml-1 mt-3 flex-col gap-4">
            <h1 className="text-4xl font-bold text-slate-900">Om os - fact #1</h1>
            <h3 className="text-slate-700 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.</h3>
            <h3 className="text-slate-700 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.</h3>
          </div>
        </AboutSection>
        <AboutSection image="https://i.imgur.com/OM0sVws.jpg">
          <div className="flex ml-1 mt-3 flex-col gap-4">
            <h1 className="text-4xl font-bold text-slate-900">Om os - fact #1</h1>
            <h3 className="text-slate-700 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.</h3>
            <h3 className="text-slate-700 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.</h3>
          </div>
        </AboutSection>
      </div>
    </Layout>
  )
}
