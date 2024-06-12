"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const navList = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "ToDo",
        path: "/todo",
    },
];

const Navbar = () => {
    const pathname = usePathname()
  return (
    <nav className='sticky z-[100] h-20 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <ul className='flex h-20 items-center justify-around'>
        {navList.map(({ label, path }) => (
          <li key={label} className={path===pathname? "text-red-600":""}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
