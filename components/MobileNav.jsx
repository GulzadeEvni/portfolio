"use client";

import {Sheet, SheetContent, SheetTrigger, SheetTitle} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from "react-icons/ci";

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
];

const MobileNav = () => {
  const pathname = usePathname();  
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-amber-300" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* Add SheetTitle for accessibility */}
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            {/*logo*/}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <h1 className='text-4xl font-semibold'> 
                        Gülzade<span className='text-amber-300'>.</span>
                    </h1>
                </Link>
            </div>
            {/* nav*/}
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link,index)=> {
                    return ( 
                        <Link 
                            href={link.path} 
                            key={index} 
                            className={`${link.path === pathname && "text-amber-300 border-b-2 border-amber-300"}text-xl capitalize hover:text-amber-300 transition-all`}
                        >
                                {link.name}
                        </Link>
                    );
                })}
            </nav>
        </SheetContent>       
    </Sheet>
  )
}

export default MobileNav;