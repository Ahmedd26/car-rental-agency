import Image from "next/image";
import bgImage1 from "@/public/assets/hero/Ads-1-bg.png";
import bgImage2 from "@/public/assets/hero/Ads-2-bg.png";
import car1 from "@/public/assets/hero/Ads-1-car.png";
import Link from "next/link";
import car2 from "@/public/assets/hero/Ads-2-car.png";
export default function Hero() {
  return (
    <header className="grid w-full grid-cols-1 gap-8 px-6 md:grid-cols-2 md:px-16">
      <div className="relative flex aspect-video w-full flex-col overflow-hidden rounded-md p-4 md:p-6">
        <Image
          src={bgImage1}
          fill
          quality={100}
          alt="background image"
          className="-z-40 w-full object-cover"
        />
        <div>
          <h2 className="max-w-[50%] text-lg font-semibold text-white lg:text-4xl">
            The Best Platform for Car Rental
          </h2>
          <p className="mt-3 max-w-[73%] text-sm text-white lg:max-w-[50%] lg:text-lg">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <Link
            className="my-3 inline-block rounded-md bg-primary-500 px-7 py-4 text-white lg:px-5 lg:py-2.5"
            href="/cars"
          >
            Rental Car
          </Link>
        </div>

        <Image
          src={car1}
          alt="background image"
          quality={100}
          className="relative bottom-3 left-1/2 mt-auto -translate-x-1/2"
        />
      </div>
      <div className="relative flex aspect-video w-full flex-col overflow-hidden rounded-md p-4 md:p-6">
        <Image
          src={bgImage2}
          fill
          quality={100}
          alt="background image"
          className="-z-40 w-full object-cover"
        />
        <div>
          <h2 className="max-w-[50%] text-lg font-semibold text-white lg:text-4xl">
            Easy way to rent a car at a low price{" "}
          </h2>
          <p className="mt-3 max-w-[73%] text-sm text-white lg:max-w-[50%] lg:text-lg">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <Link
            className="my-3 inline-block rounded-md bg-info-500 px-7 py-4 text-white lg:px-5 lg:py-2.5"
            href="/cars"
          >
            Rental Car
          </Link>
        </div>

        <Image
          src={car2}
          alt="background image"
          quality={100}
          className="relative bottom-3 left-1/2 mt-auto -translate-x-1/2"
        />
      </div>
    </header>
  );
}
