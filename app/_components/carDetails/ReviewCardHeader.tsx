import Stars from "@/app/_components/Stars";
import { IReview } from "@/types/review";
import { format as formatDate } from "date-fns";
import Image from "next/image";

interface HeaderProps {
  review: IReview;
}
export default function ReviewCardHeader({ review }: HeaderProps) {
  const { name, photo, company, title } = review.user;
  return (
    <div className="flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-2">
        <div className="relative aspect-square w-11 overflow-hidden rounded-full border border-primary-100/15 shadow-sm">
          <Image src={photo} alt="user" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-secondary-500">{name}</h3>
          <h4 className="text-xs font-medium text-secondary-300">
            {title} at {company}
          </h4>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col items-end gap-2">
        <h3 className="text-xs font-medium text-secondary-300">
          {formatDate(review.date, "d MMM yyyy")}
        </h3>
        <Stars starCount={review.rating} maxStarCount={5} />
      </div>
    </div>
  );
}
