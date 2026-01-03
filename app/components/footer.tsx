import React from "react";
import SocialButton from "./social-button";
import { BsTerminalFill } from "react-icons/bs";

const Footer = () => {
  return (<div className="px-3">
    <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 my-6" />
    <footer className="m-auto pb-1 flex justify-center items-center gap-2">
      <SocialButton href="/" icon={BsTerminalFill} ariaLabel="" />
      <div className="rounded-xl px-4 py-2 bg-zinc-900 dark:bg-zinc-800">
        <p className="text-xs md:text-base py-1 md:py-0 text-white text-center font-semibold">
          Hi, I&apos;m Sean. Software engineer at Cisco
        </p>
      </div>
    </footer>
  </div>
  );
};

export default Footer;
