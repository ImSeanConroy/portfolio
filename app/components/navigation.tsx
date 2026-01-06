import { BsTerminalFill } from "react-icons/bs";

import SocialButton from "@/app/components/social-button";
import { ModeToggle } from "@/app/components/mode-toggle";

import { SOCIAL_LINKS } from "@/app/constants/social-links";

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
