"use client";

import React, { useEffect, useState } from "react";

const SUBHEADINGS = [
  "Helped develop high-throughput Kafka systems",
  "Helped prototype AWS IoT integrated devices",
  "Helped achieve 115,000+ downloads",
  "Helped build frontend, backend, and cloud features",
  "Helped develop 60+ Terraform resources",
  "Helped resolve 30+ complex system defects",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIndex((prev) => (prev + 1) % SUBHEADINGS.length);
    }

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SUBHEADINGS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-5 w-[70%] m-auto pt-20 pb-32">
      <div className="mb-6 flex justify-center items-center gap-3">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-90 animate-ping" />
          <span className="relative inline-flex h-full w-full rounded-full bg-orange-500 opacity-60" />
        </span>
        <p
          key={index}
          aria-live="polite"
          aria-atomic="true"
          className="text-xl font-bold tracking-tight leading-tight"
        >
          {SUBHEADINGS[index]}
        </p>
      </div>
      <h1 className="text-6xl font-bold tracking-tighter leading-tighter">
        Focused on building systems that are fast, scalable, and easy to use.
      </h1>
    </div>
  );
};

export default Hero;
