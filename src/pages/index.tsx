import Layout from '@/components/Layout'
import { PAGES } from '@/components/Layout/Navbar'
import PartnersRow from '@/components/PartnersRow'
import { ArrowRight, ChevronRight } from 'lucide-react'

export default function Index() {
  return (
    <Layout page={PAGES.HOME} className="dotted-background min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row gap-1 pt-10">
          <div className="flex-1 p-10">
            <div className="flex">
              <div className="flex flex-col">
                <div className="group cursor-pointer bg-white px-4 py-1 gap-3 rounded-full ring-1 ring-slate-900/10 hover:ring-slate-500/40 flex items-center">
                  <span className="text-sm text-[#395a3f] font-semibold">Næste event</span>
                  <div className="w-[1px] h-[1rem] my-1 h-full rounded-full bg-slate-300"/>
                  <span className="text-sm text-gray-500">Kasper Knudsen</span>
                  <div className="text-slate-900/30 group-hover:text-slate-500/90">
                    <ChevronRight size={16}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex ml-1 mt-3 flex-col gap-4">
              <h1 className="text-4xl font-bold text-slate-900">Unge Iværksættere</h1>
              <h3 className="text-slate-700 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.</h3>
              <div className="mt-4">
                <button className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold flex items-center gap-2">
                  CTA Button
                  <ArrowRight/>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 p-1">
            <img 
              src="https://i.imgur.com/OM0sVws.jpg"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <PartnersRow className="mt-4"/>
    </Layout>
  )
}
