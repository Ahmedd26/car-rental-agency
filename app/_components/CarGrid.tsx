import CarOverviewCard from "@/app/_components/CarOverviewCard";
import { getAllCars } from "@/controllers/CarController";
import { ICar } from "@/types/CarInterface";

export default async function CarGrid() {
  const cars: ICar[] = await getAllCars();
  if (!cars) return <h1>No Cars available</h1>;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cars.map((car) => (
        <CarOverviewCard key={`${car._id}`} car={car} />
      ))}
    </div>
  );
}
