import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DropDown({
  data,
  placeholder,
  label,
}: {
  data: string[];
  placeholder: string;
  label: string;
}) {
  return (
    <Select>
      <SelectTrigger className="w-full border-none p-0 !text-secondary-300 shadow-none duration-150 hover:!text-primary-500 focus:p-2 focus:outline-none focus:ring-1 focus:ring-primary-500">
        <SelectValue placeholder={placeholder} className="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {data.map((item: string) => (
            <SelectItem value={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
