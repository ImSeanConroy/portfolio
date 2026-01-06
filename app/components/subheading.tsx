"use client";

import { useEffect, useState } from "react";

import { HERO_SUBHEADINGS } from "@/app/constants/hero";

const SubheadingRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIndex((prev) => (prev + 1) % HERO_SUBHEADINGS.length);
    }

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_SUBHEADINGS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const words = HERO_SUBHEADINGS[index].split(" ");

  return (
    <div className="mb-4 md:mb-6 flex justify-center items-center gap-3">
      <span className="relative mx-0 flex size-2 mb-0">
        <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-90 animate-ping" />
        <span className="relative inline-flex h-full w-full rounded-full bg-orange-500 opacity-60" />
      </span>

      <p
        key={index}
        aria-live="polite"
        aria-atomic="true"
        className="text-sm sm:text-base md:text-xl font-bold tracking-tight leading-tight flex flex-wrap justify-center gap-x-1"
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block opacity-0"
            style={{
              animation: "word-in 0.4s ease-out forwards",
              animationDelay: `${i * 80}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
};

export default SubheadingRotator;
