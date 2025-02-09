"use client";

import { TailwindClass } from "@/types/tailwind";
import { useState } from "react";

interface Props {
  body: string;
  className?: TailwindClass;
}

export default function ReviewCardBody({ body, className }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => setIsExpanded((cur) => !cur);
  return (
    <>
      <p
        onClick={toggle}
        className={`${className ?? ""} ${isExpanded ? "" : "line-clamp-2 lg:line-clamp-4"} text-xs leading-[200%] text-secondary-300`}
      >
        {body}{" "}
      </p>
      {!isExpanded && (
        <button className="text-xs text-primary-500 lg:hidden" onClick={toggle}>
          read more
        </button>
      )}
    </>
  );
}
