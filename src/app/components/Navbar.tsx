import Link from "next/link";
import Logo from "@/assets/logo.webp";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed w-full h-24 bg-purple-950 flex items-center justify-between px-28 overflow-hidden">
      <div>
        <Image src={Logo} alt="" className="h-24 w-96" />
      </div>
      <div className="flex items-center text-xl font-semibold text-white gap-10">
        <Link href="">
          <button className="navbar-button">Home</button>
        </Link>
        <Link href="">
          <button className="navbar-button">Rooms</button>
        </Link>
        <Link href="">
          <button className="navbar-button">About</button>
        </Link>
        <button className="p-3 border border-purple-400 text-lg rounded">
          Join Chat
        </button>
      </div>
    </nav>
  );
}
