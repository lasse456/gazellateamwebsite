/*
  This is a moving row of logos that is used on the homepage,
  i want it to be a smooth animation that moves from right to left without jumping back to the start
  it can use two rows of logos to make it look like it is a continuous loop
*/
export default function PartnersRow({ className }: { className?: string }){
    return (
      <div className={className}>
        <div className="bg-[#f5f5f5] overflow-hidden py-8">
          <div className="max-w-screen-lg mx-auto items-center justify-between flex flex-row gap-10">
            <img src="https://static.canva.com/anon_home/logos/reddit-monochrome.png" alt="Partner Logo" className="h-12 w-auto grayscale"/>
            <img src="https://static.canva.com/anon_home/logos/hubspot-monochrome.png" alt="Partner Logo" className="h-12 w-auto" />
            <img src="https://static.canva.com/anon_home/logos/salesforce-grayscale.png" alt="Partner Logo" className="h-12 w-auto" />
            <img src="https://static.canva.com/anon_home/logos/skyscanner-grayscale.png" alt="Partner Logo" className="h-12 w-auto" />
            <img src="https://static.canva.com/anon_home/logos/danone-grayscale.png" alt="Partner Logo" className="h-12 w-auto" />
          </div>
        </div>
      </div>
    )
}