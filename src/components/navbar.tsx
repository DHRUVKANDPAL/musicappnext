"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [darkMode,setdarkMode]=useState<Boolean>(false);
  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
   }
  },[darkMode])
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const newmode:Boolean=!darkMode;
    setdarkMode(newmode);
};
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home">
            
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/contact"><MenuItem setActive={setActive} active={active} item="Contact">
          
          </MenuItem></Link>
        <button className="dark:text-white text-xl border-none w-10 rounded-lg  text-black " onClick={handleClick}>
        {
          !darkMode? <i className="ri-sun-line"></i>:<i className="ri-moon-fill"></i>
        }
        </button>

      </Menu>
      
    </div>
  );
}
