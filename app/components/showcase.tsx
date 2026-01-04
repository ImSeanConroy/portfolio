import React from "react";
import Card from "@/app/components/card";

const Showcase = () => {
  const slides = [
    { imageSrc: "/surf.png", className: "w-[800px] flex-shrink-0 pl-3" },
    {
      imageSrc: "/project-macro-keyboard.png",
      href: "https://github.com/ImSeanConroy/disturbance-free-calling",
      className: "w-[400px] flex-shrink-0",
    },
    {
      imageSrc: "/surf.png",
      href: "https://github.com/ImSeanConroy/disturbance-free-calling",
      className: "w-[800px] flex-shrink-0",
    },
    {
      imageSrc: "/project-macro-keyboard.png",
      href: "https://github.com/ImSeanConroy/disturbance-free-calling",
      className: "w-[400px] flex-shrink-0",
    },
    {
      imageSrc: "/project-macro-keyboard.png",
      href: "https://github.com/ImSeanConroy/disturbance-free-calling",
      className: "w-[400px] flex-shrink-0 pr-3",
    },
  ];

  return (
    <>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          {slides.map((slide, index) => (
            <Card
              key={index}
              imageSrc={slide.imageSrc}
              href={slide.href}
              className={slide.className}
            />
          ))}
        </div>
      </div>
      <p className="p-3 text-sm text-zinc-400">
        * This is a work in progress. More interesting projects will be added
        soon.
      </p>
    </>
  );
};

export default Showcase;
