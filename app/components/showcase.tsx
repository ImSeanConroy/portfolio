"use client";

import { motion } from "framer-motion";
import Card from "@/app/components/card";

const slides = [
  {
    imageSrc: "/surf.png",
    width: 800,
  },
  {
    imageSrc: "/project-macro-keyboard.png",
    href: "https://github.com/ImSeanConroy/disturbance-free-calling",
    width: 400,
  },
  {
    imageSrc: "/surf.png",
    href: "https://github.com/ImSeanConroy/disturbance-free-calling",
    width: 800,
  },
  {
    imageSrc: "/project-macro-keyboard.png",
    href: "https://github.com/ImSeanConroy/disturbance-free-calling",
    width: 400,
  },
  {
    imageSrc: "/project-macro-keyboard.png",
    href: "https://github.com/ImSeanConroy/disturbance-free-calling",
    width: 400,
  },
];

const GAP = 16; // 16px (gap-4)

// Calculate exact pixel width of one full set of slides including gaps
const singleSetWidth = slides.reduce((acc, slide) => acc + slide.width + GAP, 0);

// Duplicate the slides array so the loop is seamless
const duplicatedSlides = [...slides, ...slides];

export default function Showcase() {
  return (
    <section className="overflow-hidden">
      {/* Continuous scrolling marquee track */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-4 will-change-transform"
          animate={{ x: [0, -singleSetWidth] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 75, // Adjust speed: higher number = slower, lower number = faster
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              style={{ width: `${slide.width}px` }}
              className="flex-shrink-0"
            >
              <Card
                imageSrc={slide.imageSrc}
                href={slide.href}
                className="w-full"
                isPriority={index < slides.length}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Static work-in-progress note below the images */}
      <div className="px-4 md:px-8 mt-4">
        <p className="text-sm text-zinc-400">
          * This is a work in progress. More interesting projects will be added soon.
        </p>
      </div>
    </section>
  );
}