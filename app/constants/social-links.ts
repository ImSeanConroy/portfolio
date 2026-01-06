import { BsFillSendFill, BsGithub, BsLinkedin } from "react-icons/bs";

export const SOCIAL_LINKS = [
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
] as const;
