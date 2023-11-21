import Link from "next/link";
import type { Metadata } from "next";

import { PageMetadata } from "@/components"

export const metadata: Metadata = PageMetadata({
  title: "Page Not Found - Sean Conroy",
  description:
    "The page you are looking for has either been moved or does not exist. Perhaps it has been refactored out of existence.",
  keywords: [
    "ImSeanConroy",
    "Software Engineer",
    "Portfolio",
    "Web Development",
    "Cisco",
  ],
  link: "https://www.imseanconroy.co.uk",
  image: "https://www.imseanconroy.co.uk/other/socials.png",
});

const NotFound = () => {
  return (
    <>
      <div className="body-section md:mb-20">
        <h1 className="subtitle">Page Not Found</h1>
        <p className="paragraph">
          The page you are looking for has either been moved or does not exist.
          Perhaps it has been refactored out of existence. While we navigate
          this little enigma, feel free to return to familiar territory and
          explore works that bring ideas to life.
        </p>
        <Link href="/">
          <p className="w-full md:w-fit text-medium sm:text-medium sm:text-lg font-light leading-7 sm:leading-8 mb-12 border-b border-gray-900">
            Return to Home
          </p>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
