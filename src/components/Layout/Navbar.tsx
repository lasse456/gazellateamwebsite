import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white h-[90px] flex items-center z-10">
        <div className="w-[94%] mx-auto flex items-center justify-between">
          <div className='flex items-center gap-[80px]'>
            <Link href={"/"}>
              <img className="w-[90px]" src="/logos/mainlogo.svg" alt="Logo"></img>
            </Link>
            
            <div className='flex items-center gap-[14px] text-main font-[400]'>
              <Link className='px-[10px] py-[4px] rounded-full hover:bg-second transition-all' href={"/services"}>Services</Link>
              <Link className='px-[10px] py-[4px] rounded-full hover:bg-second transition-all' href={"/work"}>Work</Link>
              <Link className='px-[10px] py-[4px] rounded-full hover:bg-second transition-all' href={"/services"}>Company</Link>
              <Link className='px-[10px] py-[4px] rounded-full hover:bg-second transition-all' href={"/services"}>Contact</Link>
            </div>
          </div>

          <div className='flex items-center gap-[20px] text-main'>
            <div className='flex items-center gap-[5px] text-[15px] font-[400]'>
              <Link href={"/dk"}>DK</Link>
              <p>|</p>
              <Link href={"/"}>EN</Link>
            </div>
            <Link className='bg-main text-white px-[20px] font-[400] text-[15px] py-[10px] rounded-full' href={"/proice"}>Pricecalculator</Link>
          </div>
      </div>
      </nav>
    </>
  );
}