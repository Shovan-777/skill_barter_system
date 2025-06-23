'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaSun, FaMoon } from 'react-icons/fa';



export default function Header() {
const [showMobileSearch, setShowMobileSearch] = useState(false);
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'Popular Skills' },
  { href: '/', label: 'What is Skill Bartering?' },
];
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [isDarkMode, setIsDarkMode] = useState(false);

 useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      } else if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          document.documentElement.classList.add('dark');
          setIsDarkMode(true);
        }
      }
    }
   document.documentElement.classList.add('transition-colors', 'duration-300');
  }, []);

const toggleDarkMode = () => {
  const root = document.documentElement;
  const isCurrentlyDark = root.classList.contains("dark");
  if (isCurrentlyDark) {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
  setIsDarkMode(!isCurrentlyDark);
};


   

  return (
    <nav className="fixed top-0 left-0 right-0 w-screen flex flex-row flex-nowrap items-center justify-between p-6 mb-32 z-[9999999] bg-transparent backdrop-blur-sm dark:bg-transparent dark:backdrop-blur-sm">
      
      <Link href='/'>
        <span className="font-kode font-extrabold text-[rgba(0,0,0,0.8)] dark:text-[rgba(255,255,255,0.8)] whitespace-nowrap text-[2.5rem] max-[768px]:text-[2rem] max-[480px]:text-[1.75rem] max-[400px]:text-[0.9rem]">
          Skill Bartering
        </span>
      </Link>

       <form  className="hidden lg:inline">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-4 pr-10 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none"
          />
          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </form>

      {/* Mobile Search */}
      <button
        className="w-12 h-10 lg:hidden rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
        onClick={() => setShowMobileSearch((prev) => !prev)}
      >
        <AiOutlineSearch />
      </button>

     {showMobileSearch && (
        <form
          className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 px-6 pb-3 pt-2 z-[9999999] lg:hidden"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-4 pr-10 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none"
            />
            <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </form>
      )}

      <div className="hidden md:flex items-center space-x-4 ml-6">
          {navLinks.map(({ href, label }, idx) => (
         <Link key={idx} href={href}>
         <div className="letters">{label}</div>
          </Link>
         ))}
          </div>

          <div className="md:hidden ml-2">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
         

      {isMobileMenuOpen && (
      <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md z-[9999998] py-4 px-6 md:hidden space-y-4">
       {navLinks.map(({ href, label }, idx) => (
       <Link key={idx} href={href} onClick={() => setIsMobileMenuOpen(false)}>
         <div className="letters">{label}</div>
       </Link>
       ))}

    
      </div>
   )}

    <button
        onClick={toggleDarkMode}
        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>

  <Link href="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
      <button className="w-full text-left px-4 py-2 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
        Sign In
      </button>
    </Link>
        
     
    </nav>
  );
}
