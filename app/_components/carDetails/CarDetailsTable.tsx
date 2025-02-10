import { ICar } from "@/types/CarInterface";
import { TailwindClass } from "@/types/tailwind";
import React, { ReactNode } from "react";

interface Props {
  className?: TailwindClass;
  car: ICar;
}
export default function CarDetailsTable({ car, className }: Props) {
  const { category, capacity, transmission, fuelType, fuelCapacity } = car;
  return (
    <table className={`${className ?? ""} w-full border-collapse`}>
      <tbody className="">
        {/* Row 1 */}
        <tr>
          <TableHead>Car type</TableHead>
          <TableData>{category}</TableData>
          <TableHead>Capacity</TableHead>
          <TableData>
            {`${capacity} ${capacity > 1 ? "person" : "people"}`}
          </TableData>
        </tr>
        {/* Row 2 */}
        <tr>
          <TableHead>Transmission</TableHead>
          <TableData>{transmission}</TableData>
          <TableHead>{fuelType}</TableHead>
          <TableData>{`${fuelCapacity} ${fuelType === "Gasoline" ? "L" : "W"}`}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

function TableHead({ children }: { children: ReactNode }) {
  return (
    <th className="py-2 text-start text-xs font-medium text-secondary-300 sm:text-sm md:text-base">
      {children}
    </th>
  );
}
function TableData({ children }: { children: ReactNode }) {
  return (
    <th className="py-2 text-start text-xs font-semibold text-secondary-500 sm:text-sm md:text-base">
      {children}
    </th>
  );
}
