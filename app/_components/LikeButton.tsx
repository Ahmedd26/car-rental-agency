"use client";
import { HeartIcon } from "@/app/_components/Icons";
import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <button
      onClick={() => setIsLiked((cur) => !cur)}
      className="cursor-pointer pb-2 ps-2"
    >
      <HeartIcon
        className={`w-4 ${isLiked ? "text-red-500" : "text-secondary-300"} duration-100 md:w-6`}
      />
    </button>
  );
}
