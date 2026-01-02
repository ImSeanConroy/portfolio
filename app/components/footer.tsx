import React from "react";
import SocialButton from "./social-button";
import { BsTerminalFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="m-auto pb-1 flex justify-center items-center gap-2">
      <SocialButton href="/" icon={BsTerminalFill} ariaLabel="" />
      <div className="rounded-xl px-4 py-2 bg-zinc-900 dark:bg-zinc-800">
        <p className="text-white text-center font-semibold">
          Hi, I&apos;m Sean. Software engineer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
