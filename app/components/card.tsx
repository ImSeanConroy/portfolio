import Image from "next/image";
import React from "react";

const Card = ({
  imageSrc,
  title,
  description,
  className = "lg:w-1/2",
}: {
  imageSrc: string;
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className} relative h-[550px] rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800`}
    >
      <Image
        src={imageSrc}
        alt={title ?? "Showcase Image"}
        loading="lazy"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent z-10" />
      {title && description && (
        <div className="absolute bottom-2 left-2 text-white p-4 rounded-lg max-w-md z-10">
          <h2>{title}</h2>
          <p className="text-sm font-light text-gray-200 mt-1">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
