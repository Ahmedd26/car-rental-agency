import CarDetailsCard from "@/app/_components/carDetails/CarDetailsCard";
import CarGallery from "@/app/_components/carDetails/CarGallery";

// type CarParams = {
//   carId: string;
// };

const images = [
  "/assets/look-1.jpg",
  "/assets/look-2.jpg",
  "/assets/look-3.jpg",
  "/assets/Car.png",
];

// export default function page({ params }: { params: CarParams }) {
export default function page() {
  return (
    // <div className="my-8 px-6 lg:px-16">
    <div className="">
      <div className="grid grid-cols-1 items-stretch justify-center gap-8 lg:grid-cols-2">
        <CarGallery images={images} />
        <CarDetailsCard />
      </div>
    </div>
  );
}
