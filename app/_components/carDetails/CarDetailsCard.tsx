import { type TailwindClass } from "@/types/tailwind";
import CarDetailsTable from "./CarDetailsTable";
import CardFooter from "../CardFooter";
import CardHeader from "../CardHeader";
import CarDetailsRating from "./CarDetailsRating";
import { ICar } from "@/types/CarInterface";

interface Props {
  /**
   * @tw
   * Tailwind CSS classes (auto-suggested)
   */
  className?: TailwindClass;
  car: ICar;
}

export default function CarDetailsCard({ className, car }: Props) {
  const { name, ratingsAverage, ratingsQuantity, price, discount } = car;
  return (
    <div
      className={`${className ?? ""} flex flex-col rounded-[10px] bg-white p-4 shadow md:p-6`}
    >
      <CardHeader
        title={name}
        subtitle={
          <CarDetailsRating
            rating={ratingsAverage ?? 0}
            ratingCount={ratingsQuantity ?? 0}
            className="mt-1.5"
          />
        }
      />
      <p className="my-4 text-xs leading-[200%] -tracking-[2%] text-secondary-300 sm:text-sm md:my-8 md:text-base lg:text-xl">
        NISMO has become the embodiment of Nissan&apos;s outstanding
        performance, inspired by the most unforgiving proving ground, the
        &quot;race track&quot;.
      </p>
      <CarDetailsTable className="md:mt-auto" car={car} />
      <CardFooter
        price={price}
        discountPercentage={discount}
        linkHref="/cars"
        // className="md:mt-auto"
      />
    </div>
  );
}
