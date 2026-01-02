"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import Button from "@/app/components/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      onClick={handleToggler}
      className="rounded-xl border-0 text-white bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
    >
      {theme === "dark" ? (
        <BsFillSunFill className="size-4" />
      ) : (
        <BsFillMoonFill className="size-4" />
      )}
    </Button>
  );
}
