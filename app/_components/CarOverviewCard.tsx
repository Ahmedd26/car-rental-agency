import car from "@/public/assets/Car.png";
import Image from "next/image";
import {
  GasStationIcon,
  PersonsIcon,
  SteeringIcon,
} from "@/app/_components/Icons";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
// import LikeButton from "./LikeButton";
export default function CarOverviewCard() {
  return (
    <div className="rounded-md bg-white p-6 shadow">
      {/* Header */}
      <CardHeader title="CR - V" subtitle="SUV" />
      {/* Body */}
      <div className="flex items-center gap-5 md:flex-col md:gap-8">
        <div className="relative aspect-video w-full flex-1">
          <Image
            src={car}
            alt="car"
            // fill
            className="absolute h-full w-full object-contain object-bottom"
          />
          {/* className="object-contain object-bottom" */}
          <div className="absolute inset-0 shadow-[inset_0px_-36px_24px_-24px_rgba(255,255,255)]">
            {/* image shadow effect */}
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-wrap md:flex-row">
          <div className="flex items-center gap-2">
            <GasStationIcon className="w-3.5 text-secondary-300 md:w-6" />
            <span className="text-sm text-secondary-300 md:text-base">80L</span>
          </div>
          <div className="flex items-center gap-2">
            <SteeringIcon className="w-3.5 text-secondary-300 md:w-6" />
            <span className="text-sm text-secondary-300 md:text-base">
              Manual
            </span>
          </div>
          <div className="flex items-center gap-2">
            <PersonsIcon className="w-3.5 text-secondary-300 md:w-6" />
            <span className="text-sm text-secondary-300 md:text-base">
              6 People
            </span>
          </div>
        </div>
      </div>
      {/* Footer */}
      <CardFooter price={80} discountPercentage={5} linkHref="/cars" />
    </div>
  );
}
