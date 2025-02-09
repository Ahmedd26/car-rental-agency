import { formatNumber } from "@/lib/utils";
import { type TailwindClass } from "@/types/tailwind";
import Link from "next/link";

interface Props {
  price: number;
  linkHref: string;
  discountPercentage?: number;
  className?: TailwindClass;
}

function CardFooter({ price, discountPercentage, linkHref, className }: Props) {
  return (
    <div
      className={`${className ?? ""} mt-9 flex flex-wrap items-center justify-between gap-4 md:mt-6`}
    >
      <div className="flex flex-col">
        <span className="text-xl font-bold text-secondary-500">
          $
          {discountPercentage
            ? formatNumber(price - price * (discountPercentage / 100))
            : formatNumber(price)}
          /
          <span className="ms-0.5 text-sm font-normal text-secondary-300">
            day
          </span>
        </span>
        {/* Discount, OPTIONAL */}
        {discountPercentage && (
          <span className="text-sm font-bold text-secondary-300 line-through">
            ${formatNumber(price)}
          </span>
        )}
      </div>
      <Link
        href={linkHref}
        className="rounded-sm bg-primary-500 px-4 py-2.5 text-xs font-semibold text-white sm:text-sm md:px-5 md:text-base"
      >
        Rent Now
      </Link>
    </div>
  );
}

export default CardFooter;
