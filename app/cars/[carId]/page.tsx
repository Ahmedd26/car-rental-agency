import CarDetailsCard from "@/app/_components/carDetails/CarDetailsCard";
import CarGallery from "@/app/_components/carDetails/CarGallery";
import CarReviewsSection from "@/app/_components/carDetails/CarReviewsSection";

const images = [
  "/assets/look-1.jpg",
  "/assets/look-2.jpg",
  "/assets/look-3.jpg",
  "/assets/Car.png",
];
// type CarParams = {
//   carId: string;
// };

// export default function page({ params }: { params: CarParams }) {
export default function page() {
  return (
    <div className="">
      <div className="grid grid-cols-1 items-stretch justify-center gap-8 lg:grid-cols-2">
        <CarGallery images={images} />
        <CarDetailsCard />
      </div>
      <CarReviewsSection className="mt-8" />
    </div>
  );
}
