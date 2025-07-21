import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  imageSrc,
  title,
  description,
  href,
  className = "lg:w-1/2",
  tag,
}: {
  imageSrc: string;
  title?: string;
  description?: string;
  href?: string;
  className?: string;
  tag?: string;
}) => {
  const content = (
    <div className="relative h-[550px] rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800">
      <Image
        src={imageSrc}
        alt={title ?? "Showcase Image"}
        loading="lazy"
        fill
        className="object-cover transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent z-10" />
      <div className="flex flex-col h-full justify-between p-4">
        <>
          {tag && (
            <div className="flex flex-row justify-between  text-zinc-800 dark:text-zinc-300">
              <div className="p-2 px-3 rounded-lg bg-white dark:bg-zinc-900 backdrop-blur z-10">
                <p className="text-sm">Project</p>
              </div>
              <div className="p-2 px-3 rounded-lg bg-white dark:bg-zinc-900 backdrop-blur z-10">
                <p className="text-sm">See More</p>
              </div>
            </div>
          )}
        </>

        {title && description && (
          <div className="text-white p-1 rounded-lg max-w-md z-10">
            <h2>{title}</h2>
            <p className="text-sm font-light text-gray-200 mt-1">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return href ? (
    <Link
      href={href}
      className={className + " cursor-pointer"}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  );
};

export default Card;
