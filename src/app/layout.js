import "./globals.css";
import { Footer, Navbar } from "./components";

import {Vollkorn} from 'next/font/google'
import { bg_anim, vfx } from "./assets";
import Image from "next/image";

const usedFont = Vollkorn({
  subsets: ['latin'],
  weight: ['400','500','600','700','800','900'],
  display: 'swap',
})

export const metadata = {
  title: "DigitAir",
  description: "Sito web DigitAir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={usedFont.className}>
      <body>
        <Navbar/>
        <Image className="fixed z-0 object-none w-full h-full lg:object-fill invert opacity-10" src={vfx}/>
        <Image className="absolute z-0 w-full h-full" src={bg_anim}/>
        <div className="absolute z-0 w-full h-full bg-gradient-to-b from-transparent to-glass"/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
