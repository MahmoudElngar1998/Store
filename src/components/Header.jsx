import { CiSearch } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuHeart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useCart } from "../Store";

export default function Header() {
  const { items } = useCart();
  return (
    <header className="container  bg-white p-4 flex justify-between items-center">
      <Link to={"/"} className="font-bold mb-5 text-3xl cursor-pointer">
        c<span className="text-gray-400">y</span>ber
      </Link>
      <label className="relative">
        <input className="input w-[300px]  bg-[#f6f6f6] pl-10 placeholder:text-black/50  " type="text" placeholder="Search" />
        <CiSearch className=" absolute pointer-events-none top-1/2 -translate-y-1/2 left-3 text-xl text-black/50" />
      </label>
      <nav className=" flex justify-between items-center gap-10">
        <Link to={"/"}>Home</Link>
        <Link>About</Link>
        <Link>Contact Us</Link>
        <Link>Blog</Link>
      </nav>
      <div className="text-black flex justify-between items-center gap-5">
        <LuHeart className="text-2xl cursor-pointer" />
        <Link to={"/cart"}>
          <HiOutlineShoppingCart className="text-2xl cursor-pointer" />
          {items.length != 0 && <span>{items.length}</span>}
        </Link>
        <BiUser className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
}
