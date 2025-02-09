import { IReview } from "@/types/review";
import ReviewCardBody from "@/app/_components/carDetails/ReviewCardBody";
import ReviewCardHeader from "@/app/_components/carDetails/ReviewCardHeader";
interface Props {
  review: IReview;
}
export default function CarReviewsCard({ review }: Props) {
  return (
    <div>
      <ReviewCardHeader review={review} />
      <ReviewCardBody className="mt-4" body={review.review} />
    </div>
  );
}
