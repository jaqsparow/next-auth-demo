import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState();

  //First useEffect to set state variables after initial/first render
  useEffect(() => {
    setIsDark(localStorage.theme === "dark");
    setIsMounted(true);
    setTheme(localStorage.theme);
  }, []);

  //Second useEffect runs whenever isDark changes
  useEffect(() => {
    if (isMounted) {
      isDark ? (localStorage.theme = "dark") : (localStorage.theme = "light");
      setTheme(localStorage.theme);
    }
  }, [isDark]);

  //set Theme to dark or light according to localStorage value or user interruption
  const setTheme = (theme) => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };
  return [isDark, setIsDark];
}
