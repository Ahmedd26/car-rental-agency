import { formatNumber } from "@/lib/utils";
import { type TailwindClass } from "@/types/tailwind";
import Stars from "../Stars";

interface Props {
  /**
   * @tw
   * Tailwind CSS classes (auto-suggested)
   */
  className?: TailwindClass;
  rating: number;
  ratingCount: number;
}

function CarDetailsRating({ rating, ratingCount, className }: Props) {
  return (
    <div className={`${className} flex items-center gap-2`}>
      <Stars
        starCount={rating}
        maxStarCount={5}
        className="md:text-base lg:text-lg"
      />
      <span className="text-xs font-medium text-secondary-300 md:text-sm lg:text-base">
        {formatNumber(ratingCount)} Reviewer
      </span>
    </div>
  );
}

export default CarDetailsRating;
