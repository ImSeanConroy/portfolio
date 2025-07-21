import React from "react";
import Button from "./ui/button";

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
      <Button className="bg-zinc-100 hover:bg-zinc-200 rounded-lg dark:bg-zinc-800 border-0 dark:text-white dark:hover:bg-zinc-700">
        <Icon className="size-4" />
      </Button>
    </a>
  );
};

export default SocialButton;
