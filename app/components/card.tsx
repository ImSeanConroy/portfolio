import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({
  imageSrc,
  href,
  className = "lg:w-1/2",
}: {
  imageSrc: string;
  title?: string;
  href?: string;
  className?: string;
}) => {
  const content = (
    <div className="relative h-[500px] rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800">
      <Image
        src={imageSrc}
        alt="Showcase Image"
        loading="lazy"
        fill
        className="object-cover transition-transform duration-300"
      />
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
