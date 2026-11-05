import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuHeart } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../Store";

export default function Header() {
  const { items } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-white px-3 sm:px-5 py-4 flex justify-between items-center gap-3">
      {/* Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl">
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Logo */}
      <Link to="/" className="font-bold text-2xl sm:text-3xl shrink-0">
        c<span className="text-gray-400">y</span>ber
      </Link>

      {/* Search */}
      <label className="relative hidden lg:block">
        <input className="input w-[200px] xl:w-[300px] bg-[#f6f6f6] pl-10" type="text" placeholder="Search" />
        <CiSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-xl text-black/50" />
      </label>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-5 xl:gap-10 whitespace-nowrap">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">Blog</Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-3 sm:gap-5 shrink-0">
        <LuHeart className="text-xl sm:text-2xl cursor-pointer" />

        <Link to="/cart" className="relative">
          <HiOutlineShoppingCart className="text-xl sm:text-2xl" />
          {items.length !== 0 && <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">{items.length}</span>}
        </Link>

        <BiUser className="text-xl sm:text-2xl cursor-pointer" />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 z-50 w-full bg-white shadow-lg p-5 flex flex-col gap-5 lg:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
        </nav>
      )}
    </header>
  );
}
