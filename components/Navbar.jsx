
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";


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

const Navbar = async() => {




  return (
    <nav className='sticky z-[100] h-20 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <ul className='flex h-20 items-center justify-around'>
        {navList.map(({ label, path }) => (
          <li key={label}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
        
      </ul>
    </nav>
  );
};

export default Navbar;
