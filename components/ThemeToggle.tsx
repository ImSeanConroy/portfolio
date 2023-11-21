"use client";

import { useState, useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <>
          {currentTheme === "dark" ? (
            <CiLight
              className="text-2xl cursor-pointer"
              onClick={() => setTheme("light")}
            />
          ) : (
            <CiDark
              className="text-2xl cursor-pointer"
              onClick={() => setTheme("dark")}
            />
          )}
        </>
      )}
    </>
  );
};

export default ThemeToggle;
