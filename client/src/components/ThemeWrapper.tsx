import { useState, useEffect, useRef } from "react";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
 const [mounted, setMounted] = useState(false);
 const theme = useRef(localStorage.getItem("scTheme") || "light");
 useEffect(() => setMounted(true), []);
 useEffect(() => {
  if (theme.current === "dark") {
   document.documentElement.classList.add("dark");
  } else {
   document.documentElement.classList.remove("dark");
  }
 }, []);
 if (!mounted) return;
 return <>{children}</>;
};
export default ThemeWrapper;
