import Navbar from "./Navbar";
import Meta from "./Meta";
import localFont from "next/font/local"
import Footer from "./Footer";
import Chat from "./Chat";

const GazellaTeamFont = localFont({
  src: [
    {
      path: '../fonts/Plain-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Plain-Bold.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Plain-Thin.otf',
      weight: '200',
      style: 'normal',
    },
  ],
})

export default function Layout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
    <Meta />
      <div>
        <div className={GazellaTeamFont.className}>

            <Navbar />
            <Chat />
            <div style={{paddingTop: "90px"}}>
            {children}
            </div>
            <Footer />
        </div>
      </div>
    </div>
  );
}