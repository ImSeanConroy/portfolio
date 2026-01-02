import React from "react";

import Card from "@/app/components/card";

const Showcase = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
      <Card
        imageSrc="/surf.png"
        className="md:w-2/3"
        href="https://github.com/ImSeanConroy/disturbance-free-calling"
      />
      <Card imageSrc="/surf.png" className="md:w-1/3" />
    </div>
  );
};

export default Showcase;
