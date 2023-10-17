import MovingLine from '@/components/Animations/MovingLine'
import EventsRow from '@/components/EventsRow'
import Layout from '@/components/Layout'
import { PAGES } from '@/components/Layout/Navbar'
import PartnersRow from '@/components/PartnersRow'
import PodcastsSection from '@/components/PodcastsSection'
import { ArrowRight, Check, CheckCircle, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Icon } from '@iconify/react';

export default function Index() {
  return (
    <Layout page={PAGES.HOME} className="dotted-background min-h-screen">
      <div className="max-w-screen-lg mx-auto mb-10">
        <div className="flex flex-col md:flex-row gap-1 pt-10">
          <div className="flex-1 p-10 pl-0">
            <div className="flex">
              <div className="flex flex-col">
                <div className="group cursor-pointer bg-white px-4 py-1 gap-3 rounded-full ring-1 ring-slate-900/10 hover:ring-slate-500/40 flex items-center">
                  <span className="text-sm text-[#395a3f] font-semibold">Næste event (KBH)</span>
                  <div className="w-[1px] h-[1rem] my-1 rounded-full bg-slate-300"/>
                  <span className="text-sm text-gray-500">Jesper Thomsen, CEO Soundboks</span>
                  <div className="text-slate-900/30 group-hover:text-slate-500/90">
                    <ChevronRight size={16}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex ml-1 mt-3 flex-col gap-4">
              <h1 className="text-4xl font-bold text-slate-900">Unge Iværksættere</h1>
              <h3 className="text-slate-700 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.</h3>
              <ul className="flex flex-col gap-2 text-slate-900 text-lg font-medium">
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="text-emerald-900"/>
                  <p>Gratis deltagelse</p>
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="text-emerald-900"/>
                  <p>Mulighed for networking</p>
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="text-emerald-900"/>
                  <p>Vidensdeling fra erfarne iværksættere</p>
                </li>
              </ul>
              <div className="flex items-center gap-2 mt-4">
                <button className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold flex items-center gap-2">
                  CTA Button
                  <ArrowRight/>
                </button>
                <div className="flex items-center gap-2">
                  <Link href="https://www.facebook.com/ungeivaerksaettere" target='_blank'>
                    <Icon className="cursor-pointer hover:text-[#3360ff] transition-all" width={35} icon="ic:baseline-facebook"/>
                  </Link>
                  <Link href="https://www.instagram.com/ivaerksaettere/" target='_blank'>
                    <Icon className="cursor-pointer hover:text-[#f00575] transition-all" width={35} icon="mdi:instagram"/>
                  </Link>
                </div>
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

      <div className="mx-2 mb-14">
        <div className="drop-shadow-lg max-w-screen-lg mx-auto my-4 rounded-xl border-slate-900/10 border bg-slate-100 px-2 py-6">
          <div className="flex justify-around items-center flex-col gap-y-4 md:flex-row">
            <div>
            <h2 className="text-slate-900 text-3xl font-medium">Kom med til <span className="underline">næste</span> event!</h2>
            <h3 className="text-slate-700 text-center">Det er fuldstændig gratis at deltage!</h3>
            </div>
            <div className="flex gap-4 items-center">
              <Link href="/podcasts">
                  <button className="group px-8 py-2 border-2 border-[#395a3f] bg-[#395a3f]/80 hover:bg-[#395a3f] rounded-lg text-white font-semibold flex items-center gap-2 delay-25 transition-all active:scale-95">
                      Aarhus
                      <ExternalLink size={18} className="group-hover:scale-110 transition-all"/>
                  </button>
              </Link>
              <Link href="https://www.facebook.com/events/7041423465904945/" target='_blank'>
                  <button className="group px-8 py-2 border-2 border-[#395a3f] bg-[#395a3f]/80 hover:bg-[#395a3f] rounded-lg text-white font-semibold flex items-center gap-2 delay-25 transition-all active:scale-95">
                      København
                      <ExternalLink size={18} className="group-hover:scale-110 transition-all"/>
                  </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PartnersRow/>
      <PodcastsSection/>
      <EventsRow/>
    </Layout>
  )
}
