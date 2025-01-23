import Hero from "@/app/_components/home/Hero";
import Filter from "@/app/_components/Filter/Filter";
import CarGrid from "@/app/_components/CarGrid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pb-12 pt-8 md:pb-16">
      <Hero />
      <div className="my-8 px-6 lg:px-16">
        <Filter />
      </div>
      <div className="my-8 px-6 lg:px-16">
        <div className="mb-5 flex items-center justify-between sm:mb-6 md:mb-8">
          <h3 className="text-sm font-semibold text-secondary-300 sm:text-base">
            Popular Car
          </h3>
          <Link
            href="/cars"
            className="text-xs font-semibold text-primary-500 sm:text-sm md:text-base"
          >
            View All
          </Link>
        </div>
        <CarGrid />
      </div>
    </main>
  );
}
