import CarDetailsCard from "@/app/_components/carDetails/CarDetailsCard";
import CarGallery from "@/app/_components/carDetails/CarGallery";
import CarReviewsSection from "@/app/_components/carDetails/CarReviewsSection";
import { getCarBySlug } from "@/controllers/CarController";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = await getCarBySlug(slug);
  if (!car) return <h1>Car not found</h1>;
  const images = [car.thumbnail, ...car.gallery];
  return (
    <div className="">
      <div className="grid grid-cols-1 items-stretch justify-center gap-8 lg:grid-cols-2">
        <CarGallery images={images} />
        <CarDetailsCard car={car} />
      </div>
      <CarReviewsSection className="mt-8" />
    </div>
  );
}
