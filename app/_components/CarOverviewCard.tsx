import Image from "next/image";
import {
  GasStationIcon,
  PersonsIcon,
  SteeringIcon,
} from "@/app/_components/Icons";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import { ICar } from "@/types/CarInterface";
import { Zap } from "lucide-react";

interface Props {
  car: ICar;
}
export default function CarOverviewCard({ car }: Props) {
  return (
    <div className="rounded-md bg-white p-6 shadow">
      {/* Header */}
      <CardHeader title={car.name} subtitle={car.brand} />
      {/* Body */}
      <div className="flex items-center gap-5 md:flex-col md:gap-8">
        <div className="relative aspect-video w-full flex-1">
          <Image
            src={car.thumbnail}
            alt={`Photo of ${car.name}`}
            fill
            className="absolute h-full w-full object-contain object-bottom"
          />
          <div className="absolute inset-0 shadow-[inset_0px_-36px_24px_-24px_rgba(255,255,255)]">
            {/* image shadow effect */}
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-wrap md:flex-row">
          <div className="flex items-center gap-2">
            {car.fuelType === "Gasoline" ? (
              <GasStationIcon className="w-3.5 text-secondary-300 md:w-6" />
            ) : (
              <Zap className="w-3.5 text-secondary-300 md:w-6" />
            )}
            <span className="text-sm text-secondary-300 md:text-base">
              {car.fuelType === "Gasoline"
                ? car.fuelCapacity + "L"
                : car.fuelCapacity + "W"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <SteeringIcon className="w-3.5 text-secondary-300 md:w-6" />
            <span className="text-sm text-secondary-300 md:text-base">
              {car.transmission}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <PersonsIcon className="w-3.5 text-secondary-300 md:w-6" />
            <span className="text-sm text-secondary-300 md:text-base">
              {car.capacity} {car.capacity > 1 ? "People" : "Person"}
            </span>
          </div>
        </div>
      </div>
      {/* Footer */}
      <CardFooter
        price={car.price}
        discountPercentage={car.discount}
        linkHref={`/cars/${car.slug}`}
      />
    </div>
  );
}
