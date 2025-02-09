import { TailwindClass } from "@/types/tailwind";
import React, { ReactNode } from "react";

interface Props {
  className?: TailwindClass;
}
export default function CarDetailsTable({ className }: Props) {
  return (
    <table className={`${className ?? ""} w-full border-collapse`}>
      <tbody className="">
        {/* Row 1 */}
        <tr>
          <TableHead>Car type</TableHead>
          <TableData>Sport</TableData>
          <TableHead>Capacity</TableHead>
          <TableData>2 people</TableData>
        </tr>
        {/* Row 2 */}
        <tr>
          <TableHead>Transmission</TableHead>
          <TableData>Manual</TableData>
          <TableHead>Gasoline</TableHead>
          <TableData>70L</TableData>
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
