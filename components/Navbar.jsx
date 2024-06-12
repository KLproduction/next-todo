
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import PrivatePage from "@/app/private/page";
import { createClient } from '@/lib/supabase/server'
import SignOutBtn from "./SignOut/SignOutBtn";


const navList = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "ToDo",
        path: "/todo",
    },
    {
        label: "Private",
        path: "/private",
    },
];

const Navbar = async() => {


  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error ) {
    console.log("no data")
  }



  return (
    <nav className='sticky z-[100] h-20 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <ul className='flex h-20 items-center justify-around'>
        {navList.map(({ label, path }) => (
          <li key={label}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
        {
        data.user ? 
        <div className="flex flex-col justify-center  items-center gap-3">
          <p>Hello {data.user.email}</p>
          <SignOutBtn/>
        </div>
        :
        <Button asChild>
          <Link href="/login">Sign In</Link>
        </Button>
        
      }
        
      </ul>
    </nav>
  );
};

export default Navbar;
