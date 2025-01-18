import { LuMail } from "react-icons/lu";
import { BsLinkedin, BsSubstack, BsGithub, BsTwitterX } from "react-icons/bs";
import Button from "@/app/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold">Sean Conroy</h1>
        <p className="max-w-md text-pretty font-mono text-sm leading-relaxed antialiased text-foreground/80">
          Committed to designing and implementing robust, efficient, and
          scalable software solutions.
        </p>

        <div className="flex gap-x-1 pt-1 font-mono text-sm text-foreground/80">
          <Button>
            <a href="mailto:imseanconroy@gmail.com">
              <LuMail className="size-4" />
            </a>
          </Button>
          <Button>
            <a href="https://github.com/ImSeanConroy" target="_blank">
              <BsGithub className="size-4" />
            </a>
          </Button>
          <Button>
            <a href="https://www.linkedin.com/in/imseanconroy/" target="_blank">
              <BsLinkedin className="size-4" />
            </a>
          </Button>
          <Button>
            <a href="https://imseanconroy.substack.com/" target="_blank">
              <BsSubstack className="size-4" />
            </a>
          </Button>
          <Button>
            <a href="https://x.com/imseanconroy" target="_blank">
              <BsTwitterX className="size-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="size-28 relative flex h-28 w-28 shrink-0 overflow-hidden rounded-xl">
        <Image
          src="https://avatars.githubusercontent.com/u/59311908?v=4"
          fill
          className="aspect-square h-full w-full"
          alt="Sean Conroy's profile picture"
        />
      </div>
    </header>
  );
};

export default Header;
