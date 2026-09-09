"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

import { FaGithub, FaHouse } from "react-icons/fa6";
import { FiSun, FiMoon } from "react-icons/fi";

import { siteDetails } from "@/data/siteDetails";
// import { menuItems } from "@/data/mockData/menuItems";

const Header: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }

    // Broadcast event so HeroGrid reads the updated localStorage immediately
    window.dispatchEvent(new Event("themeChange"));
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-transparent top-0 left-0 right-0 fixed md:absolute z-50 border-b md:border-none border-foreground">
      {/* Scroll Progress Bar */}
      <div className="w-full bg-gray-200/20 h-1 fixed top-0 left-0 z-50">
        <div
          className="bg-primary h-1 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Bar */}
      <nav
        className={`w-full shadow-md md:shadow-none bg-white md:bg-transparent flex justify-between items-center py-4 px-5 md:px-8 md:py-5 transition-colors duration-200 ${
          mounted && isDarkMode ? "dark:bg-gray-900" : ""
        }`}
      >
        {/* Logo */}

        <div className="flex items-center gap-x-4">
          <Link href={siteDetails.portfolioUrl}>
            <FaHouse className="text-foreground dark:text-foreground min-w-fit w-7 h-7 mb-1" />
          </Link>

          <Link href={siteDetails.siteUrl}>
            <span className="hidden sm:block manrope text-sm sm:text-base md:text-xl font-semibold text-foreground dark:text-white cursor-pointer">
              {siteDetails.shortName}
            </span>
            <span className="block sm:hidden manrope text-sm sm:text-base md:text-xl font-semibold text-foreground dark:text-white cursor-pointer">
              {siteDetails.shorterName}
            </span>
          </Link>
        </div>

        <div className="flex flex-row items-center gap-x-1 sm:gap-x-5">
          <Link
            href={siteDetails.repositoryUrl}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
          >
            {mounted && isDarkMode ? (
              <FaGithub className="w-5 h-5 text-white" />
            ) : (
              <FaGithub className="w-5 h-5 text-gray-600" />
            )}
          </Link>

          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle dark mode"
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
          >
            {mounted && isDarkMode ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Transition
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          id="mobile-menu"
          className={`md:hidden bg-white shadow-lg ${
            mounted && isDarkMode ? "dark:bg-gray-900" : ""
          }`}
        >
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground dark:text-gray-200 hover:text-primary dark:hover:text-primary block"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
      */}
    </header>
  );
};

export default Header;
