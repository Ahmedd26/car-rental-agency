import Card from "@/app/_components/Card";

export default function CarGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }, (_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
}
