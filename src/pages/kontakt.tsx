import MovingLine from '@/components/Animations/MovingLine'
import Layout from '@/components/Layout'
import { PAGES } from '@/components/Layout/Navbar'

export default function Contact() {
  return (
    <Layout page={PAGES.CONTACT}>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900">Kontakt os</h2>
            <p className="font-normaltext-center text-gray-500 sm:text-xl">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.
            </p>
            <MovingLine/>
            <form className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="kontakt@ungeivaerksaettere.dk" required/>
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Emne</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="Fortæl os hvordan vi kan hjælpe dig" required/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Besked</label>
                    <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" placeholder="Jeg føler det kunne være nice hvis..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-slate-900 sm:w-fit hover:bg-slate-800 active:scale-95">Send message</button>
            </form>
        </div>
      </section>
    </Layout>
  )
}
