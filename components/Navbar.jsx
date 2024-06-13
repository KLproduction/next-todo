

import Link from "next/link";
import { Button } from "./ui/button";
import { auth } from "../auth"
import { SignOut } from "./signOut";





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
        label: "Pay",
        path: "/payment",
    },

];

const Navbar = async() => {

  const session = await auth()
  console.log(session)


  return (
    <nav className='sticky z-[100] h-30 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <ul className='flex items-center justify-around'>
        {navList.map(({ label, path }) => (
          <li key={label}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
        {!session ? 
          <Button asChild>
            <Link href='/login'>Sign In</Link>
          </Button>
        :
          <div className="flex gap-3 items-center justify-center">
            <p>Hello {session?.user?.name}</p>
            <SignOut/>
          </div>
      }

      </ul>
    </nav>
  );
};

export default Navbar;
