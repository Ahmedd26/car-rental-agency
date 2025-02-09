export default function ReviewsSectionHeader({
  reviewsCount,
}: {
  reviewsCount: number;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <h3 className="text-xl font-bold text-secondary-500">Reviews</h3>
      <span className="rounded-sm bg-primary-500 px-3 py-1.5 text-sm font-bold text-white">
        {reviewsCount}
      </span>
    </div>
  );
}
