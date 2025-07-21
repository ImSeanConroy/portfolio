import { ModeToggle } from "./components/mode-toggle";
import { LuMail } from "react-icons/lu";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Card from "./components/card";
import SocialButton from "./components/social-button";

const SOCIAL_LINKS = [
  {
    href: "mailto:imseanconroy@gmail.com",
    icon: LuMail,
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

export default function Home() {
  return (
    <main className="relative mx-auto scroll-my-12 overflow-auto p-4 mb-2 font-sans"> {/* mb-12 md:pb-16 */}
      {/* Social & Mode Toggle */}
      <div className="flex justify-end">
        <div className="flex gap-x-2 pt-1 font-mono text-sm text-foreground/80">
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

      {/* Intro */}
      <div className="w-[80%] md:w-[50%] lg:w-[45%] xl:w-[35%] rounded-lg mb-5">
        <h1 className="text-3xl dark:text-white uppercase font-semibold pb-28 pt-28 md:pt-14">
          Sean Conroy
        </h1>
        <p className="text-sm dark:text-gray-400 font-light">
          <span className="text-gray-500 dark:text-white">
            Software engineer
          </span>{" "}
          with experience building and maintaining large-scale systems at Cisco.
          Skilled in Python, Go, and various frameworks. Strong track record of
          designing and optimizing complex applications. Passionate about using
          new technologies to create scalable, high-performance solutions.
        </p>
      </div>

      {/* Showcase Cards */}
      <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-6 lg:h-[50%]">
        <Card
          imageSrc="/surf.jpg"
          title="Disturbance Free Calling"
          description="Minimising disturbances to enable productive remote work."
          className="lg:w-2/3"
          href="https://github.com/ImSeanConroy/disturbance-free-calling"
          tag="Project"
        />
        <Card imageSrc="/surf.jpg" className="lg:w-1/3" />
      </div>

      <div className="w-[80%] md:w-[50%] lg:w-[45%] xl:w-[35%] rounded-lg mt-32">
        <p className="text-sm dark:text-gray-400 font-light">
          * This is a work in progress. More projects will be added as they are
          completed.
        </p>
      </div>
    </main>
  );
}
