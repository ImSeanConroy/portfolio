import React from "react";

import Button from "@/app/components/button";

const SocialButton = ({
  href,
  icon: Icon,
  ariaLabel,
}: {
  href: string;
  icon: React.ElementType;
  ariaLabel: string;
}) => {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
    >
      <Button className="text-white bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-xl border-0">
        <Icon className="size-4" />
      </Button>
    </a>
  );
};

export default SocialButton;
