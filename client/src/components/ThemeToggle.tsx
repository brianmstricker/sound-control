import { useState, useEffect } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

function ThemeToggle() {
 const [mounted, setMounted] = useState(false);
 useEffect(() => setMounted(true), []);
 function toggleTheme() {
  const theme = localStorage.getItem("scTheme") || "light";
  if (theme === "light") {
   localStorage.setItem("scTheme", "dark");
   document.documentElement.classList.add("dark");
  } else {
   localStorage.setItem("scTheme", "light");
   document.documentElement.classList.remove("dark");
  }
 }
 if (!mounted) return <div className="h-8 w-8 bg-secondary rounded-full animate-pulse" />;
 return (
  <button
   onClick={toggleTheme}
   className="h-8 w-8 bg-background hover:bg-accent hover:text-accent-foreground flex items-center justify-center rounded-full"
  >
   <LuSun className="absolute h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
   <LuMoon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
   <span className="sr-only">Toggle theme</span>
  </button>
 );
}

export default ThemeToggle;
