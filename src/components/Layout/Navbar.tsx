import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white h-[90px] flex items-center z-10">
        <div className="w-[94%] mx-auto flex items-center max-w-main justify-between">
          <div className='flex items-center gap-[80px]'>
            <Link className='flex items-center gap-[10px]' href={"/"}>
              <img className="w-[60px] rounded-[14px]" src="/favicon.png" alt="Logo"></img>
            </Link>
            
            <div className='flex items-center gap-[10px] text-main font-[400]'>
              <Link className='px-[10px] py-[4px] rounded-full hover:bg-second transition-all' href={"/services"}>Services</Link>
              <Link className='px-[10px] py-[4px] rounded-full hover:bg-second transition-all' href={"/work"}>Work</Link>
              <Link className='px-[10px] py-[4px] rounded-full hover:bg-second transition-all' href={"/company/team"}>Company</Link>
              <Link className='px-[10px] py-[4px] rounded-full hover:bg-second transition-all' href={"/company/team"}>Products</Link>
              <Link className='px-[10px] py-[4px] rounded-full hover:bg-second transition-all' href={"/contact"}>Contact</Link>
            </div>
          </div>

          <div className='flex items-center gap-[20px] text-main'>
            <div className='flex items-center gap-[5px] text-[15px] font-[400]'>
              <Link href={"/dk"}>DK</Link>
              <p>|</p>
              <Link href={"/"}>EN</Link>
            </div>
            <Link className='bg-main text-white px-[20px] font-[400] text-[15px] py-[10px] rounded-full' href={"/price"}>Pricecalculator</Link>
          </div>
      </div>
      </nav>
    </>
  );
}