"use client";

import { type TailwindClass } from "@/types/tailwind";
import Image from "next/image";
import { useState } from "react";

interface Props {
  /**
   * @tw
   * Tailwind CSS classes (auto-suggested)
   */
  className?: TailwindClass;
  images: string[];
}

export default function CarGallery({ images, className }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const handleImageClick = (index: number) => setActiveImage(index);

  return (
    <div className={className ?? ""}>
      <div className="relative aspect-video w-full overflow-hidden rounded-[10px]">
        <Image
          src={images[activeImage]}
          alt="Car Image"
          fill
          quality={100}
          className="object-cover object-center"
        />
      </div>
      <div className="mt-6 flex flex-wrap gap-4 sm:gap-5">
        {images.map((image) => (
          <picture
            onClick={() => handleImageClick(images.indexOf(image))}
            key={image}
            className={`relative aspect-video w-20 cursor-pointer select-none overflow-hidden rounded-[10px] bg-secondary-500/35 transition-all duration-150 ease-in-out sm:w-28 md:aspect-square md:w-36 ${
              activeImage === images.indexOf(image)
                ? "scale-90 ring-2 ring-primary-500 ring-offset-4 md:ring-4 md:ring-offset-8"
                : ""
            }`}
          >
            <Image
              src={image}
              alt="Car Image"
              fill
              className="object-cover object-center"
            />
          </picture>
        ))}
      </div>
    </div>
  );
}
