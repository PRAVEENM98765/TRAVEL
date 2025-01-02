import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" bg-gray-100  " >
      <div className="container mx-auto flex flex-wrap items-center justify-between p-5">
        {/* Logo Section */}
        <div className="flex items-center text-black">
         
          <h1 className="font-semibold text-2xl ml-2">Travel App</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 font-semibold text-black">
          <a href="Home" className="flex items-center space-x-2 hover:text-gray-300">
            <FaHome size={20} />
            <span>Home</span>
          </a>
          <a href="/about" className="flex items-center space-x-2 hover:text-gray-300">
            <FaBook size={20} />
            <span>About</span>
          </a>
          <a href="/contact" className="flex items-center space-x-2 hover:text-gray-300">
            <BsPeopleFill size={20} />
            <span>Contact</span>
          </a>
          <a href="/destine" className="flex items-center space-x-2 hover:text-gray-300">
            <BiSolidPlaneAlt size={20} />
            <span>Destination</span>
          </a>
        </nav>

        {/* Login/Signup Section */}
        <div className="hidden lg:flex">
          <button className="px-4 py-1 bg-white rounded-full font-semibold text-black hover:bg-gray-200">
            <a href="/Login">Login</a>
            <span> | </span>
            <a href="/Signup">Sign up</a>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-black bg-opacity-75 text-white p-5 space-y-4">
          <a href="/home" className=" flex items-center space-x-2 hover:text-gray-300">
            <FaHome size={20} />
            <span>Home</span>
          </a>
          <a href="/about" className=" flex items-center space-x-2 hover:text-gray-300">
            <FaBook size={20} />
            <span>About</span>
          </a>
          <a href="/contact" className=" flex items-center space-x-2 hover:text-gray-300">
            <BsPeopleFill size={20} />
            <span>Contact</span>
          </a>
          <a href="/destine" className=" flex items-center space-x-2 hover:text-gray-300">
            <BiSolidPlaneAlt size={20} />
            <span>Destination</span>
          </a>
          <button className="w-full px-4 py-2 bg-white rounded-full font-semibold text-black hover:bg-gray-200">
            <a href="/Login">Login</a>
            <span> | </span>
            <a href="/Signup">Sign up</a>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
