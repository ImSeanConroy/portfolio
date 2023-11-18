"use client";

import { useState } from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

import { NavLink } from ".";

const Navbar = () => {
  const [isVisibile, setIsVisible] = useState<boolean>(false);

  const toggle = () => {
    setIsVisible(!isVisibile);
  };

  return (
    <header className="w-full px-5 md:px-10 pt-5 pb-9 md:py-9">
      <div className="mx-auto">
        <div className="border-gray-900">
          <div className="flex flex-row justify-between items-center">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-semibold tracking-wide text-inherit"
            >
              Sean Conroy
            </Link>

            <div className="hidden md:block">
              <nav className="flex align-center gap-5 justify-center text-lg tracking-wide font-light">
                <NavLink exact={true} href="/">
                  Work
                </NavLink>
                <NavLink exact={false} href="/about">
                  About
                </NavLink>
              </nav>
            </div>

            <div className="block md:hidden">
              <button onClick={toggle}>
                <CiMenuBurger className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isVisibile && (
        <div className="fixed w-screen h-screen bg-white dark:bg-neutral-900 z-10 top-0 left-0 no-scrollbar">
          <button className="absolute top-5 right-5" onClick={toggle}>
            <TfiClose className="text-3xl" />
          </button>

          <nav className="py-32 p-20 md:p-32 flex flex-col gap-5 text-xl tracking-wide font-light">
            <Link href="/" onClick={toggle} className="nav-link">
              Work
            </Link>
            <Link href="/about" onClick={toggle} className="nav-link">
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
