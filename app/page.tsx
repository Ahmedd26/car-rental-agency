import Hero from "@/app/_components/home/Hero";
import Filter from "@/app/_components/Filter/Filter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pb-12 pt-8 md:pb-16">
      <Hero />
      <div className="my-8 px-6 lg:px-16">
        <Filter />
      </div>
    </main>
  );
}
