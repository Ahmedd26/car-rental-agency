import CarReviewsCard from "@/app/_components/carDetails/CarReviewsCard";
import ReviewsSectionHeader from "@/app/_components/carDetails/ReviewsSectionHeader";
import { type IReview } from "@/types/review";
import { type TailwindClass } from "@/types/tailwind";

interface Props {
  className?: TailwindClass;
}
export default function CarReviewsSection({ className }: Props) {
  const reviews = tempData; // Will be replaced later After DB Deployment
  return (
    <div className={`${className ?? ""} rounded-10 bg-white p-4 shadow`}>
      <ReviewsSectionHeader reviewsCount={reviews.length} />
      <div className="grid grid-cols-1 gap-5">
        {reviews.map((review) => (
          <CarReviewsCard review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}
const tempData: IReview[] = [
  {
    user: {
      name: "Alex Stanton",
      title: "CEO",
      company: "Bukalapak",
      photo: "/assets/person.jpg",
    },
    date: "2025-02-10",
    id: 12,
    rating: 4,
    review:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    user: {
      name: "Jason Smith",
      title: "Senior Operations",
      company: "New Clear Ideas",
      photo: "/assets/person.jpg",
    },
    date: "2025-05-19",
    id: 15,
    rating: 3,
    review:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
];
