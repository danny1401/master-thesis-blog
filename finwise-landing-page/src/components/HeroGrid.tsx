"use client";

import React, { useState, useEffect } from "react";

const HeroGrid: React.FC = () => {
  // Reads initial state directly from localStorage (defaults to light/false)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const baseClasses = "absolute inset-0 h-full w-full bg-[size:40px_40px] transition-all duration-300 bg-hero-background [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]";

  useEffect(() => {
    // 1. Check localStorage on component mount
    const checkTheme = () => {
      const storedTheme = localStorage.getItem("theme");
      setIsDarkMode(storedTheme === "dark");
    };

    checkTheme();

    // 2. Listen for custom theme updates triggered by your toggle button
    window.addEventListener("themeChange", checkTheme);
    // 3. Listen for changes across other open browser tabs
    window.addEventListener("storage", checkTheme);

    return () => {
      window.removeEventListener("themeChange", checkTheme);
      window.removeEventListener("storage", checkTheme);
    };
  }, []);

  return (
    <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
      {isDarkMode ? (
        /* Dark Mode Container */
        <div className={`${baseClasses} bg-[linear-gradient(to_right,#d8d8d812_1px,transparent_1px),linear-gradient(to_bottom,#d8d8d812_1px,transparent_1px)]`} />
      ) : (
        /* Light Mode Container */
        <div className={`${baseClasses} bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]`} />
      )}
    </div>
  );
};

export default HeroGrid;