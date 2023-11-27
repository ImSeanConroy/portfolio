import type { Metadata } from "next";

import { Card, PageMetadata } from "@/components";

export const metadata: Metadata = PageMetadata({
  title: "Junior Software Engineer at Cisco — Sean Conroy",
  description:
    "Transforming complex problems into seamless solutions with a touch of creativity. Explore portfolio to learm more.",
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

const HomePage = () => {
  return (
    <>
      <div className="w-full px-5 md:px-10 pt-10 pb-16 md:pt-36 md:pb-24">
        <div className="w-100 lg:w-3/4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide mb-5 md:leading-tight">
            Transforming complex problems into seamless solutions with a touch
            of creativity.
          </h1>
          <p className="md:w-2/3 text-md sm:text-lg font-light leading-7 sm:leading-8 dark:text-gray-400 ">
            I am a Junior Software Engineer at Cisco, developing and maintaining
            large-scale systems while building out my own projects on the side.
          </p>
        </div>
      </div>
      <div className="w-full px-5 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-rows-5 md:grid-cols-2 grid-flow-row gap-5 md:gap-8 lg:gap-10">
          <div className="row-span-2">
            <Card
              title="Disturbance-Free Calling"
              description="Minimising disturbances to enable productive remote work."
              image="/disturbance-free-calling/home.png"
              link="/disturbance-free-calling"
            />
          </div>
          <div className="row-span-3">
            <Card
              title="Coming Soon"
              description=""
              image="/other/placeholder-lg.png"
              link="/"
            />
          </div>
          <div className="row-span-3">
            <Card
              title="Coming Soon"
              description=""
              image="/other/placeholder-lg.png"
              link="/"
            />
          </div>
          <div className="row-span-2">
            <Card
              title="Coming Soon"
              description=""
              image="/other/placeholder-sm.png"
              link="/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
