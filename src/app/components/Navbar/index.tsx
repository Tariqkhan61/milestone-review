import React from 'react';
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";

const Navbar = () => {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#252B42] text-[#FFFFFF] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-2 text-xs sm:text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <IoIosCall />
            <span>(225) 553 -0118</span>
          </div>
          <div className="flex items-center space-x-1">
            <IoIosMail />
            <span>mechelle.revera@example.com</span>
          </div>
        </div>
        <div className="text-center py-2 sm:py-0">
          <p>Follow us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center space-x-2">
          <span>Follow Us:</span>
          <FaInstagram />
          <FaYoutube />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-[#FAFAFA] text-[#252B42] flex flex-col md:flex-row items-center h-auto md:h-14 px-4 sm:px-8">
        {/* Brand */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h3 className="text-xl sm:text-2xl font-bold">Bandage</h3>
          <div className="block md:hidden">
            {/* You can add a hamburger menu icon here for mobile */}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex-1 md:flex justify-center space-x-4 mt-2 md:mt-0">
          <Link href="/" legacyBehavior><a className="font-bold">Home</a></Link>
          <Link href="/shop" legacyBehavior><a className="font-bold flex items-center">Shop<IoIosArrowDown className="ml-1" /></a></Link>
          <Link href="/about" legacyBehavior><a className="font-bold">About</a></Link>
          <Link href="/blog" legacyBehavior><a className="font-bold">Blog</a></Link>
          <Link href="/contact" legacyBehavior><a className="font-bold">Contact</a></Link>
          <Link href="/pages" legacyBehavior><a className="font-bold">Pages</a></Link>
        </nav>

        {/* Right-side icons */}
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <Link href="/login" legacyBehavior><a className="font-bold text-[#23A6FO]">Login/Register</a></Link>
          <IoIosSearch size={16} />
          <IoCartOutline size={16} />
          <IoIosHeartEmpty size={16} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
