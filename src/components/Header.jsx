import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <header className="flex tracking-wider justify-between p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" href="/" Icon={AiFillHome} />
        <MenuItem title="about" href="/about" Icon={BsInfoCircleFill} />
      </div>
      <div className="flex gap-4 items-center">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-400 py-1 px-2 rounded-lg">
            IMDb
          </span>
          <span className="text-xl hidden sm:inline pe-2">Clone</span>
        </Link>
      </div>
    </header>
  );
}
