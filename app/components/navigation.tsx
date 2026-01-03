import React from "react";
import {
  BsLinkedin,
  BsGithub,
  BsTerminalFill,
  BsFillSendFill,
} from "react-icons/bs";

import SocialButton from "@/app/components/social-button";
import { ModeToggle } from "@/app/components/mode-toggle";

const SOCIAL_LINKS = [
  {
    href: "mailto:imseanconroy@gmail.com",
    icon: BsFillSendFill,
    ariaLabel: "Email Sean Conroy",
  },
  {
    href: "https://github.com/ImSeanConroy",
    icon: BsGithub,
    ariaLabel: "GitHub profile",
  },
  {
    href: "https://www.linkedin.com/in/imseanconroy/",
    icon: BsLinkedin,
    ariaLabel: "LinkedIn profile",
  },
];

const Navigation = () => {
  return (
    <div className="flex justify-between px-6 py-3">
      <SocialButton href="/" icon={BsTerminalFill} ariaLabel="" />
      <div className="flex gap-x-2 font-mono text-sm text-foreground/80">
        {SOCIAL_LINKS.map(({ href, icon, ariaLabel }) => (
          <SocialButton
            key={href}
            href={href}
            icon={icon}
            ariaLabel={ariaLabel}
          />
        ))}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navigation;
