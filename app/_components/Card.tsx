import car from "@/public/assets/Car.png";
import Image from "next/image";
import {
  GasStationIcon,
  PersonsIcon,
  SteeringIcon,
} from "@/app/_components/Icons";
import Link from "next/link";
import LikeButton from "./LikeButton";
export default function Card() {
  return (
    <div className="rounded-md bg-white p-6 shadow">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">CR - V</h3>
          <h4 className="text-sm font-bold text-secondary-300">SUV</h4>
        </div>
        <LikeButton />
      </div>
      {/* Body */}
      <div className="flex items-center gap-5 md:flex-col md:gap-8">
        <div className="relative aspect-video w-full flex-1">
          <Image
            src={car}
            alt="car"
            fill
            className="object-scale-down object-bottom"
          />
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
      <div className="mt-9 flex flex-wrap items-center justify-between gap-4 md:mt-6">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-secondary-500">
            $80.00/
            <span className="ms-0.5 text-sm font-normal text-secondary-300">
              day
            </span>
          </span>
          {/* Discount, OPTIONAL */}
          <span className="text-sm font-bold text-secondary-300 line-through">
            $100.00
          </span>
        </div>
        <Link
          href="/cars"
          className="rounded-sm bg-primary-500 px-4 py-2.5 text-xs font-semibold text-white sm:text-sm md:px-5 md:text-base"
        >
          Rent Now
        </Link>
      </div>

      {/* Footer: Price + CTA */}
    </div>
  );
}
