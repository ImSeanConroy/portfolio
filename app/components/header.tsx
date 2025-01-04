import { MailIcon, Linkedin, Github } from "lucide-react";
import Button from "@/app/components/ui/button";

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
              <MailIcon className="size-4" />
            </a>
          </Button>
          <Button>
            <a href="https://github.com/ImSeanConroy" target="_blank">
              <Github className="size-4" />
            </a>
          </Button>
          <Button>
            <a href="https://www.linkedin.com/in/imseanconroy/" target="_blank">
              <Linkedin className="size-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="size-28 relative flex h-28 w-28 shrink-0 overflow-hidden rounded-xl">
        <img
          className="aspect-square h-full w-full"
          src="https://avatars.githubusercontent.com/u/59311908?v=4"
        />
      </div>
    </header>
  );
};

export default Header;
