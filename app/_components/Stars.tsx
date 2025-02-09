import { type TailwindClass } from "@/types/tailwind";
import { Star } from "lucide-react";

interface Props {
  /**
   * @tw
   * Tailwind CSS classes (auto-suggested)
   */
  className?: TailwindClass;
  starCount: number;
  maxStarCount?: number;
}

function Stars({ starCount, maxStarCount = 5, className }: Props) {
  return (
    <div
      className={`${className ?? ""} inline-flex items-center gap-2 text-sm`}
    >
      {Array.from({ length: maxStarCount }, (_, index) => (
        <Star
          key={index}
          className={`h-[1em] w-[1em] ${
            index < Math.round(starCount)
              ? "fill-yellow-300 text-yellow-400"
              : "text-secondary-300"
          }`}
        />
      ))}
    </div>
  );
}

export default Stars;
